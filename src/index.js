import _ from "lodash";
import "./styles.css";
import { navbar } from "./navbar";
import { createFooter } from "./footer";
import { listenToPage } from "./addEventListeners";
// import { renderHomePage } from "./renderHome";

document.body.appendChild(navbar());
listenToPage();
document.body.appendChild(createFooter());
