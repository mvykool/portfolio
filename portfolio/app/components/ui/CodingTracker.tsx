import useFetch from "@/hooks/useCodingTracker";
import React from "react";
import { SiNeovim } from "react-icons/si";
import { strings } from "@/app/constants/coding-tracker";
import { excludeFileTypes } from "@/app/constants/coding-tracker-filter";
import Loader from "@/components/Loader";

export const CodingTracker = (props: {}) => {
  const { data, loading, error } = useFetch(
    process.env.NEXT_PUBLIC_API_URL as string,
    excludeFileTypes,
  );

  const formatDuration = (seconds: number) => {
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
      if (hours >= 1 && minutes > 0) {
        timeString += " - ";
      }
      timeString += `${minutes} min${minutes !== 1 ? "s" : ""}`;
    }

    return timeString;
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-full">
        <Loader />
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  console.log(data);

  return (
    <>
      <div className="flex mt-7 mb-3 items-center">
        <SiNeovim className="text-green-500 text-4xl ml-10" />
        <div>
          <div className="flex flex-col ml-3">
            <span className="text-green-600 text-sm">Coding Session:</span>
            <span className="text-green-600 text-sm">
              {data?.total_duration
                ? formatDuration(data?.total_duration)
                : "No session duration recorded"}
            </span>
          </div>
        </div>
      </div>

      <div className="w-full px-8 mt-2 flex gap-2 flex-wrap">
        <ul className="flex flex-wrap gap-2">
          {data?.file_types.length > 0 ? (
            data.file_types.map((file: any, index: number) => {
              const fileInfo = strings.find(
                (info: any) => info.type === file.type,
              );

              const fileName = fileInfo ? fileInfo.name : file.type;
              const backgroundColor = fileInfo ? fileInfo.color : "#0000";
              const formattedDuration = formatDuration(file.duration);
              if (!formattedDuration) return null;

              return (
                <li
                  key={index}
                  style={{
                    backgroundColor,
                  }}
                  className="rounded-lg px-2"
                >
                  <span>{fileName}</span>:{" "}
                  <span className="text-xs"> {formattedDuration}</span>
                </li>
              );
            })
          ) : (
            <li>No files to display</li>
          )}
        </ul>
      </div>
    </>
  );
};
