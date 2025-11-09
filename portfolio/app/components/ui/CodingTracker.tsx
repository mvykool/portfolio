import { memo } from "react";
import { SiNeovim } from "react-icons/si";

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
  return (
    <section>
      <div className="flex mt-3 md:mt-7 mb-3 items-center">
        <SiNeovim className="text-green-500 text-4xl ml-2 md:ml-10" />
        <div className="flex flex-col ml-3">
          <span className="text-green-600 text-sm">Coding Session:</span>
          <span className="text-green-600 text-sm">3h - 22 mins</span>
        </div>
      </div>
      <div className="w-full flex-col px-2 md:px-8 mt-2 flex gap-2 flex-wrap">
        <ul className="flex flex-wrap gap-2">
          <div>
            <ul className="flex flex-wrap gap-2">
              <li className="rounded-lg px-1 md:px-1 py-1 w-auto md:w-auto flex items-start md:items-center gap-0 md:gap-1 bg-[#4d8ddb] text-xs md:text-sm">
                TSX 1h - 20 mins
              </li>
              <li className="rounded-lg px-1 md:px-1 py-1 w-auto md:w-auto flex items-start md:items-center gap-0 md:gap-1 bg-[#4d8ddb] text-xs md:text-sm">
                Rust 2h - 02 mins
              </li>
            </ul>
          </div>
        </ul>
      </div>
    </section>
  );
});

CodingTracker.displayName = "CodingTracker";
