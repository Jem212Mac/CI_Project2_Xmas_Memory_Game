const cardArea = document.querySelector(".card-area");
let cards = [];
let firstCard, secondCard;
let lockGame = false;
let score = 0;

document.querySelector(".score").textContent = score;

cards = [
    { name: "elf", image: "../images/elf.webp" },
    { name: "gingerbread", image: "../images/gingerbread_man.webp" },
    { name: "rudolph", image: "../images/rudolph.webp" },
    { name: "santa", image: "../images/santa_claus.webp" },
    { name: "sleigh", image: "../images/santas_sleigh.webp" },
    { name: "snowman", image: "../images/snowman.webp" },
    { name: "stocking", image: "../images/xmas_stocking.webp" },
    { name: "tree", image: "../images/xmas_tree.webp" },
    { name: "elf", image: "../images/elf.webp" },
    { name: "gingerbread", image: "../images/gingerbread_man.webp" },
    { name: "rudolph", image: "../images/rudolph.webp" },
    { name: "santa", image: "../images/santa_claus.webp" },
    { name: "sleigh", image: "../images/santas_sleigh.webp" },
    { name: "snowman", image: "../images/snowman.webp" },
    { name: "stocking", image: "../images/xmas_stocking.webp" },
    { name: "tree", image: "../images/xmas_tree.webp" },
];

console.log(cards);

function shuffleCards() {
    let currentIndex = cards.length, randomIndex;
    while (currentIndex > 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [cards[currentIndex], cards[randomIndex]] =
            [cards[randomIndex], cards[currentIndex]];
    }

    return cards;
}

/* shuffleCards();
console.log(cards); */

function createCards() {
    for (let card of cards) {
        const cardElement = document.createElement("div");
        cardElement.classList.add("card");
        cardElement.setAttribute("data-name", card.name);
        cardElement.innerHTML = `
            <div class="front">
                <img class="front-image" src=${card.image}/>
            </div>
            <div class="back"></div>
            `;
        cardArea.appendChild(cardElement);
        cardElement.addEventListener("click", turnCard);
    }
}

createCards();

function turnCard() {
    if (lockGame) return;
    if (this === firstCard) return;

    this.classList.add("turned");
    if (!firstCard) {
        firstCard = this;
        return;
    }

    secondCard = this;
    score++;
    document.querySelector(".score").textContent = score;
    lockGame = true;

    checkForMatch();
}

function checkForMatch() {
    let isThereMatch = firstCard.dataset.name === secondCard.dataset.name;
    isThereMatch ? disableCards() : turnBackCards();
}

function disableCards() {
    firstCard.removeEventListener("click", turnCard);
    secondCard.removeEventListener("click", turnCard);

    resetGame();
}

function turnBackCards() {
    setTimeout(() => {
        firstCard.classList.remove("turned");
        secondCard.classList.remove("turned");
        resetGame();
    }, 1000);
}

function resetGame() {
    firstCard = null;
    secondCard = null;
    lockGame = false;
}

function restart() {
    resetGame();
    shuffleCards();
    score = 0;
    document.querySelector(".score").textContent = score;
    cardArea.innerHTML = "";
    createCards();
}