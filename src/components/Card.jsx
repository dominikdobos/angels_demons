import angel from "/src/imgs/angel.jpeg";
import demon from "/src/imgs/demon.jpeg";
import backside from "/src/imgs/backside.jpeg";

function Card({ isSelected, onSelect, cardReveal }) {
  return (
    <div className={isSelected ? "active card" : "card"} onClick={onSelect}>
      {isSelected ? (
        <img src={cardReveal ? angel : demon} />
      ) : (
        <img src={backside}></img>
      )}
    </div>
  );
}

export default Card;
