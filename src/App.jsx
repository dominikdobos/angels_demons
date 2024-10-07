import { useState } from "react";

import Card from "./components/Card";
import { CARDS } from "./data";

function App() {
  const [selectedCard, setSelectedCard] = useState();

  function handleSelect(id) {
    setSelectedCard(id);
  }

  let msg = <h1>Select a card!</h1>;

  if (selectedCard) {
    if (CARDS[selectedCard - 1][1]) {
      msg = <h1>Angel</h1>;
    } else {
      msg = <h1>Demon</h1>;
    }
  }

  return (
    <>
      <div className="site">
        <header>
          <h1>{msg}</h1>
        </header>
        <div className="card-container">
          {CARDS.map((cardItem, index) => (
            <Card
              key={index}
              isSelected={selectedCard === index + 1}
              onSelect={() => handleSelect(index + 1)}
              cardReveal={cardItem[1] ? true : false}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
