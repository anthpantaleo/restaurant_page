import _ from "lodash";
import "./styles.css";
import { navbar } from "./navbar";
import { createFooter } from "./footer";
import { listenToPage } from "./addEventListeners.js";

document.body.appendChild(navbar());
document.body.appendChild(createFooter());
listenToPage();
