import _ from "lodash";
import restoPhoto from "./fancyresto.jpg";

function renderHomePage() {
  const mainDiv = document.querySelector(".main");
  mainDiv.innerText = "welcome.";
  return mainDiv;
}

export { renderHomePage };
