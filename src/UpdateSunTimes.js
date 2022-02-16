import React from "react";

function UpdateSunTimes(props) {
  let sunUnix = props.data;
  let newSun = sunUnix * 1000;
  let dateSun = new Date(newSun);
  let hoursSun = dateSun.getHours();
  let convertedHour = convertHour(hoursSun);
  let minutesSun = dateSun.getMinutes();
  let convertedMinute = convertMinutes(minutesSun);
  let morningOrAfternoon = defineAM_PM(hoursSun);
  let fullSun = `${convertedHour}:${convertedMinute}${morningOrAfternoon}`;

  function convertHour(hour) {
    let hours = [
      12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
      11,
    ];
    return hours[hour];
  }

  function convertMinutes(minute) {
    if (minute < 10) {
      return `0${minute}`;
    } else {
      return `${minute}`;
    }
  }

  function defineAM_PM(hour) {
    if (hour <= 11) {
      return "AM";
    } else {
      return "PM";
    }
  }

  return <div>{fullSun}</div>;
}

export default UpdateSunTimes;
