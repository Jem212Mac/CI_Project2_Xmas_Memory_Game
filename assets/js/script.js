const cardArea = document.querySelector(".card-area");
var body = document.getElementsByTagName('body')[0];
let cards = [];
let firstCard, secondCard;
let lockGame = false;
let score = 0;
let matchCounter = 0;
const sfxFlip = document.getElementById('sfx-flip');
const sfxCheer = document.getElementById('sfx-cheer');
let radioBtns = document.querySelectorAll('input[name="background"]');

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

/* Based on Fisher-Yates shuffle algorithm obtained from stack overflow site */
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

/* Function to setup or create shuffled card on html page */
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

/* Function to flip first and second cards and check for a match */
function turnCard() {
    if (lockGame) return;
    if (this === firstCard) return;
    this.classList.add("turned");
    sfxFlip.play();
    if (!firstCard) {
        firstCard = this;
        return;
    }

    secondCard = this;
    sfxFlip.play();
    score++;
    document.querySelector(".score").textContent = score;
    lockGame = true;

    checkForMatch();
}

/* Function to check if first and second cards match */
function checkForMatch() {
    let isThereMatch = firstCard.dataset.name === secondCard.dataset.name;
    isThereMatch ? disableCards() : turnBackCards();
}

/* Function to disable the cards if they match and to display celebration modal and play sfx if it is the last two cards that are matched */
function disableCards() {
    firstCard.removeEventListener("click", turnCard);
    secondCard.removeEventListener("click", turnCard);
    matchCounter++;
    if (matchCounter === 12) {
        sfxCheer.play();
        modal_celebration.classList.add('show');
        document.querySelector(".score").textContent = score;
    }
    resetGame();
}

/* Functions to flip cards back and reset the game if the cards do not match */
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

/* Function to restart the entire game */
function restart() {
    resetGame();
    shuffleCards();
    score = 0;
    matchCounter = 0;
    document.querySelector(".score").textContent = score;
    cardArea.innerHTML = "";
    createCards();
}

/* Function to allow background selection using radio buttons */
function findSelected() {
    let selected = document.querySelector('input[name="background"]:checked').value;
    document.body.classList = [`${selected}`];
}
radioBtns.forEach(radioBtn => {
    radioBtn.addEventListener('change', findSelected);
});
findSelected();

/* Function to open game rules modal if button clicked */
function openModal() {
    modal_container.classList.add('show');
}

/* Function to close game rules modal */
function closeModal() {
    modal_container.classList.remove('show');
}

/* Function to close celebration modal */
function closeCelebration() {
    modal_celebration.classList.remove('show');
}