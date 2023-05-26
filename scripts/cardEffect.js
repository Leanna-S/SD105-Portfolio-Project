const nextCardButton = document.getElementById("get-next-card");
const previousCardButton = document.getElementById("get-previous-card");
const cardContainer = document.querySelector(".card-container");
const cards = document.querySelectorAll(".card img");
const art = [
  "/art/IMG_1111.jpg",
  "/art/IMG_1113.jpg",
  "/art/IMG_0775.jpg",
  "/art/IMG_0987.jpg",
  "/art/IMG_0923.jpg",
  "/art/IMG_1114.jpg",
  "/art/IMG_1315.jpg",
  "/art/IMG_0854.jpg",
  "/art/IMG_1037.jpg",
  "/art/IMG_0972.jpg",
  "/art/IMG_1033.jpg",
  "/art/IMG_1314.jpg",
  "/art/IMG_1312.jpg",
  "/art/IMG_1034.jpg",
  "/art/IMG_1035.jpg",
  "/art/IMG_1112.jpg",
  "/art/IMG_0890.jpg",
  "/art/IMG_1310.jpg",
  "/art/IMG_1313.jpg",
  "/art/IMG_0798.jpg",
  "/art/IMG_0880.jpg",
  "/art/IMG_1209.jpg",
  "/art/IMG_0924.jpg",
  "/art/IMG_1032.jpg",
  "/art/IMG_1318.jpg",
  "/art/IMG_1400.jpg",
  "/art/IMG_0891.jpg",
  "/art/IMG_1039.jpg",
  "/art/IMG_0993.jpg",
  "/art/IMG_0881.jpg",
  "/art/IMG_1316.jpg",
  "/art/IMG_0936.jpg",
  "/art/IMG_0977.jpg",
  "/art/IMG_1036.jpg",
];

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }

  return array;
}

let currentPhoto = 0;

function handleCardClick(currentCard) {
  currentCard.style.zIndex = "1";
  currentCard.style.transform = "translate(0) scale(1.25)";
  setTimeout(() => {
    currentCard.style.zIndex = "";
    currentCard.style.transform = "";
  }, "1500");
}

function nextCard() {
  if (currentPhoto + 4 >= art.length) {
    currentPhoto = 0;
  } else {
    currentPhoto = currentPhoto + 4;
  }
  cards.forEach((card, index) => {
    card.src = `${art[currentPhoto + index]}`;
    changeCard(card);
  });
}

function previousCard() {
  if (currentPhoto <= 4) {
    currentPhoto = art.length;
  } else {
    currentPhoto = currentPhoto - 4;
  }

  cards.forEach((card, index) => {
    card.src = `${art[currentPhoto - index - 1]}`;
    changeCard(card);
  });
}

function changeCard(card) {
  card.classList.add("fade-in-animation");
  setTimeout(() => {
    card.classList.remove("fade-in-animation");
  }, "1000");
}

previousCardButton.addEventListener("click", previousCard);
nextCardButton.addEventListener("click", nextCard);

cardContainer.addEventListener("click", (event) => {
  if (event.target.classList.contains("card") || event.target.tagName === "IMG") {
    handleCardClick(event.target.closest(".card"));
  }
});

cardContainer.addEventListener("focusin", (event) => {
  if (event.target.classList.contains("card") || event.target.tagName === "IMG") {
    handleCardClick(event.target.closest(".card"));
  }
});

shuffle(art);
nextCard();
