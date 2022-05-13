const card = document.querySelectorAll(".card");
const cardPic = document.querySelectorAll(".card-pic");

cardPic.style = "background: red;";
card.onmouseover = function () {
  cardPic.style = "scale: 1.12";
};

card.onmouseout = function () {
  cardPic.style = "scale: 1";
};

console.log(card);
