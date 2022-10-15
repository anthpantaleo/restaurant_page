import _ from "lodash";

function renderMenu() {
  const mainDiv = document.querySelector(".main");
  mainDiv.innerText = "menu.";
  const description = document.createElement("div");
  description.classList.add("menudescription");
  description.innerText =
    "we offer a unique dining, party, and drinking experience. we cater to your guests every whim and delight. our chefs and mixologists are sure to impress upon you their skill. the menu is selected and hand crafted upon arrival. be assured you will arive hungry, thirsty, and indulgent, and leave satiated.";
  mainDiv.appendChild(description);
  return mainDiv;
}

export { renderMenu };
