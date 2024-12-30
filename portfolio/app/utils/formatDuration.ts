export const formatDuration = (seconds: number): string | null => {
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
