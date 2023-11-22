const cardArea = document.querySelector(".card-area");
var body = document.getElementsByTagName('body')[0];
let cards = [];
let firstCard, secondCard;
let lockGame = false;
let score = 0;
let matchCounter = 0;

document.querySelector(".score").textContent = score;

cards = [
    { name: "snowman1", image: "assets/images/snowman_1.jpg" },
    { name: "snowman2", image: "assets/images/snowman_2.jpg" },
    { name: "snowman3", image: "assets/images/snowman_3.jpg" },
    { name: "snowman4", image: "assets/images/snowman_4.jpg" },
    { name: "snowman5", image: "assets/images/snowman_5.jpg" },
    { name: "snowman6", image: "assets/images/snowman_6.jpg" },
    { name: "gingerbread", image: "assets/images/gingerbread_man.jpg" },
    { name: "rudolph", image: "assets/images/reindeer.jpg" },
    { name: "santa", image: "assets/images/santa.jpg" },
    { name: "reading_santa", image: "assets/images/reading_santa.jpg" },
    { name: "bear", image: "assets/images/polar_bear.jpg" },
    { name: "penguin", image: "assets/images/penguin.jpg" },
    { name: "snowman1", image: "assets/images/snowman_1.jpg" },
    { name: "snowman2", image: "assets/images/snowman_2.jpg" },
    { name: "snowman3", image: "assets/images/snowman_3.jpg" },
    { name: "snowman4", image: "assets/images/snowman_4.jpg" },
    { name: "snowman5", image: "assets/images/snowman_5.jpg" },
    { name: "snowman6", image: "assets/images/snowman_6.jpg" },
    { name: "gingerbread", image: "assets/images/gingerbread_man.jpg" },
    { name: "rudolph", image: "assets/images/reindeer.jpg" },
    { name: "santa", image: "assets/images/santa.jpg" },
    { name: "reading_santa", image: "assets/images/reading_santa.jpg" },
    { name: "bear", image: "assets/images/polar_bear.jpg" },
    { name: "penguin", image: "assets/images/penguin.jpg" },
];

shuffleCards();
createCards();

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

function createCards() {
    for (let card of cards) {
        const cardElement = document.createElement("div");
        cardElement.classList.add("card");
        cardElement.setAttribute("data-name", card.name);
        cardElement.innerHTML = `
            <div class="front">
                <img class="front-image" src=${card.image}>
            </div>
            <div class="back"></div>
            `;
        cardArea.appendChild(cardElement);
        cardElement.addEventListener("click", turnCard);
    }
}

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
    matchCounter++;
    if (matchCounter === 12) {
       modal_celebration.classList.add('show');
    }
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
    matchCounter = 0;
    document.querySelector(".score").textContent = score;
    cardArea.innerHTML = "";
    createCards();
}

let radioBtns = document.querySelectorAll('input[name="background"]');

function findSelected() {
    let selected = document.querySelector('input[name="background"]:checked').value;
    document.body.classList = [`${selected}`];
}
radioBtns.forEach(radioBtn => {
    radioBtn.addEventListener('change', findSelected);
});
findSelected();

function openModal() {
    modal_container.classList.add('show');
}

function closeModal() {
    modal_container.classList.remove('show');
}

function closeCelebration() {
    modal_celebration.classList.remove('show');
}