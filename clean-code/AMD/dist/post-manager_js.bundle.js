/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk"] = self["webpackChunk"] || []).push([["post-manager_js"],{

/***/ "./http-client.js":
/*!************************!*\
  !*** ./http-client.js ***!
  \************************/
/***/ ((module, exports) => {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function HttpClient () {\r\n    return {\r\n        get(url) {\r\n            return  fetch(url).then(response => response.json())\r\n        }\r\n    }\r\n}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))\n\n//# sourceURL=webpack:///./http-client.js?");

/***/ }),

/***/ "./post-manager.js":
/*!*************************!*\
  !*** ./post-manager.js ***!
  \*************************/
/***/ ((module, exports, __webpack_require__) => {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! http-client */ \"./http-client.js\")], __WEBPACK_AMD_DEFINE_RESULT__ = (function PostManager (httpClient) {\r\n    const url = 'https://jsonplaceholder.typicode.com/posts'\r\n    return {\r\n        printPost(){\r\n            httpClient.get(url).then(response => {\r\n                console.log(response)\r\n            })\r\n        }\r\n    }\r\n}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))\n\n//# sourceURL=webpack:///./post-manager.js?");

/***/ })

}]);