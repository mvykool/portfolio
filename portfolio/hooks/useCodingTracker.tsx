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
const REFRESH_INTERVAL = 300000;

// Placeholder data to show immediately during cold starts
const PLACEHOLDER_DATA: DailyData = {
  _id: new Date()
    .toLocaleDateString("en-US", {
      month: "2-digit",
      day: "2-digit",
      year: "numeric",
    })
    .replace(/\//g, "-"),
  total_duration: 0,
  file_types: [
    { type: "typescript", duration: 0 },
    { type: "typescriptreact", duration: 0 },
  ],
};

const FALLBACK_DATA: DailyData = {
  ...PLACEHOLDER_DATA,
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
      return null;
    }

    const todayString = getTodayString();
    const todayData = data.find((entry) => entry._id === todayString);

    if (!todayData) {
      return FALLBACK_DATA;
    }

    return {
      ...todayData,
      file_types: todayData.file_types.filter(
        (file) => !excludeTypes.includes(file.type),
      ),
    };
  } catch (error) {
    console.error("Fetch error:", error);
    return FALLBACK_DATA;
  }
};

export const useCodingTracker = (url: string, excludeTypes: string[]) => {
  const [shouldUseFallback, setShouldUseFallback] = useState(false);
  const [timeoutReached, setTimeoutReached] = useState(false);
  const { cache } = useSWRConfig();

  // Start with placeholder data immediately
  const [immediateData, setImmediateData] =
    useState<DailyData>(PLACEHOLDER_DATA);

  const { data, error, isLoading, mutate } = useSWR(
    url ? [url, excludeTypes] : null,
    () => fetcher(url, excludeTypes),
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      refreshInterval: REFRESH_INTERVAL,
      dedupingInterval: REFRESH_INTERVAL,
      loadingTimeout: TIMEOUT_DURATION,
      onLoadingSlow: () => {
        setShouldUseFallback(true);
      },
      isPaused: () => document.hidden,
      // Use fallback data immediately
      fallbackData: PLACEHOLDER_DATA,
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
    cachedData?._id === getTodayString() ? cachedData : PLACEHOLDER_DATA;

  // If we're in a cold start (loading is slow), show "Session starting..."
  const isInColdStart = isLoading && timeoutReached;

  return {
    data:
      shouldUseFallback && timeoutReached
        ? validCachedData
        : data || PLACEHOLDER_DATA,
    loading: isLoading && !timeoutReached,
    error: error?.message,
    isStale: shouldUseFallback && timeoutReached && !!data,
    isColdStart: isInColdStart,
    refresh: () => mutate(),
  };
};
