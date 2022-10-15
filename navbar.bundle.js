"use strict";
(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["navbar"],{

/***/ "./src/navbar.js":
/*!***********************!*\
  !*** ./src/navbar.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "navbar": () => (/* binding */ navbar)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _favicon_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./favicon.png */ "./src/favicon.png");



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
  leftImage.src = _favicon_png__WEBPACK_IMPORTED_MODULE_1__;
  navRow.appendChild(leftImage);
  // Add Title
  const restTitle = document.createElement("div");
  restTitle.textContent = "STASH.";
  navRow.appendChild(restTitle);
  // Add Second Image
  const rightImage = new Image();
  rightImage.src = _favicon_png__WEBPACK_IMPORTED_MODULE_1__;
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




/***/ }),

/***/ "./src/favicon.png":
/*!*************************!*\
  !*** ./src/favicon.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c96088d36c320f6b0973.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["shared"], () => (__webpack_exec__("./src/navbar.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF2YmFyLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQXVCO0FBQ1U7O0FBRWpDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHlDQUFJO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHlDQUFJO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVrQiIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9uYXZiYXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IF8gZnJvbSBcImxvZGFzaFwiO1xuaW1wb3J0IEljb24gZnJvbSBcIi4vZmF2aWNvbi5wbmdcIjtcblxuZnVuY3Rpb24gbmF2YmFyKCkge1xuICAvLyBJbml0aWF0ZSBOYXYgQmFyIERpdlxuICBjb25zdCBuYXZCYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBuYXZCYXIuY2xhc3NMaXN0LmFkZChcIm5hdlwiKTtcbiAgLy8gQWRkIEZpcnN0IFJvd1xuICBjb25zdCBuYXZSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBuYXZSb3cuY2xhc3NMaXN0LmFkZChcIm5hdnRvcHJvd1wiKTtcbiAgbmF2QmFyLmFwcGVuZENoaWxkKG5hdlJvdyk7XG4gIC8vIEFkZCBGaXJzdCBJbWFnZVxuICBjb25zdCBsZWZ0SW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgbGVmdEltYWdlLnNyYyA9IEljb247XG4gIG5hdlJvdy5hcHBlbmRDaGlsZChsZWZ0SW1hZ2UpO1xuICAvLyBBZGQgVGl0bGVcbiAgY29uc3QgcmVzdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgcmVzdFRpdGxlLnRleHRDb250ZW50ID0gXCJTVEFTSC5cIjtcbiAgbmF2Um93LmFwcGVuZENoaWxkKHJlc3RUaXRsZSk7XG4gIC8vIEFkZCBTZWNvbmQgSW1hZ2VcbiAgY29uc3QgcmlnaHRJbWFnZSA9IG5ldyBJbWFnZSgpO1xuICByaWdodEltYWdlLnNyYyA9IEljb247XG4gIG5hdlJvdy5hcHBlbmRDaGlsZChyaWdodEltYWdlKTtcbiAgLy8gQWRkIE5hdiBCdXR0b25zICsgU2Vjb25kIFJvd1xuICAvLyBBZGQgU2Vjb25kIFJvd1xuICBjb25zdCBzZWNvbmROYXZSb3cgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBzZWNvbmROYXZSb3cuY2xhc3NMaXN0LmFkZChcIm5hdmJvdHRvbXJvd1wiKTtcbiAgLy8gQ3JlYXRlIEhvbWUgQnV0dG9uXG4gIGNvbnN0IGhvbWVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBob21lQnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJtZW51YnV0dG9uXCIpO1xuICBob21lQnV0dG9uLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiaG9tZUJ1dHRvblwiKTtcbiAgaG9tZUJ1dHRvbi5pbm5lclRleHQgPSBcIkhvbWVcIjtcbiAgc2Vjb25kTmF2Um93LmFwcGVuZENoaWxkKGhvbWVCdXR0b24pO1xuICAvLyBDcmVhdGUgTWVudSBCdXR0b25cbiAgY29uc3QgbWVudUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIG1lbnVCdXR0b24uY2xhc3NMaXN0LmFkZChcIm1lbnVidXR0b25cIik7XG4gIG1lbnVCdXR0b24uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJtZW51QnV0dG9uXCIpO1xuICBtZW51QnV0dG9uLmlubmVyVGV4dCA9IFwiTWVudVwiO1xuICBzZWNvbmROYXZSb3cuYXBwZW5kQ2hpbGQobWVudUJ1dHRvbik7XG4gIC8vIENyZWF0ZSBDb250YWN0IEJ1dHRvblxuICBjb25zdCBjb250YWN0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgY29udGFjdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKFwibWVudWJ1dHRvblwiKTtcbiAgY29udGFjdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImNvbnRhY3RCdXR0b25cIik7XG4gIGNvbnRhY3RCdXR0b24uaW5uZXJUZXh0ID0gXCJDb250YWN0XCI7XG4gIHNlY29uZE5hdlJvdy5hcHBlbmRDaGlsZChjb250YWN0QnV0dG9uKTtcblxuICBuYXZCYXIuYXBwZW5kQ2hpbGQoc2Vjb25kTmF2Um93KTtcbiAgcmV0dXJuIG5hdkJhcjtcbn1cblxuZXhwb3J0IHsgbmF2YmFyIH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=