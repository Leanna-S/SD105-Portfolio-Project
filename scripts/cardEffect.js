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

let currentPhoto = 3;

function handleCardClick(currentCard) {
  currentCard.style.zIndex = "1";
  currentCard.style.transform = "translate(0) scale(1.25)";
  setTimeout(() => {
    currentCard.style.zIndex = "";
    currentCard.style.transform = "";
  }, "1500");
}

nextCardButton.addEventListener("click", () => {
  cards.forEach((card) => {
    if (currentPhoto >= art.length - 1) {
      currentPhoto = 0;
    } else {
      currentPhoto++;
    }

    card.classList.add("fade-in-animation");
    card.src = `./images/${art[currentPhoto]}.jpg`;
    setTimeout(() => {
      card.classList.remove("fade-in-animation");
    }, "1000");
  });
});

previousCardButton.addEventListener("click", () => {
  cards.forEach((card) => {
    if (currentPhoto <= 3) {
      currentPhoto = art.length + 2;
    } else {
      currentPhoto--;
    }

    card.classList.add("fade-in-animation");
    card.src = `./images/${art[currentPhoto - 3]}.jpg`;
    setTimeout(() => {
      card.classList.remove("fade-in-animation");
    }, "1000");
  });
});

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
