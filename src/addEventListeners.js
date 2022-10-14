import _ from "lodash";

function listenToPage() {
  const homeButton = document.getElementById("homeButton");
  const menuButton = document.getElementById("menuButton");
  const contactButton = document.getElementById("contactButton");
  const bodyContent = document.createElement("div");
  bodyContent.classList.add("main");
  document.body.appendChild(bodyContent);
  homeButton.addEventListener("click", function () {
    console.log("home");
  });
  menuButton.addEventListener("click", function () {
    console.log("menu");
  });
  contactButton.addEventListener("click", function () {
    console.log("contact");
  });
  return bodyContent;
}

export { listenToPage };
