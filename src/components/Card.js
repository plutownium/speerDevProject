import React, { useState } from "react";

import {
  convertToMilitaryTime,
  convertTwentyFourHourClockToTwelveHour,
} from "../utility/time";

// import Menu from "../img/menu.png";
import Phone from "../img/phone.png";

import "./Card.css";

function Card({
  created_at,
  number,
  recipient,
  archived,
  archiveCall,
  id,
  followUpCall,
  showAllState,
}) {
  // const [removed, setRemoved] = useState(false);
  console.log(24, archived, showAllState);
  let date = created_at.split("T")[0];
  let timeCodeAs24HrClock = convertToMilitaryTime(created_at); // no bug at this point
  let timeCode = convertTwentyFourHourClockToTwelveHour(timeCodeAs24HrClock);
  // console.log(9, date, timeCode);
  // let archivalClassAdded = showAllState ? true : archived ? true : false;
  let archivalClassAdded = false;
  return (
    <div
      className={`cardMainContainer ${
        archivalClassAdded ? "hideBecauseArchived" : null
      }`}
    >
      <div className="cardHeaderContainer">
        <div className="headerInnerContainer flexPlainCenter">
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
      <div
        className="roundedBorderHighlight infoContainer flexSpaceBetween"
        onClick={() => {
          console.log("removing id", id);
          archiveCall(id.toString());
          // followUpCall(); // fixme: remove this prolly
        }}
      >
        <div className="flexBoxStandard infoContainerInner flexSpaceBetween">
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
          <div className="timeContainer flexSpaceBetween">
            <div className="silentGreyText">{timeCode[0]}</div>
            <div className="ampmBox flexPlainCenter silentGreyText">
              {timeCode[1]}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
