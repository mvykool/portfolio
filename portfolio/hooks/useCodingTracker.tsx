import { useState, useEffect } from "react";

const useFetch = (url: string, excludeFileTypes: any = []) => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Helper function to convert seconds to hours and minutes
  const convertDuration = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    return { hours, minutes };
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const result = await response.json();

        // Extract the first entry
        const firstEntry = result[0];
        // Filter out the file types you don't want

        const filteredFileTypes = firstEntry.file_types.filter(
          (file: any) => !excludeFileTypes.includes(file.type),
        );

        // Convert total duration

        setData({
          ...firstEntry,
          file_types: filteredFileTypes,
        });
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]); // Re-fetch when the URL or excludeFileTypes changes

  return { data, loading, error };
};

export default useFetch;
