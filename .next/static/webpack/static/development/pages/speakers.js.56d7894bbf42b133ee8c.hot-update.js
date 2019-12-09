webpackHotUpdate("static/development/pages/speakers.js",{

/***/ "./src/SpeakerDetail.js":
/*!******************************!*\
  !*** ./src/SpeakerDetail.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ImageToggleOnScroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ImageToggleOnScroll */ "./src/ImageToggleOnScroll.js");
var _jsxFileName = "/Users/u089981/Documents/react/react-hooks-demo/src/SpeakerDetail.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var SpeakerDetail = function SpeakerDetail(_ref) {
  var id = _ref.id,
      firstName = _ref.firstName,
      lastName = _ref.lastName,
      favorite = _ref.favorite,
      bio = _ref.bio,
      onHeartFavoriteHandler = _ref.onHeartFavoriteHandler;
  return __jsx("div", {
    className: "card col-4 cardmin",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, __jsx(_ImageToggleOnScroll__WEBPACK_IMPORTED_MODULE_1__["default"], {
    className: "card-img-top",
    primaryImage: "/static/speakers/bw/Speaker-".concat(id, ".jpg"),
    secondaryImage: "/static/speakers/Speaker-".concat(id, ".jpg"),
    alt: "{firstName} {lastName}",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }), __jsx("div", {
    className: "card-body",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: this
  }, __jsx("h4", {
    className: "card-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx("button", {
    "data-sessionid": id,
    className: favorite ? "heartredbutton" : "heartdarkbutton",
    onClick: function onClick(e) {
      onHeartFavoriteHandler(e, !favorite);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }), __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, firstName, " ", lastName)), __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, bio)));
};

/* harmony default export */ __webpack_exports__["default"] = (SpeakerDetail);

/***/ })

})
//# sourceMappingURL=speakers.js.56d7894bbf42b133ee8c.hot-update.js.map