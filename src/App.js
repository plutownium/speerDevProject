import React, { useEffect, useState } from "react";

import { useLocation } from "react-router-dom";

import { getAll, getById, updateById, resetAll } from "./utility/utility";

import Options from "./img/options.webp";
import Hamburger from "./img/hamburger.png";

import Card from "./components/Card";
import "./App.css";

function App() {
  const [cards, setCards] = useState([]);
  const [showArchived, setShowArchived] = useState(false);

  const location = useLocation();

  useEffect(() => {
    document.title = "Inbox";
    getAll();
  }, [location]);

  return (
    <div className="container">
      <div id="containerInner">
        <div className="headerContainer">
          <div id="header">
            <div>Activity</div>
            <div>{/* intentionally blank */}</div>
            <div
              onClick={() => {
                document.title = "Inbox";
                setShowArchived(false);
                console.log(showArchived, false, cards);
                // resetStates() // fixme: reset all Removed cards to nonRemoved after click Inbox
              }}
            >
              <p className="headerText silentGreyText">Inbox</p>
            </div>
            <div
              onClick={() => {
                document.title = "All Calls";
                setShowArchived(true);
                console.log(showArchived, true, cards, showArchived);
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
                    archiveCall={() => {
                      updateById(card.id);
                    }}
                    id={card.id}
                    archived={card.is_archived}
                    showAllState={showArchived}
                  />
                );
              })
            : null}
        </div>
        {/* <Footer/> */}
      </div>
      <button
        onClick={() => {
          console.log(showCardsByStringInt, showArchived, "inspecting...");
        }}
      >
        Inspect
      </button>
    </div>
  );
}

export default App;

// import Footer from "./Footer.jsx";
