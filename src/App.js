import React, { useEffect, useState } from "react";

import { useLocation } from "react-router-dom";

import { getAll, getById, updateById, resetAll } from "./utility/utility";

import Options from "./img/options.webp";
import Hamburger from "./img/hamburger.png";

import Card from "./components/Card";
import "./App.css";

function App() {
  const [cards, setCards] = useState([]);
  const [showCards, setShowCards] = useState([]); // showing arr of indexes as strings.
  const [showArchived, setShowArchived] = useState(false);

  const location = useLocation();

  useEffect(() => {
    location.pathname = "Inbox";
    resetAll(setCards, setShowCards);
  }, []);

  function handleArchiveCall(item) {
    // inputs like "1", "4", "6"
    var index = showCards.indexOf(item);
    if (index !== -1) {
      showCards.splice(item, 1);
    }
    setShowCards(showCards);
  }

  return (
    <div className="container">
      <div id="containerInner">
        <div className="headerContainer">
          <div id="header">
            <div>Activity</div>
            <div>{/* intentionally blank */}</div>
            <div
              onClick={() => {
                location.pathname = "Inbox";
                setShowArchived(false);
                console.log(showArchived, false, cards);
                // resetStates() // fixme: reset all Removed cards to nonRemoved after click Inbox
              }}
            >
              <p className="headerText silentGreyText">Inbox</p>
            </div>
            <div
              onClick={() => {
                location.pathname = "All Calls";
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
                let cardIsToBeShown = !showCards.includes(index.toString());
                console.log(75, index, "archived:", cardIsToBeShown);
                return (
                  <Card
                    key={index}
                    created_at={card.created_at}
                    number={card.from}
                    recipient={card.from}
                    archiveCall={() => {
                      handleArchiveCall(index);
                    }}
                    id={card.id}
                    followUpCall={() => {
                      getAll(setCards);
                    }}
                    archived={cardIsToBeShown}
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
          console.log(showCards, showArchived, "inspecting...");
        }}
      >
        Inspect
      </button>
    </div>
  );
}

export default App;

// import Footer from "./Footer.jsx";
