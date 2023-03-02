const root = document.querySelector(":root");
root.style.setProperty("--theme-color", sessionStorage.getItem("themeColor"));

function handleColorChange(element) {
  let colorToChangeTo = getComputedStyle(element).backgroundColor;
  sessionStorage.setItem("themeColor", colorToChangeTo);
  root.style.setProperty("--theme-color", colorToChangeTo);
}

document.querySelector(".color-changer").addEventListener("click", (event) => {
  if (event.target.classList.contains("color")) {
    handleColorChange(event.target);
  }
});
