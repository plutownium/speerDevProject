import React from "react";

// import Menu from "../img/menu.png";
// import Phone from "../img/phone.png";

import "./Card.css";

function Card({ created_at, number, recipient }) {
  let date = created_at.split("T")[0];
  let timeCode = created_at.split("T")[1].split(".")[0];
  console.log(9, date, timeCode);
  return (
    <div className="cardMainContainer">
      <div className="headerContainer">
        <div className="headerInnerContainer dateContainer">
          <div className="dotMakerContainer">
            <div></div>
            <div></div>
          </div>
          <div className="dateContainerInner">
            <p>{date}</p>
          </div>
          <div className="dotMakerContainer">
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
      <div className="roundedBorderHighlight infoContainer">
        <div className="flexBoxStandard">
          <div>
            {/* <img src={Phone} alt="phone" /> */}
            {/* <img src={} alt="phone" /> */}
          </div>
          <div>
            <div>33 6 45 13 53 91</div>
            <div>tried to call on {recipient}</div>
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
