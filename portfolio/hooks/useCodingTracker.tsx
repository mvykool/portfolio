import useSWR from "swr";

interface FileType {
  type: string;
  duration: number;
}

interface DailyData {
  _id: string;
  file_types: FileType[];
  total_duration: number;
}

const fetcher = async (
  url: string,
  excludeTypes: string[],
): Promise<DailyData | null> => {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error("Failed to fetch data");

    const data: DailyData[] = await res.json();

    // Get the most recent day's data (first item in array)
    if (!data || !Array.isArray(data) || data.length === 0) {
      console.error("No data available");
      return null;
    }

    const todayData = data[0];

    // Filter out excluded file types
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
  const { data, error, isLoading } = useSWR(
    url ? [url, excludeTypes] : null,
    () => fetcher(url, excludeTypes),
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      refreshInterval: 300000, // Refresh every 5 minutes
      dedupingInterval: 300000, // Dedupe requests within 5 minutes
    },
  );

  return {
    data: data || { _id: "", total_duration: 0, file_types: [] },
    loading: isLoading,
    error: error?.message,
  };
};
