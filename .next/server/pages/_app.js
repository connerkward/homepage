(function() {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 1919:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ MyApp; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: ./lib/processing.js
var processing = __webpack_require__(3386);
;// CONCATENATED MODULE: ./components/Nav.js




var Nav = props => {
  const activepage = props.props.props.active;

  const navitem = (page, activePage) => {
    const capPage = processing/* firstLetterToUpper */.Wm(page);

    if (activePage == page) {
      return /*#__PURE__*/jsx_runtime_.jsx("li", {
        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
          href: `/${page}`,
          id: page,
          children: /*#__PURE__*/jsx_runtime_.jsx("strong", {
            children: capPage
          })
        })
      });
    } else {
      return /*#__PURE__*/jsx_runtime_.jsx("li", {
        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
          href: `/${page}`,
          id: `${page}`,
          children: capPage
        })
      });
    }
  };

  return /*#__PURE__*/jsx_runtime_.jsx("nav", {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("ol", {
      children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
          href: "/",
          id: "logo",
          children: /*#__PURE__*/jsx_runtime_.jsx("strong", {
            children: "ConWard_"
          })
        })
      }), navitem("portfolio", activepage), navitem("blog", activepage), navitem("about", activepage), navitem("contact", activepage), /*#__PURE__*/jsx_runtime_.jsx("li", {
        id: "nav-right",
        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
          href: "search",
          id: "nav-right-link",
          children: "\u1CC7"
        })
      })]
    })
  });
}; // ֍ ߷ ☞ ⟁ 𐂖
// ᳇ ᮚ ᮘ ᮑ ᜦ ᙎ ພ ผ พ
// ♜


/* harmony default export */ var components_Nav = (Nav);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
;// CONCATENATED MODULE: ./components/Footer.js


// TODO: set version to equal some value from API call to github or jenkins


var Footer = () => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("footer", {
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "footercontainer",
      children: ["2021 ", /*#__PURE__*/jsx_runtime_.jsx("strong", {
        children: "connerward"
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "footercontainer",
      children: /*#__PURE__*/jsx_runtime_.jsx("strong", {
        children: "github"
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "footercontainer",
      children: ["built with ", /*#__PURE__*/jsx_runtime_.jsx("strong", {
        children: "next.js"
      }), " "]
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "footercontainer",
      children: "\u1B98"
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "footercontainer",
      children: [/*#__PURE__*/jsx_runtime_.jsx("strong", {
        children: "version"
      }), " 0.0.1"]
    })]
  });
}; // ☞⎈⌬⎔⚙︎⌀⍡⍢⍦⍒⍙⍾⏂⏄⏣⚡︎㉿♻︎♜
// ᳇ ᮚ ᮘ ᮑ ᜦ ᙎ ພ ผ พ
// ♜


/* harmony default export */ var components_Footer = (Footer);
;// CONCATENATED MODULE: ./pages/_app.js



function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



 // Placed on every single page
// This default export is required in a new `pages/_app.js` file.

function MyApp(props) {
  const Component = props.Component;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    children: [/*#__PURE__*/jsx_runtime_.jsx(components_Nav, {
      props: {
        props: {
          active: props.pageProps.active
        }
      }
    }), /*#__PURE__*/jsx_runtime_.jsx(Component, _objectSpread({}, props)), /*#__PURE__*/jsx_runtime_.jsx(components_Footer, {})]
  });
}

/***/ }),

/***/ 8417:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ 2238:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ 9297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

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
var __webpack_exports__ = __webpack_require__.X(0, [664,392], function() { return __webpack_exec__(1919); });
module.exports = __webpack_exports__;

})();