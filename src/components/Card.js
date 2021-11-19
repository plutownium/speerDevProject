import React, { useState } from "react";

import {
  convertToMilitaryTime,
  convertTwentyFourHourClockToTwelveHour,
} from "../utility/time";

// import Menu from "../img/menu.png";
import Phone from "../img/phone.png";

import "./Card.css";

function Card({
  id,
  created_at,
  number,
  recipient,
  isArchived,
  archiveCall,
  showAllState,
}) {
  let archivalClassAdded = false;
  if (showAllState) {
    archivalClassAdded = true;
  }
  if (isArchived) {
    archivalClassAdded = true;
  }
  console.log(archivalClassAdded, showAllState, isArchived, 2222222222222);

  let date = created_at.split("T")[0];
  let timeCodeAs24HrClock = convertToMilitaryTime(created_at); // no bug at this point
  let timeCode = convertTwentyFourHourClockToTwelveHour(timeCodeAs24HrClock);
  // console.log(9, date, timeCode);
  // let archivalClassAdded = false;
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
          let idToRemove = id.toString();
          archiveCall(idToRemove); // this block is fine
        }}
      >
        <div className="flexBoxStandard infoContainerInner flexSpaceBetween">
          <div className="leftContainer width100">
            <div className="iconContainer">
              <img src={Phone} alt="phone" className="icon" />
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
      <button
        onClick={() => {
          console.log(
            "inspecting...",
            isArchived,
            archiveCall,
            id,
            showAllState
          );
        }}
      >
        Inspect
      </button>
    </div>
  );
}

export default Card;
