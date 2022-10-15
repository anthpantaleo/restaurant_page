"use strict";
(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["footer"],{

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createFooter": () => (/* binding */ createFooter)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _githublogo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./githublogo.png */ "./src/githublogo.png");



function createFooter() {
  //Create Footer Div
  const footerdiv = document.createElement("div");
  footerdiv.classList.add("footer");
  // Footer Div Wrapper
  const footerDivContent = document.createElement("div");
  footerDivContent.classList.add("footercontent");
  // Name creation
  const footerContentA = document.createElement("div");
  footerContentA.innerText = "Made with love by anthpantaleo.";
  //Create Link
  const footerContentLink = document.createElement("a");
  footerContentLink.setAttribute(
    "href",
    "https://github.com/anthpantaleo/rock_paper_scissors"
  );
  footerContentLink.setAttribute("target", "_blank");
  // create and append image
  const footerContentImg = new Image();
  footerContentImg.classList.add("footerimage");
  footerContentImg.src = _githublogo_png__WEBPACK_IMPORTED_MODULE_1__;
  // append to the Footer Content Link
  footerContentLink.appendChild(footerContentImg);
  footerDivContent.appendChild(footerContentA);
  footerDivContent.appendChild(footerContentLink);
  footerdiv.appendChild(footerDivContent);
  return footerdiv;
}




/***/ }),

/***/ "./src/githublogo.png":
/*!****************************!*\
  !*** ./src/githublogo.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0035c307a36c17babb8d.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["shared"], () => (__webpack_exec__("./src/footer.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZm9vdGVyLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQXVCO0FBQ29COztBQUUzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLDRDQUFXO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUV3QiIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9mb290ZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IF8gZnJvbSBcImxvZGFzaFwiO1xuaW1wb3J0IGZvb3RlckltYWdlIGZyb20gXCIuL2dpdGh1YmxvZ28ucG5nXCI7XG5cbmZ1bmN0aW9uIGNyZWF0ZUZvb3RlcigpIHtcbiAgLy9DcmVhdGUgRm9vdGVyIERpdlxuICBjb25zdCBmb290ZXJkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBmb290ZXJkaXYuY2xhc3NMaXN0LmFkZChcImZvb3RlclwiKTtcbiAgLy8gRm9vdGVyIERpdiBXcmFwcGVyXG4gIGNvbnN0IGZvb3RlckRpdkNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBmb290ZXJEaXZDb250ZW50LmNsYXNzTGlzdC5hZGQoXCJmb290ZXJjb250ZW50XCIpO1xuICAvLyBOYW1lIGNyZWF0aW9uXG4gIGNvbnN0IGZvb3RlckNvbnRlbnRBID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZm9vdGVyQ29udGVudEEuaW5uZXJUZXh0ID0gXCJNYWRlIHdpdGggbG92ZSBieSBhbnRocGFudGFsZW8uXCI7XG4gIC8vQ3JlYXRlIExpbmtcbiAgY29uc3QgZm9vdGVyQ29udGVudExpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgZm9vdGVyQ29udGVudExpbmsuc2V0QXR0cmlidXRlKFxuICAgIFwiaHJlZlwiLFxuICAgIFwiaHR0cHM6Ly9naXRodWIuY29tL2FudGhwYW50YWxlby9yb2NrX3BhcGVyX3NjaXNzb3JzXCJcbiAgKTtcbiAgZm9vdGVyQ29udGVudExpbmsuc2V0QXR0cmlidXRlKFwidGFyZ2V0XCIsIFwiX2JsYW5rXCIpO1xuICAvLyBjcmVhdGUgYW5kIGFwcGVuZCBpbWFnZVxuICBjb25zdCBmb290ZXJDb250ZW50SW1nID0gbmV3IEltYWdlKCk7XG4gIGZvb3RlckNvbnRlbnRJbWcuY2xhc3NMaXN0LmFkZChcImZvb3RlcmltYWdlXCIpO1xuICBmb290ZXJDb250ZW50SW1nLnNyYyA9IGZvb3RlckltYWdlO1xuICAvLyBhcHBlbmQgdG8gdGhlIEZvb3RlciBDb250ZW50IExpbmtcbiAgZm9vdGVyQ29udGVudExpbmsuYXBwZW5kQ2hpbGQoZm9vdGVyQ29udGVudEltZyk7XG4gIGZvb3RlckRpdkNvbnRlbnQuYXBwZW5kQ2hpbGQoZm9vdGVyQ29udGVudEEpO1xuICBmb290ZXJEaXZDb250ZW50LmFwcGVuZENoaWxkKGZvb3RlckNvbnRlbnRMaW5rKTtcbiAgZm9vdGVyZGl2LmFwcGVuZENoaWxkKGZvb3RlckRpdkNvbnRlbnQpO1xuICByZXR1cm4gZm9vdGVyZGl2O1xufVxuXG5leHBvcnQgeyBjcmVhdGVGb290ZXIgfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==