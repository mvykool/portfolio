import { useState, useEffect } from "react";
import useSWR, { useSWRConfig } from "swr";

interface FileType {
  type: string;
  duration: number;
}

interface DailyData {
  _id: string;
  file_types: FileType[];
  total_duration: number;
}

const TIMEOUT_DURATION = 3000;
const FALLBACK_DATA: DailyData = {
  _id: new Date()
    .toLocaleDateString("en-US", {
      month: "2-digit",
      day: "2-digit",
      year: "numeric",
    })
    .replace(/\//g, "-"),
  total_duration: 0,
  file_types: [],
};

const getTodayString = () => {
  return new Date()
    .toLocaleDateString("en-US", {
      month: "2-digit",
      day: "2-digit",
      year: "numeric",
    })
    .replace(/\//g, "-");
};

const fetcher = async (
  url: string,
  excludeTypes: string[],
): Promise<DailyData | null> => {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error("Failed to fetch data");
    const data: DailyData[] = await res.json();

    if (!data || !Array.isArray(data) || data.length === 0) {
      console.error("No data available");
      return null;
    }

    const todayString = getTodayString();
    const todayData = data.find((entry) => entry._id === todayString);

    if (!todayData) {
      console.log(`No data found for today (${todayString})`);
      return null;
    }

    return {
      ...todayData,
      file_types: todayData.file_types.filter(
        (file) => !excludeTypes.includes(file.type),
      ),
    };
  } catch (error) {
    console.error("Fetch error:", error);
    throw error;
  }
};

export const useCodingTracker = (url: string, excludeTypes: string[]) => {
  const [shouldUseFallback, setShouldUseFallback] = useState(false);
  const [timeoutReached, setTimeoutReached] = useState(false);
  const { cache } = useSWRConfig();

  const { data, error, isLoading, mutate } = useSWR(
    url ? [url, excludeTypes] : null,
    () => fetcher(url, excludeTypes),
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      refreshInterval: 300000,
      dedupingInterval: 300000,
      loadingTimeout: TIMEOUT_DURATION,
      onLoadingSlow: () => {
        setShouldUseFallback(true);
      },
    },
  );

  useEffect(() => {
    if (isLoading) {
      const timeoutId = setTimeout(() => {
        setTimeoutReached(true);
      }, TIMEOUT_DURATION);

      return () => clearTimeout(timeoutId);
    } else {
      setTimeoutReached(false);
      setShouldUseFallback(false);
    }
  }, [isLoading]);

  const cacheKey = JSON.stringify([url, excludeTypes]);
  const cachedData = cache.get(cacheKey)?.data as DailyData | undefined;

  const validCachedData =
    cachedData?._id === getTodayString() ? cachedData : FALLBACK_DATA;

  return {
    data:
      shouldUseFallback && timeoutReached
        ? validCachedData
        : data || FALLBACK_DATA,
    loading: isLoading && !timeoutReached,
    error: error?.message,
    isStale: shouldUseFallback && timeoutReached && !!data,
    refresh: () => mutate(),
  };
};
