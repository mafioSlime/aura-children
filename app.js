const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".main-nav");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  hamburger.classList.toggle("toggle");
});
