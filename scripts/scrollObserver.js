const sections = [...document.querySelectorAll("section")];

const io = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.intersectionRatio > 0) {
      // Add 'active' class if observation target is inside viewport
      entry.target.classList.add("active");
    }
  });
});

sections.forEach((section) => {
  io.observe(section);
});
