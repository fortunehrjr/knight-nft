const hamburger = document.querySelector(".hamburger");
const rightSide = document.querySelector(".right-side");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("active");
  rightSide.classList.toggle("active");
});
