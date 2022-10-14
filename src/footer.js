import _ from "lodash";
import footerImage from "./githublogo.png";

function createFooter() {
  //Create Footer Div
  const footerdiv = document.createElement("div");
  footerdiv.classList.add("footer");
  // Footer Div Wrapper
  const footerDivContent = document.createElement("div");
  footerDivContent.classList.add("footercontent");
  // Name creation
  const footerContentA = document.createElement("div");
  footerContentA.innerText = "Made with love by anthpantaleo";
  //Create Link
  const footerContentLink = document.createElement("a");
  footerContentLink.setAttribute(
    "href",
    "https://github.com/anthpantaleo/rock_paper_scissors"
  );
  footerContentLink.setAttribute("target", "_blank");
  // create and append image
  const footerContentImg = new Image();
  footerContentImg.src = footerImage;
  // append to the Footer Content Link
  footerContentLink.appendChild(footerContentImg);
  footerDivContent.appendChild(footerContentA);
  footerDivContent.appendChild(footerContentLink);
  footerdiv.appendChild(footerDivContent);
  return footerdiv;
}

export { createFooter };
