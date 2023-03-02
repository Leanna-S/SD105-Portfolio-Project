const nextCardButton = document.getElementById("get-next-card");
const previousCardButton = document.getElementById("get-previous-card");
const cardContainer = document.querySelector(".card-container");
const cards = document.querySelectorAll(".card img");
const art = [
  "IMG_1111",
  "IMG_1112",
  "IMG_1113",
  "IMG_1114",
  "IMG_0775",
  "IMG_0854",
  "IMG_0880",
  "IMG_0881",
  "IMG_0890",
  "IMG_0891",
  "IMG_0923",
  "IMG_0924",
  "IMG_0936",
  "IMG_0972",
  "IMG_0977",
  "IMG_0987",
  "IMG_0993",
  "IMG_1032",
  "IMG_1033",
  "IMG_1034",
  "IMG_1035",
  "IMG_1036",
  "IMG_1037",
  "IMG_1039",
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
    card.src = `./images/${art[currentPhoto + index]}.jpg`;
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
    card.src = `./images/${art[currentPhoto - index - 1]}.jpg`;
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
