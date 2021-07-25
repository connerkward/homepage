exports.id = 235;
exports.ids = [235];
exports.modules = {

/***/ 235:
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": function() { return /* binding */ components_PostPreview; }
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(9004);
var style_default = /*#__PURE__*/__webpack_require__.n(style_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
;// CONCATENATED MODULE: ./components/Tag.js



const Tag = props => {
  const newtagslug = `/tags/${props.props.tagslug}`;
  return /*#__PURE__*/jsx_runtime_.jsx("li", {
    className: "posttag",
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      children: props.props.tagtext
    })
  }, props.props.tagslug);
};

/* harmony default export */ var components_Tag = (Tag);
// EXTERNAL MODULE: external "path"
var external_path_ = __webpack_require__(5622);
// EXTERNAL MODULE: external "react-markdown"
var external_react_markdown_ = __webpack_require__(3703);
var external_react_markdown_default = /*#__PURE__*/__webpack_require__.n(external_react_markdown_);
;// CONCATENATED MODULE: ./components/PostPreview.js







 // WHAT TO FEED POSTPREVIEW 
// props.props
// {
//     imgSrc: '/img/1.jpeg',
//     postSlug: 'second-post',
//     postTitle: 'Silent Guns',
//     postDate: 'mon aug 31 2020',
//     postPreviewText: '',
//     tags: [
//           { tagtext: 'Ww2', tagslug: 'ww2', tagcount: 1 },
//           { tagtext: 'Veterans', tagslug: 'veterans', tagcount: 1 },
//           { tagtext: 'Automation', tagslug: 'automation', tagcount: 4 }
//           ],
//      colorRotation: 175,
//      width: 10,
//      height: 5
// }

var PostPreview = props => {
  props = props.props; // console.log("POST PREVIEW")
  // console.log(props)

  const image = /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: style_default().dynamic([["3322649486", [props.colorRotation, props.colorRotation, props.colorRotation]]]),
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: style_default().dynamic([["3322649486", [props.colorRotation, props.colorRotation, props.colorRotation]]]) + " " + "outer",
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: style_default().dynamic([["3322649486", [props.colorRotation, props.colorRotation, props.colorRotation]]]) + " " + "img",
        children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
          src: props.imgSrc,
          alt: `Cover Image for ${props.postTitle}`,
          width: 100,
          height: 50,
          layout: "responsive",
          objectFit: "stretch",
          priority: true,
          className: "coverimage" // placeholder={`blur`}
          // object-fit={"cover"}

        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx((style_default()), {
      id: "3322649486",
      dynamic: [props.colorRotation, props.colorRotation, props.colorRotation],
      children: [".outer.__jsx-style-dynamic-selector{background-color:black;}", `.outer.__jsx-style-dynamic-selector .img.__jsx-style-dynamic-selector{-webkit-filter:contrast(.137) sepia(37.5%) contrast(2.8) brightness(0.9) contrast(100) hue-rotate(${props.colorRotation}deg) grayscale(0.3);filter:contrast(.137) sepia(37.5%) contrast(2.8) brightness(0.9) contrast(100) hue-rotate(${props.colorRotation}deg) grayscale(0.3);}`]
    })]
  });

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "postpreview",
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "coverimage",
      children: props.postSlug ? /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
        as: `/blog/posts/${props.postSlug}`,
        href: "/blog/posts/[slug]",
        children: /*#__PURE__*/jsx_runtime_.jsx("a", {
          "aria-label": props.postTitle,
          children: image
        })
      }) : image
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "postpreviewdata",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "postpreviewtitle",
        children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          as: `/blog/posts/${props.postSlug}`,
          href: "/blog/posts/[slug]",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            "aria-label": props.postTitle,
            children: props.postTitle
          })
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "postpreviewdate",
        children: props.postDate
      }), /*#__PURE__*/jsx_runtime_.jsx((external_react_markdown_default()), {
        className: "postpreviewtext",
        children: props.postPreviewText
      }), /*#__PURE__*/jsx_runtime_.jsx("ul", {
        className: "posttags",
        children: props.tags.map(tag => /*#__PURE__*/jsx_runtime_.jsx(components_Tag, {
          props: {
            tagslug: tag.tagslug,
            tagtext: tag.tagtext
          }
        }, tag.tagslug))
      })]
    })]
  });
};

/* harmony default export */ var components_PostPreview = (PostPreview);

/***/ })

};
;