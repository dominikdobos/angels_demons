export const CARDS = [];

function fillCards() {
  for (let index = 1; index <= 20; index++) {
    CARDS.push([index, Math.floor(Math.random() * 2)]);
  }
}
fillCards();
console.log(CARDS);
