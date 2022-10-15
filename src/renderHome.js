import _ from "lodash";
import restoPhoto from "./resto2.jpg";

function renderHomePage() {
  const mainDiv = document.querySelector(".main");
  mainDiv.innerHTML = "";
  mainDiv.innerText = "welcome";
  const welcomeMessage = document.createElement("div");
  welcomeMessage.classList.add("welcomemessage");
  welcomeMessage.innerText = "we are open for exclusive patrons only.";
  mainDiv.appendChild(welcomeMessage);

  const homeimage = new Image();
  homeimage.classList.add("homeimage");
  homeimage.src = restoPhoto;
  mainDiv.appendChild(homeimage);
  return mainDiv;
}

export { renderHomePage };
