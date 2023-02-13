const nextCardButton = document.getElementById("get-next-card");
const previousCardButton = document.getElementById("get-previous-card");
const cardContainer = document.querySelector(".card-container");
const cards = document.querySelectorAll(".card img");
const art = [
  "IMG_1111.PNG",
  "IMG_1112.PNG",
  "IMG_1113.PNG",
  "IMG_1114.PNG",
  "IMG_0775.PNG",
  "IMG_0854.PNG",
  "IMG_0880.PNG",
  "IMG_0881.PNG",
  "IMG_0890.PNG",
  "IMG_0891.PNG",
  "IMG_0923.PNG",
  "IMG_0924.PNG",
  "IMG_0936.PNG",
  "IMG_0972.PNG",
  "IMG_0977.PNG",
  "IMG_0987.PNG",
  "IMG_0993.PNG",
  "IMG_1032.PNG",
  "IMG_1033.PNG",
  "IMG_1034.PNG",
  "IMG_1035.PNG",
  "IMG_1036.PNG",
  "IMG_1037.PNG",
  "IMG_1039.PNG",
];

let currentPhoto = 3;

nextCardButton.addEventListener("click", () => {
  cards.forEach((card) => {
    if (currentPhoto >= art.length - 1) {
      currentPhoto = 0;
    } else {
      currentPhoto++;
    }
    card.src = `/images/${art[currentPhoto]}`;
    card.classList.add("fade-in-animation");
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

    card.src = `/images/${art[currentPhoto - 3]}`;
    card.classList.add("fade-in-animation");
    setTimeout(() => {
      card.classList.remove("fade-in-animation");
    }, "1000");
  });
});
