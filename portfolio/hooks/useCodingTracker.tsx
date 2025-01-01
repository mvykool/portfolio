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

const TIMEOUT_DURATION = 5000; // 5 seconds timeout
const FALLBACK_DATA: DailyData = {
  _id: "",
  total_duration: 0,
  file_types: [],
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

    const todayData = data[0];
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
      refreshInterval: 300000, // Refresh every 5 minutes
      dedupingInterval: 300000, // Dedupe requests within 5 minutes
      loadingTimeout: TIMEOUT_DURATION,
      onLoadingSlow: () => {
        setShouldUseFallback(true);
      },
    },
  );

  // Set up timeout
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

  // Get cached data using the key
  const cacheKey = JSON.stringify([url, excludeTypes]);
  const cachedData = cache.get(cacheKey)?.data as DailyData | undefined;

  return {
    data:
      shouldUseFallback && timeoutReached
        ? cachedData || FALLBACK_DATA
        : data || FALLBACK_DATA,
    loading: isLoading && !timeoutReached,
    error: error?.message,
    isStale: shouldUseFallback && timeoutReached && !!data,
    refresh: () => mutate(),
  };
};
