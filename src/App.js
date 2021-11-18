import React, { useEffect, useState } from "react";

import { getAll, getById, updateById } from "./utility/utility";

import Options from "./img/options.webp";
import Hamburger from "./img/hamburger.png";

import Card from "./components/Card";
import "./App.css";

function App() {
  const [cards, setCards] = useState([]);
  const [showArchived, setShowArchived] = useState(false);

  useEffect(() => {
    getAll(setCards);
  }, []);

  return (
    <div className="container">
      <div id="containerInner">
        <div className="headerContainer">
          <div id="header">
            <div>Activity</div>
            <div>{/* intentionally blank */}</div>
            <div
              onClick={() => {
                setShowArchived(false);
                console.log(showArchived, false, cards);
              }}
            >
              <p className="headerText silentGreyText">Inbox</p>
            </div>
            <div
              onClick={() => {
                setShowArchived(true);
                console.log(showArchived, true, cards);
              }}
            >
              <p className="headerText silentGreyText">All calls</p>
            </div>
            <div>
              <img id="optionsImg" src={Options} alt="options" />
            </div>
          </div>
          <div
            id="archiveBox"
            onClick={() => {
              let updatedCards = [];
              cards.forEach((card) => {
                let archivedCard = (card.is_archived = true);
                updatedCards.push(archivedCard);
              });
              setCards(updatedCards);
            }}
          >
            <img src={Hamburger} alt="box" />
            <p>Archive all calls</p>
          </div>
        </div>
        <div className="container-view">
          {cards
            ? cards.map((card, index) => {
                return (
                  <Card
                    key={index}
                    created_at={card.created_at}
                    number={card.from}
                    recipient={card.from}
                    archived={card.is_archived}
                    archiveCall={updateById}
                    id={card.id}
                    followUpCall={() => {
                      getAll(setCards);
                    }}
                    showAll={showArchived}
                  />
                );
              })
            : null}
        </div>
        {/* <Footer/> */}
      </div>
    </div>
  );
}

export default App;

// import Footer from "./Footer.jsx";
