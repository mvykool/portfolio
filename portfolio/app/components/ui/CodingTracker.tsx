import { memo } from "react";
import { SiNeovim } from "react-icons/si";
import { strings } from "@/app/constants/coding-tracker";
import { excludeFileTypes } from "@/app/constants/coding-tracker-filter";
import Loader from "@/components/Loader";
import { useCodingTracker } from "@/hooks/useCodingTracker";

const formatDuration = (seconds: number): string | null => {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);

  if (minutes === 0 && hours === 0) {
    return null;
  }

  let timeString = "";
  if (hours >= 1) {
    timeString += `${hours} H`;
  }
  if (minutes > 0 || hours >= 1) {
    if (hours >= 1) {
      timeString += " - ";
    }
    timeString += `${minutes} min${minutes !== 1 ? "s" : ""}`;
  }
  return timeString;
};

export const CodingTracker = memo(() => {
  const { data, loading, error, isStale } = useCodingTracker(
    process.env.NEXT_PUBLIC_API_URL as string,
    excludeFileTypes,
  );

  if (loading) {
    return (
      <div className="flex justify-center mx-auto items-center h-full">
        <Loader />
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <section>
      <div className="flex mt-3 md:mt-7 mb-3 items-center">
        <SiNeovim className="text-green-500 text-4xl ml-2 md:ml-10" />
        <div className="flex flex-col ml-3">
          <span className="text-green-600 text-sm">Coding Session:</span>
          <span className="text-green-600 text-sm">
            {data.total_duration
              ? formatDuration(data.total_duration)
              : "No session duration recorded"}
          </span>
        </div>
      </div>
      {isStale && <div>Showing cached data...</div>}
      <div className="w-full flex-col px-2 md:px-8 mt-2 flex gap-2 flex-wrap">
        <ul className="flex flex-wrap gap-2">
          {data.file_types.length > 0 ? (
            data.file_types.map((file, index) => {
              const fileInfo = strings.find((info) => info.type === file.type);
              const fileName = fileInfo ? fileInfo.name : file.type;
              const backgroundColor = fileInfo ? fileInfo.color : "#0000";
              const formattedDuration = formatDuration(file.duration);
              if (!formattedDuration) return null;
              return (
                <li
                  key={index}
                  style={{ backgroundColor }}
                  className="rounded-lg px-1 md:px-2 py-1 w-auto md:w-auto flex items-start md:items-center gap-0 md:gap-2"
                >
                  <span className="text-xs md:text-sm">{fileName}:</span>
                  <span className="text-xs md:text-sm">
                    {formattedDuration}
                  </span>
                </li>
              );
            })
          ) : (
            <li>No files to display</li>
          )}
        </ul>
      </div>
    </section>
  );
});

CodingTracker.displayName = "CodingTracker";
