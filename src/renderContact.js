import _ from "lodash";
import { saySomething } from "./index";

function renderContact() {
  const mainDiv = document.querySelector(".main");
  mainDiv.innerText = "contact.";
  const contactmethod = document.createElement("div");
  contactmethod.classList.add("contactmethod");
  contactmethod.innerText =
    "for inquiries into our services, please call anthony.";
  mainDiv.appendChild(contactmethod);
  return mainDiv;
}

export { renderContact };
