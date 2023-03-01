const root = document.querySelector(":root");
console.log(root.style);
root.style.setProperty("--theme-color", sessionStorage.getItem("themeColor"));

function handleColorChange(element) {
  let colorToChangeTo = getComputedStyle(element).backgroundColor;
  console.log(colorToChangeTo);
  sessionStorage.setItem("themeColor", colorToChangeTo);
  root.style.setProperty("--theme-color", colorToChangeTo);
  console.log(root.style);
}

document.querySelector(".color-changer").addEventListener("click", (event) => {
  if (event.target.classList.contains("color")) {
    handleColorChange(event.target);
  }
});
