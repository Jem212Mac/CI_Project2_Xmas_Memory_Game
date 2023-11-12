const cardArea = document.querySelector(".card-area");
let cards = [];
let firstCard, secondCard;
let lockGame = false;
let score = 0;

document.querySelector(".score").textContent = score;

cards = [
    { name: "elf", image: "elf.webp" },
    { name: "gingerbread", image: "gingerbread_man.webp" },
    { name: "rudolph", image: "rudolph.webp" },
    { name: "santa", image: "santa_claus.webp" },
    { name: "sleigh", image: "santas_sleigh.webp" },
    { name: "snowman", image: "snowman.webp" },
    { name: "stocking", image: "xmas_stocking.webp" },
    { name: "tree", image: "xmas_tree.webp" },
];

shuffleCards();
createCards();

function shuffleCards() {
    let currentIndex = cards.length,
    randomIndex,
    tempValue;
    while (currentIndex == 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        tempValue = cards[currentIndex];
        cards[currentIndex] = cards[randomIndex];
        cards[randomIndex] = tempValue;
    }
}

function createCards() {
    for (let card of cards) {
        const cardElement = document.createElement("div");
        cardElement.classList.add("card");
        cardElement.setAttribute("date-name", card.name);
        cardElement.innerHTML = `
            <div class="front">
                <img class="front-image" src={card.image}/>
            </div>
            <div class="back"></div>
            `;
            cardArea.appendChild(cardElement);
    }
}