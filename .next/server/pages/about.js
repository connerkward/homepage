(function() {
var exports = {};
exports.id = 521;
exports.ids = [521];
exports.modules = {

/***/ 5288:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getStaticProps": function() { return /* binding */ getStaticProps; }
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);



var About = props => {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: "main",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
      className: "smallboldtitle",
      children: "About"
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
      children: "Proident anim cupidatat veniam enim deserunt labore magna enim fugiat tempor sint. Occaecat eu excepteur consequat dolore esse laboris voluptate deserunt aute reprehenderit ex ea id consequat. Est veniam aliquip laboris elit et pariatur proident nulla commodo. Voluptate dolor adipisicing dolore duis fugiat aute officia nostrud est anim laboris nisi nostrud. Ea aliqua et laboris et consectetur adipisicing laborum do aute sit excepteur incididunt et ut. Anim occaecat Lorem fugiat sit nulla elit mollit. Consectetur minim sit dolor veniam."
    })]
  });
}; // static props to update nav 


async function getStaticProps(context) {
  return {
    props: {
      active: "about"
    }
  };
}
/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ }),

/***/ 5282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__(5288));
module.exports = __webpack_exports__;

})();