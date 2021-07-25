(function() {
var exports = {};
exports.id = 727;
exports.ids = [727];
exports.modules = {

/***/ 4655:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ _pindex_; },
  "getStaticPaths": function() { return /* binding */ getStaticPaths; },
  "getStaticProps": function() { return /* binding */ getStaticProps; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "path"
var external_path_ = __webpack_require__(5622);
// EXTERNAL MODULE: external "fs"
var external_fs_ = __webpack_require__(5747);
var external_fs_default = /*#__PURE__*/__webpack_require__.n(external_fs_);
// EXTERNAL MODULE: ./components/PostPreview.js + 1 modules
var PostPreview = __webpack_require__(235);
// EXTERNAL MODULE: external "gray-matter"
var external_gray_matter_ = __webpack_require__(9064);
var external_gray_matter_default = /*#__PURE__*/__webpack_require__.n(external_gray_matter_);
// EXTERNAL MODULE: ./lib/processing.js
var processing = __webpack_require__(3386);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
;// CONCATENATED MODULE: ./components/PaginationNav.js




var PaginationNav = props => {
  props = props.props; // props == {pindex: , validpages:[,]}

  return /*#__PURE__*/jsx_runtime_.jsx("ol", {
    className: "pagingationnav",
    children: adjPageLinks(props)
  });
};

const adjPageLinks = props => {
  // props == {pindex: , validpages:[,]}
  // Generate valid page indexes around pindex, with max total...
  const TOTALVISINDEXES = 5; // always an odd number (... 5 6 7 ...)

  var validpagesset = new Set(props.validpages);
  var upindexes = [];
  var downindexes = []; // will store final arr

  var i = 1;
  const pindex = parseInt(props.pindex);
  var visited = 0;

  while (visited < TOTALVISINDEXES - 1 && i < TOTALVISINDEXES - 1) {
    if (validpagesset.has(pindex - i)) {
      downindexes.push(pindex - i);
      visited++;
    }

    if (validpagesset.has(pindex + i)) {
      upindexes.push(pindex + i);
      visited++;
    }

    i++;
  } // merge


  downindexes.push(pindex);
  upindexes.map(i => {
    downindexes.push(i);
  });
  downindexes = downindexes.sort((a, b) => {
    return a - b;
  }); // Ellipses
  // if (downindexes[0] != 1){
  //     downindexes.unshift("<...")
  // }
  // if (downindexes[downindexes.length - 1] != props.validpages[props.validpages.length-1]) {
  //     downindexes.push("...>")
  // }

  return downindexes.map(index => {
    if (index == "<...") {
      return /*#__PURE__*/jsx_runtime_.jsx("li", {
        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
          className: "paginationnavitem",
          href: `/blog/feed/1`,
          children: "..."
        })
      }, index);
    } else if (index == "...>") {
      return /*#__PURE__*/jsx_runtime_.jsx("li", {
        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
          className: "paginationnavitem",
          href: `/blog/feed/${props.validpages[props.validpages.length - 1]}`,
          children: "..."
        })
      }, index);
    } else if (index == pindex) {
      return /*#__PURE__*/jsx_runtime_.jsx("li", {
        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
          className: "paginationnavitem",
          href: `/blog/feed/${index}`,
          children: /*#__PURE__*/jsx_runtime_.jsx("strong", {
            id: "activepagindex",
            children: index
          })
        })
      }, index);
    } else {
      return /*#__PURE__*/jsx_runtime_.jsx("li", {
        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
          className: "paginationnavitem",
          href: `/blog/feed/${index}`,
          children: index
        })
      }, index);
    }
  });
};

/* harmony default export */ var components_PaginationNav = (PaginationNav);
;// CONCATENATED MODULE: ./pages/blog/feed/[pindex].js








const POSTSPERPAGE = 5;

