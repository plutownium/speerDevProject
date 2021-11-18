export function convertTwentyFourHourClockToTwelveHour(militaryTime) {
  let twelveHourVersion = "";
  let hourPart = militaryTime.split(":")[0];
  let asTwelveHourClock = parseInt(hourPart, 10);
  if (asTwelveHourClock <= 12) {
    twelveHourVersion =
      twelveHourVersion.toString() + "0" + asTwelveHourClock.toString();
  } else {
    twelveHourVersion = asTwelveHourClock - 12;
    twelveHourVersion = "0" + twelveHourVersion.toString();
  }
  let minutesString = militaryTime.split(":")[1];
  twelveHourVersion = twelveHourVersion + ":" + minutesString;
  let pm = "AM";
  if (hourPart > 12) {
    pm = "PM";
  }
  return [twelveHourVersion, pm];
}

export function convertToMilitaryTime(created_at) {
  return created_at
    .split("T")[1]
    .split(".")[0]
    .split(":")
    .slice(0, 2)
    .join(":"); // yes I love a good one liner
}
