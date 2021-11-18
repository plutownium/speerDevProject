import React from "react";

// import Menu from "../img/menu.png";
import Phone from "../img/phone.png";

import "./Card.css";

function convertTwentyFourHourClockToTwelveHour(militaryTime) {
  let twelveHourVersion = "";
  let hourPart = militaryTime.split(":")[0];
  let asTwelveHourClock = parseInt(hourPart, 10);
  if (asTwelveHourClock <= 12) {
    console.log(true, asTwelveHourClock);
    twelveHourVersion =
      twelveHourVersion.toString() + "0" + asTwelveHourClock.toString();
  } else {
    console.log(16, asTwelveHourClock);
    twelveHourVersion = asTwelveHourClock - 12;
    twelveHourVersion = "0" + twelveHourVersion.toString();
  }
  let minutesString = militaryTime.split(":")[1];
  twelveHourVersion = twelveHourVersion + ":" + minutesString;
  console.log(
    militaryTime,
    hourPart,
    asTwelveHourClock,
    minutesString,
    twelveHourVersion
  );
  let pm = "AM";
  if (hourPart > 12) {
    pm = "PM";
  }
  return [twelveHourVersion, pm];
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
                <p className="silentGreyText thinText">
                  tried to call on {recipient}
                </p>
              </div>
            </div>
          </div>
          <div className="timeContainer">
            <div className="silentGreyText">{timeCode[0]}</div>
            <div className="ampmBox silentGreyText">{timeCode[1]}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
