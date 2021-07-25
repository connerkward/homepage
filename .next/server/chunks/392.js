exports.id = 392;
exports.ids = [392];
exports.modules = {

/***/ 3386:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "xy": function() { return /* binding */ COLORSCHEMES; },
/* harmony export */   "mi": function() { return /* binding */ randomChoice; },
/* harmony export */   "F2": function() { return /* binding */ humanTag; },
/* harmony export */   "Wm": function() { return /* binding */ firstLetterToUpper; },
/* harmony export */   "rN": function() { return /* binding */ humanDate; },
/* harmony export */   "jj": function() { return /* binding */ formatPreviewMD; },
/* harmony export */   "w6": function() { return /* binding */ range; }
/* harmony export */ });
/* unused harmony export COLORSCHEMESMAP */
const POSTPREVIEWTEXTSIZE = 225; // const COLORSCHEMES = [325, 175, 200, 250,325, 300]
// yellow, pink, blue

const COLORSCHEMES = [175, 250, 325];
const COLORSCHEMESMAP = {
  "yellow": 325,
  "blue": 175,
  "pink": 250
};
function randomChoice(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
const humanTag = tag => {
  // capitalize each letter, remove any dashes
  return tag.split("-").map(subtag => {
    return `${subtag.charAt(0).toUpperCase() + subtag.slice(1)}`;
  }).join(" ");
};
const firstLetterToUpper = str => {
  if (str == undefined) {
    return "";
  } else {
    return `${str.charAt(0).toUpperCase() + str.slice(1)}`;
  }
};
const humanDate = rawDate => {
  return `${rawDate.toDateString()}`.toLowerCase();
};
function formatPreviewMD(text) {
  // converts markdown headers into preview text. ->
  // shortens text
  // Converts headers into normal text, 
  // Removes photo embedds. 
  // removes \n
  return text.split('\n').map(line => {
    if (line[0] == "#") {
      // convert header to normal text
      return `${line.replace(/#/g, '')}.`;
    } else if (line.includes("![")) {
      // delete photo link
      return `${line.replace(/(!)(\[.*\]\(.*\))/g, "")}`;
    } else {
      return line;
    }
  }).join('\n').replace(/(\r\n|\n|\r)/gm, " ").slice(0, POSTPREVIEWTEXTSIZE);
}
function* range(start, end) {
  for (let i = start; i <= end; i++) {
    yield i;
  }
}

/***/ }),

/***/ 4453:
/***/ (function() {

/* (ignored) */

/***/ })

};
;