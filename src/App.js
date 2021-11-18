import React, { useEffect, useState } from "react";

import { getAll, getById, updateById } from "./utility/utility";

import Card from "./components/Card";

import "./App.css";

function App() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    console.log(13);
    getAll(setCards);
  }, []);

  return (
    <div className="container">
      <div id="containerInner">
        <div>foo</div>
        <div className="container-view">
          {cards
            ? cards.map((card, index) => {
                return (
                  <Card
                    key={index}
                    created_at={card.created_at}
                    number={card.from}
                    recipient={card.from}
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
