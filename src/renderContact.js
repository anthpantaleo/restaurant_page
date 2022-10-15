import _ from "lodash";
import { saySomething } from "./index";

function renderContact() {
  const mainDiv = document.querySelector(".main");
  mainDiv.innerText = "contact.";
  return mainDiv;
}

export { renderContact };
