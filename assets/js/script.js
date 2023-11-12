const cardArea = document.querySelector(".card-area");
let cards = [];
let firstCard, secondCard;
let lockCards = false;
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
