(function() {
var exports = {};
exports.id = 195;
exports.ids = [195];
exports.modules = {

/***/ 9402:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);





var Headline = props => {
  props = props.props;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: "headline",
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
      className: "bigboldtitle",
      children: props.title
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
      className: "smallboldtitle",
      children: props.subtitle
    })]
  });
};

/* harmony default export */ __webpack_exports__["Z"] = (Headline);

/***/ }),

/***/ 3289:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": function() { return /* binding */ blog; },
  "getStaticProps": function() { return /* binding */ getStaticProps; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./components/PostPreview.js + 1 modules
var PostPreview = __webpack_require__(235);
;// CONCATENATED MODULE: ./components/MoreStories.js




var MoreStories = props => {
  props = props.props;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "morestories",
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "midboldtitle",
      id: "more-stories",
      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
        href: "/blog/feed/1",
        children: "More Stories"
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
      className: "morestoriescontainer",
      children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
        children: /*#__PURE__*/jsx_runtime_.jsx(PostPreview/* default */.Z, {
          className: "postpreview",
          props: props.posts.post2
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("li", {
        children: /*#__PURE__*/jsx_runtime_.jsx(PostPreview/* default */.Z, {
          className: "postpreview",
          props: props.posts.post3
        })
      })]
    })]
  });
};

/* harmony default export */ var components_MoreStories = (MoreStories);
// EXTERNAL MODULE: ./components/Headline.js
var Headline = __webpack_require__(9402);
// EXTERNAL MODULE: external "path"
var external_path_ = __webpack_require__(5622);
var external_path_default = /*#__PURE__*/__webpack_require__.n(external_path_);
// EXTERNAL MODULE: external "fs"
var external_fs_ = __webpack_require__(5747);
;// CONCATENATED MODULE: ./components/TagWithCount.js




const TagWithCount = props => {
  props = props.props; // console.log("TAG WITH COUNT PROPS")
  // console.log(props)

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("li", {
    className: "posttagcount",
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "counttagtext",
      children: props.tagtext
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "counttagcount",
      children: props.tagcount
    })]
  }, props.tagslug);
};

/* harmony default export */ var components_TagWithCount = (TagWithCount);
// EXTERNAL MODULE: ./lib/processing.js
var processing = __webpack_require__(3386);
;// CONCATENATED MODULE: ./components/TagFeed.js




 // needs to be fed tags from page props

const TagFeed = props => {
  const tagsFormatted = Object.keys(props.props.tags).map(tag => {
    return {
      tagtext: processing/* humanTag */.F2(tag),
      tagslug: tag,
      tagcount: props.props.tags[tag]
    };
  }).sort((a, b) => {
    return b.tagcount - a.tagcount;
  }).slice(0, 7);
  props = {
    tags: tagsFormatted
  };
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "tagfeed",
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "midboldtitle",
      id: "popular-tags",
      children: /*#__PURE__*/jsx_runtime_.jsx("a", {
        href: "/tags",
        children: "Popular Tags"
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("ol", {
      className: "posttags",
      children: props.tags.map(tag => {
        return /*#__PURE__*/jsx_runtime_.jsx(components_TagWithCount, {
          props: tag
        });
      })
    })]
  });
};

/* harmony default export */ var components_TagFeed = (TagFeed);
// EXTERNAL MODULE: external "gray-matter"
var external_gray_matter_ = __webpack_require__(9064);
var external_gray_matter_default = /*#__PURE__*/__webpack_require__.n(external_gray_matter_);
;// CONCATENATED MODULE: ./pages/blog.js












var Blog = props => {
  props = props.pageProps;
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "main",
    children: [/*#__PURE__*/jsx_runtime_.jsx(Headline/* default */.Z, {
      props: {
        title: "Blog.",
        subtitle: "What's not UX?"
      }
    }), /*#__PURE__*/jsx_runtime_.jsx(PostPreview/* default */.Z, {
      props: props.posts.post1
    }), /*#__PURE__*/jsx_runtime_.jsx(components_MoreStories, {
      props: props
    }), /*#__PURE__*/jsx_runtime_.jsx(components_TagFeed, {
      props: props
    })]
  });
};

async function getStaticProps(context) {
  // GET POSTS FILENAMES
  const postsDirectory = external_path_default().join(process.cwd(), '/content');
  const postsFilenames = await external_fs_.promises.readdir(postsDirectory); // Get data from .md frontmatter posts
  // generate and inject post slug from filename
  // generate and inject preview text, with link over "..."
  // preview text also removed line breaks /n
  // header rendered small in <ReactMarkdown> tag
  // inject route
  // limit to first 2-3 most common tags

  const postsData = await Promise.all(postsFilenames.map(async filename => {
    const fileData = await external_fs_.promises.readFile(external_path_default().join(process.cwd(), `/content/${filename}`), 'utf8').then(fileData => {
      const {
        data,
        content
      } = external_gray_matter_default()(fileData); // inject slug

      data.slug = filename.replace(/\.[^/.]+$/, ""); // inject route

      data.route = `/blog/posts/${data.slug}`; // inject modified preview text, end ... link

      data.postpreviewtext = `${processing/* formatPreviewMD */.jj(content)} [[...]](${data.route})`;
      return data;
    });
    return fileData;
  })); // GET ALL TAGS(with count)

  var tagCounts = {};
  postsData.forEach(post => {
    post.tags.forEach(tag => {
      if (tag in tagCounts) {
        tagCounts[`${tag}`] += 1;
      } else {
        tagCounts[`${tag}`] = 1;
      }
    });
  }); // sort by date, filter by "hero"

  const dateSortedPostsData = postsData.sort((a, b) => a - b);
  const dateHeroPosts = dateSortedPostsData.filter(data => data.hero && !data.herobig);
  const dateHeroBigPosts = dateSortedPostsData.filter(data => data.hero && data.herobig); // CONVERT TO HUMAN READABLE =============
  // all raw data before this point
  // date
  // unslug tags (remove -, capitalize first letters) 
  // add these functions to a /lib folder, along with random

  function templatePost(postData) {
    return {
      imgSrc: `/img/${postData.imgfilename}`,
      postSlug: postData.slug,
      postTitle: postData.title,
      postDate: processing/* humanDate */.rN(postData.date),
      postPreviewText: postData.postpreviewtext,
      tags: postData.tags.map(tag => {
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

  const posts = {
    post1: templatePost(dateHeroBigPosts[0]),
    post2: templatePost(dateHeroPosts[0]),
    post3: templatePost(dateHeroPosts[1])
  };
  return {
    props: {
      posts: posts,
      active: "blog",
      tags: tagCounts
    }
  };
}
/* harmony default export */ var blog = (Blog);

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, [664,675,392,235], function() { return __webpack_exec__(3289); });
module.exports = __webpack_exports__;

})();