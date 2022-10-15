"use strict";
(self["webpackChunkrestaurant_page"] = self["webpackChunkrestaurant_page"] || []).push([["homepage"],{

/***/ "./src/renderHome.js":
/*!***************************!*\
  !*** ./src/renderHome.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderHomePage": () => (/* binding */ renderHomePage)
/* harmony export */ });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _resto2_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./resto2.jpg */ "./src/resto2.jpg");



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
  homeimage.src = _resto2_jpg__WEBPACK_IMPORTED_MODULE_1__;
  mainDiv.appendChild(homeimage);
  return mainDiv;
}




/***/ }),

/***/ "./src/resto2.jpg":
/*!************************!*\
  !*** ./src/resto2.jpg ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e3be2f559bc0375c5dfd.jpg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["shared"], () => (__webpack_exec__("./src/renderHome.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZXBhZ2UuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBdUI7QUFDZTs7QUFFdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCLHdDQUFVO0FBQzVCO0FBQ0E7QUFDQTs7QUFFMEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50X3BhZ2UvLi9zcmMvcmVuZGVySG9tZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXyBmcm9tIFwibG9kYXNoXCI7XG5pbXBvcnQgcmVzdG9QaG90byBmcm9tIFwiLi9yZXN0bzIuanBnXCI7XG5cbmZ1bmN0aW9uIHJlbmRlckhvbWVQYWdlKCkge1xuICBjb25zdCBtYWluRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tYWluXCIpO1xuICBtYWluRGl2LmlubmVySFRNTCA9IFwiXCI7XG4gIG1haW5EaXYuaW5uZXJUZXh0ID0gXCJ3ZWxjb21lXCI7XG4gIGNvbnN0IHdlbGNvbWVNZXNzYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgd2VsY29tZU1lc3NhZ2UuY2xhc3NMaXN0LmFkZChcIndlbGNvbWVtZXNzYWdlXCIpO1xuICB3ZWxjb21lTWVzc2FnZS5pbm5lclRleHQgPSBcIndlIGFyZSBvcGVuIGZvciBleGNsdXNpdmUgcGF0cm9ucyBvbmx5LlwiO1xuICBtYWluRGl2LmFwcGVuZENoaWxkKHdlbGNvbWVNZXNzYWdlKTtcblxuICBjb25zdCBob21laW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgaG9tZWltYWdlLmNsYXNzTGlzdC5hZGQoXCJob21laW1hZ2VcIik7XG4gIGhvbWVpbWFnZS5zcmMgPSByZXN0b1Bob3RvO1xuICBtYWluRGl2LmFwcGVuZENoaWxkKGhvbWVpbWFnZSk7XG4gIHJldHVybiBtYWluRGl2O1xufVxuXG5leHBvcnQgeyByZW5kZXJIb21lUGFnZSB9O1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9