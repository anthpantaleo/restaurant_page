import _ from "lodash";
import restoPhoto from "./fancyresto.jpg";
import { listenToPage } from "./addEventListeners";

function renderHomePage() {
  const restoPageImage = new Image();
  restoPageImage.src = restoPhoto;
}

export { renderHomePage };
