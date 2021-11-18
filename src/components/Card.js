import React from "react";

// import Menu from "../img/menu.png";
// import Phone from "../img/phone.png";

function Card({ created_at, number, recipient }) {
  let date = created_at.split("T")[0];
  let timeCode = created_at.split("T")[1].split(".")[0];
  return (
    <div>
      <div className="headerContainer">
        <div className="headerInnerContainer">
          <p>{date}</p>
        </div>
      </div>
      <div className="roundedBorderHighlight">
        <div className="flexBoxStandard">
          <div>
            {/* <img src={Phone} alt="phone" /> */}
            {/* <img src={} alt="phone" /> */}
          </div>
          <div>
            <div>33 6 45 13 53 91</div>
            <div>tried to call on {recipient}</div>
          </div>
          <div>
            <div>{/* <img src={Menu} alt="menu" /> */}</div>
            <div>{timeCode}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
