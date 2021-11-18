import React from "react";

// import Menu from "../img/menu.png";
import Phone from "../img/phone.png";

import "./Card.css";

function convertTwentyFourHourClockToTwelveHour(militaryTime) {
  let twelveHourVersion = "";
  let hourPart = militaryTime.split(":")[0];
  let asTwelveHourClock = parseInt(hourPart, 10) - 12;
  if (asTwelveHourClock <= 9) {
    twelveHourVersion =
      twelveHourVersion.toString() + "0" + asTwelveHourClock.toString();
  } else {
    twelveHourVersion =
      twelveHourVersion.toString() + asTwelveHourClock.toString();
  }
  let minutesString = militaryTime.split(":")[1];
  twelveHourVersion = twelveHourVersion + ":" + minutesString;
  console.log(hourPart, asTwelveHourClock, minutesString, twelveHourVersion);
  return twelveHourVersion;
}

function convertToMilitaryTime(created_at) {
  return created_at
    .split("T")[1]
    .split(".")[0]
    .split(":")
    .slice(0, 2)
    .join(":"); // yes I love a good one liner
}

function Card({ created_at, number, recipient }) {
  let date = created_at.split("T")[0];
  let timeCodeAs24HrClock = convertToMilitaryTime(created_at); // no bug at this point
  let timeCode = convertTwentyFourHourClockToTwelveHour(timeCodeAs24HrClock);
  // console.log(9, date, timeCode);
  return (
    <div className="cardMainContainer">
      <div className="headerContainer">
        <div className="headerInnerContainer dateContainer">
          <div className="dotMakerContainer">
            <div></div>
            <div></div>
          </div>
          <div className="dateContainerInner">
            <p className="dateFont">{date}</p>
          </div>
          <div className="dotMakerContainer">
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
      <div className="roundedBorderHighlight infoContainer">
        <div className="flexBoxStandard infoContainerInner">
          <div className="leftContainer width100">
            <div className="iconContainer">
              <img src={Phone} alt="phone" className="icon" />
              {/* <img src={} alt="phone" /> */}
            </div>
            <div className="width100">
              <div>
                <p className="boldFont">{number}</p>
              </div>
              <div className="width100">
                <p>tried to call on {recipient}</p>
              </div>
            </div>
          </div>
          <div className="timeContainer">
            <div>{timeCode}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
