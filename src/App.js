import React, { useEffect, useState } from "react";

import { useLocation } from "react-router-dom";

import { getAll, getById, updateById, resetAll } from "./utility/utility";

import Options from "./img/options.webp";
import Hamburger from "./img/hamburger.png";

import Card from "./components/Card";
import "./App.css";

function App() {
  const [cards, setCards] = useState([]);
  const [showCardsByStringInt, setShowCardsByStringInt] = useState([]); // showing arr of indexes as strings.
  const [showAllArchived, setShowAllArchived] = useState(false);

  const location = useLocation();

  useEffect(() => {
    document.title = "Inbox";
    resetAll(setCards, setShowCardsByStringInt);
  }, [location]);

  function handleArchiveCall(item) {
    // inputs like "1", "4", "6"
    // THIS WORKS.
    console.log(27, "REMOVING card...", item);
    var index = showCardsByStringInt.indexOf(item);
    if (index !== -1) {
      showCardsByStringInt.splice(index, 1);
    }
    console.log(32, showCardsByStringInt);
    setShowCardsByStringInt(showCardsByStringInt);
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
                document.title = "Inbox";
                setShowAllArchived(false);
                console.log(showAllArchived, false, cards);
                // resetStates() // fixme: reset all Removed cards to nonRemoved after click Inbox
              }}
            >
              <p className="headerText silentGreyText">Inbox</p>
            </div>
            <div
              onClick={() => {
                document.title = "All Calls";
                setShowAllArchived(true);
                console.log(showAllArchived, true, cards);
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
                let cardHasBeenArchived = !showCardsByStringInt.includes(
                  index.toString()
                );

                console.log(
                  showCardsByStringInt,
                  index,
                  cardHasBeenArchived,
                  9898989898
                );

                return (
                  <Card
                    key={cards.indexOf(card)}
                    created_at={card.created_at}
                    number={card.from}
                    recipient={card.from}
                    archiveCall={(index) => {
                      handleArchiveCall(index);
                    }}
                    id={cards.indexOf(card)}
                    isArchived={cardHasBeenArchived}
                    showAllState={showAllArchived}
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
