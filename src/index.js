import _ from "lodash";
import "./styles.css";
import { navbar } from "./navbar";
import { printMe, printYou } from "./print.js";

// function component() {
//   const element = document.createElement("div");
//   const btn = document.createElement("button");
//   // Lodash, currently included via a script, is required for this line to work
//   element.innerHTML = _.join(
//     ["Hello", "webpack", "it's Anthony Pantaleo"],
//     " "
//   );
//   btn.innerHTML = "Click me and check the console!";
//   btn.onclick = printYou;
//   element.appendChild(btn);
//   return element;
// }

// document.body.appendChild(component());

document.body.appendChild(navbar());
