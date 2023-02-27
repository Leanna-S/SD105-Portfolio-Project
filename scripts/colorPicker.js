const root = document.querySelector(":root");
root.style.setProperty("--theme-color", sessionStorage.getItem("theme-color"));

function handleColorChange(element) {
  let colorToChangeTo = getComputedStyle(element).background;

  root.style.setProperty("--theme-color", colorToChangeTo);
  sessionStorage.setItem("theme-color", colorToChangeTo);
}

document.querySelector(".color-changer").addEventListener("click", (event) => {
  if (event.target.classList.contains("color")) {
    handleColorChange(event.target);
  }
});
