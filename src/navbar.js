import _ from "lodash";
import Icon from "./favicon.png";

function navbar() {
  // Initiate Nav Bar Div
  const navBar = document.createElement("div");
  navBar.classList.add("nav");
  // Add First Row
  const navRow = document.createElement("div");
  navRow.classList.add("navtoprow");
  navBar.appendChild(navRow);
  // Add First Image
  const leftImage = new Image();
  leftImage.src = Icon;
  navRow.appendChild(leftImage);
  // Add Title
  const restTitle = document.createElement("div");
  restTitle.textContent = "STASH.";
  navRow.appendChild(restTitle);
  // Add Second Image
  const rightImage = new Image();
  rightImage.src = Icon;
  navRow.appendChild(rightImage);
  // Add Nav Buttons + Second Row
  // Add Second Row
  const secondNavRow = document.createElement("div");
  secondNavRow.classList.add("navbottomrow");
  // Create Home Button
  const homeButton = document.createElement("button");
  homeButton.classList.add("menubutton");
  homeButton.setAttribute("id", "homeButton");
  homeButton.innerText = "Home";
  secondNavRow.appendChild(homeButton);
  // Create Menu Button
  const menuButton = document.createElement("button");
  menuButton.classList.add("menubutton");
  menuButton.setAttribute("id", "menuButton");
  menuButton.innerText = "Menu";
  secondNavRow.appendChild(menuButton);
  // Create Contact Button
  const contactButton = document.createElement("button");
  contactButton.classList.add("menubutton");
  contactButton.setAttribute("id", "contactButton");
  contactButton.innerText = "Contact";
  secondNavRow.appendChild(contactButton);

  navBar.appendChild(secondNavRow);
  return navBar;
}

export { navbar };