var PaginationIndex = props => {
  props = props.pageProps; // console.log(props)
  // console.log("PAGINDEX")
  // console.log(props.posts)
  // props = {pindex:(current index), validpages: [], posts:{}}

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "main",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "pindextitlecontainer",
      children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: "midboldtitle",
        children: ["Page ", props.pindex]
      }), /*#__PURE__*/jsx_runtime_.jsx(components_PaginationNav, {
        props: props
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("ol", {
      className: "pindexstories",
      children: props.posts.map(post => {
        return /*#__PURE__*/jsx_runtime_.jsx("li", {
          className: "morestoriescontainer",
          children: /*#__PURE__*/jsx_runtime_.jsx(PostPreview/* default */.Z, {
            className: "postpreview",
            props: post
          })
        }, post.postSlug);
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(components_PaginationNav, {
      props: props
    })]
  });
}; // This function gets called at build time


async function getStaticPaths() {
  //Get the paths we want to pre-render based on posts
  const postFilenames = external_fs_default().readdirSync((0,external_path_.join)(process.cwd(), '/content')); // number of pages (based on 10 per page)

  const pageCount = Math.ceil(postFilenames.length / POSTSPERPAGE);
  let paths = [];

  for (let currpage = 1; currpage < pageCount + 1; currpage++) {
    // index of page (1->pageCount)
    paths.push({
      params: {
        pindex: currpage.toString()
      }
    });
  }

  return {
    paths,
    fallback: false
  };
} // This also gets called at build time

async function getStaticProps({
  params
}) {
  //Get the paths we want to pre-render based on posts
  const postFilenames = external_fs_default().readdirSync((0,external_path_.join)(process.cwd(), '/content')); // get all posts data, sort by date

  const postData = postFilenames.map(filename => {
    const fileContents = external_fs_default().readFileSync((0,external_path_.join)(process.cwd(), `/content/${filename}`), 'utf8');
    var matteredcontents = external_gray_matter_default()(fileContents); // remove .md and use filename as slug

    matteredcontents.data.slug = filename.replace(/\.[^/.]+$/, "");
    return matteredcontents;
  }).sort(function (a, b) {
    return b.data.date - a.data.date;
  }); // number of pages (based on 10 per page)

  const pageCount = Math.ceil(postData.length / POSTSPERPAGE);
  var pagination = [];
  var postsAppended = 0;

  for (let currpage = 1; currpage < pageCount + 1; currpage++) {
    // index of page (1->pageCount)
    var page = {
      pindex: currpage.toString(),
      posts: []
    }; // 5 per page 

    for (var i of processing/* range */.w6(0, POSTSPERPAGE - 1)) {
      if (postsAppended != postData.length) {
        page.posts.push(postData[postsAppended]);
        postsAppended++;
      }
    }

    pagination.push(page);
  } // GET ALL TAGS(with count)


  var tagCounts = {};
  postData.forEach(post => {
    post.data.tags.forEach(tag => {
      if (tag in tagCounts) {
        tagCounts[`${tag}`] += 1;
      } else {
        tagCounts[`${tag}`] = 1;
      }
    });
  });

  function templatePost(data) {
    return {
      imgSrc: `/img/${data.data.imgfilename}`,
      postSlug: data.data.slug,
      postTitle: data.data.title,
      postDate: processing/* humanDate */.rN(data.data.date),
      postPreviewText: `${processing/* formatPreviewMD */.jj(data.content)} [[...]](/blog/posts/${data.data.slug})`,
      tags: data.data.tags.map(tag => {
        return {
          tagtext: processing/* humanTag */.F2(tag),
          tagslug: tag,
          tagcount: tagCounts[tag]
        };
      }),
      colorRotation: processing/* randomChoice */.mi(processing/* COLORSCHEMES */.xy),
      width: 10,
      height: 5 // prefColor: COLORSCHEMESMAP[postData.prefcolor],
      // invert: false,
      // grayscale: false,

    };
  }

  params.posts = [];
  pagination[params.pindex - 1].posts.map(post => {
    params.posts.push(templatePost(post));
  });
  params.validpages = [...processing/* range */.w6(1, pagination.length)]; // params : {pages:[{posts:[post,], pindex:}]}
  // get posts from 

  params.active = "blog";
  return {
    props: params
  };
}
/* harmony default export */ var _pindex_ = (PaginationIndex);

/***/ }),

/***/ 5747:
/***/ (function(module) {

"use strict";
module.exports = require("fs");;

/***/ }),

/***/ 9064:
/***/ (function(module) {

"use strict";
module.exports = require("gray-matter");;

/***/ }),

/***/ 5273:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/head.js");;

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

/***/ 5519:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/to-base-64.js");;

/***/ }),

/***/ 444:
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/server/image-config.js");;

/***/ }),

/***/ 5622:
/***/ (function(module) {

"use strict";
module.exports = require("path");;

/***/ }),

/***/ 9297:
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ 3703:
/***/ (function(module) {

"use strict";
module.exports = require("react-markdown");;

/***/ }),

/***/ 5282:
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-runtime");;

/***/ }),

/***/ 9004:
/***/ (function(module) {

"use strict";
module.exports = require("styled-jsx/style");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [664,675,392,235], function() { return __webpack_exec__(4655); });
module.exports = __webpack_exports__;

})();