import _ from "lodash";

function renderMenu() {
  const mainDiv = document.querySelector(".main");
  mainDiv.innerText = "menu.";
  return mainDiv;
}

export { renderMenu };
