import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";

import { getAll, getById, updateById } from "./utility/utility";

import Header from "./Header.jsx";
import Card from "./components/Card";
function App() {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    console.log(13);
    getAll(setCards);
  }, []);
  return (
    <div className="container">
      <Header />
      <div className="container-view">
        {/* <Card/> */}
        {/* <Card/> */}
        {cards.length > 0
          ? cards.map((card, index) => {
              return (
                <Card
                  key={index}
                  date={card.created_at}
                  number={card.from}
                  timeCode={card.created_at}
                  recipient={card.from}
                />
              );
            })
          : null}
      </div>
      {/* <Footer/> */}
    </div>
  );
}

export default App;

// import Footer from "./Footer.jsx";
