const floatIn = [...document.querySelectorAll(".inactive")];
const options = {
  threshold: [0.25, 0.5, 0.75, 1],
};

const io = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.intersectionRatio >= 0.5) {
      // Add 'active' class if observation target is inside viewport
      entry.target.classList.remove("inactive");
      entry.target.classList.add("active");
    }
  });
}, options);

floatIn.forEach((section) => {
  io.observe(section);
});
