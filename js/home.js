const cards = document.querySelectorAll(".card");
const cardPics = document.querySelectorAll(".card-pic");

cards.forEach((card) => {
  card.onmouseover = function () {
    card.childNodes.forEach((node) => {
      if (node.className === "card-pic") {
        node.style = "scale: 1.2";
      }
    });
  };

  card.onmouseout = function () {
    card.childNodes.forEach((node) => {
      if (node.className === "card-pic") {
        node.style = "scale: 1";
      }
    });
  };
});
