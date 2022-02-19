import React from "react";
import "./App.css";

function LastRequest() {
  let currentDate = new Date();
  let convertedDay = determineDay(currentDate.getDay());
  let convertedMonth = determineMonth(currentDate.getMonth());
  let convertedMinute = convertMinutes(currentDate.getMinutes());
  let convertedHour = convertHour(currentDate.getHours());
  let am_or_pm = defineAM_PM(currentDate.getHours());
  let currentDayNumber = currentDate.getDate();

  let formattedDate = `${convertedDay}, ${convertedMonth} ${currentDayNumber}, ${convertedHour}:${convertedMinute}${am_or_pm}`;

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

  function determineDay(day) {
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }

  function determineMonth(month) {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    return months[month];
  }

  return (
    <div>
      <span id="cur-day-time">
        <strong>Last Data Request:</strong> {formattedDate}
      </span>
    </div>
  );
}

export default LastRequest;
