import _ from "lodash";
import "./styles.css";
import Favicon from "./favicon.png";

function component() {
  const element = document.createElement("div");

  // Lodash, currently included via a script, is required for this line to work
  element.innerHTML = _.join(
    ["Hello", "webpack", "it's Anthony Pantaleo"],
    " "
  );

  return element;
}

document.body.appendChild(component());

console.log("testing");
console.log("sup");
