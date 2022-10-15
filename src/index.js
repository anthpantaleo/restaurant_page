import _ from "lodash";
import "./styles.css";
import { navbar } from "./navbar";
import { createFooter } from "./footer";
import { renderHomePage } from "./renderHome";
import { renderContact } from "./renderContact";
import { renderMenu } from "./renderMenu";

document.body.appendChild(navbar());

function listenToPage() {
  const homeButton = document.getElementById("homeButton");
  const menuButton = document.getElementById("menuButton");
  const contactButton = document.getElementById("contactButton");
  const bodyContent = document.createElement("div");
  bodyContent.classList.add("main");
  document.body.appendChild(bodyContent);
  homeButton.addEventListener("click", function () {
    console.log("home");
    renderHomePage();
  });
  menuButton.addEventListener("click", function () {
    console.log("menu");
    renderMenu();
  });
  contactButton.addEventListener("click", function () {
    console.log("contact");
    renderContact();
  });
  return bodyContent;
}

listenToPage();
renderHomePage();

document.body.appendChild(createFooter());
