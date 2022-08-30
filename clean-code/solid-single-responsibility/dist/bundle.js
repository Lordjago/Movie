/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _http_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./http-client */ \"./http-client.js\");\n\r\n\r\nlet http = new _http_client__WEBPACK_IMPORTED_MODULE_0__.HttpClient()\r\n// 'https://jsonplaceholder.typicode.com/posts'\r\nhttp.get('https://httpstat.us/500').then(data => console.log(data))\n\n//# sourceURL=webpack:///./app.js?");

/***/ }),

/***/ "./error-handler.js":
/*!**************************!*\
  !*** ./error-handler.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ErrorHnadler\": () => (/* binding */ ErrorHnadler)\n/* harmony export */ });\n// import * as toastr from 'toastr'\r\n\r\nclass ErrorHnadler {\r\n    static handleError(res) {\r\n        if(res.status == 401) {\r\n            console.log('You are not authorized')\r\n        }\r\n        else if(res.status == 404) {\r\n            console.log('Content not found')\r\n        }\r\n        else if(res.status == 500) {\r\n            console.log('Internal Server Error')\r\n        }\r\n        else{\r\n            console.log('Unknown Error')\r\n        }\r\n    }\r\n}\n\n//# sourceURL=webpack:///./error-handler.js?");

/***/ }),

/***/ "./http-client.js":
/*!************************!*\
  !*** ./http-client.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"HttpClient\": () => (/* binding */ HttpClient)\n/* harmony export */ });\n/* harmony import */ var _error_handler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./error-handler */ \"./error-handler.js\");\n\r\nclass HttpClient {\r\n    get(url) {\r\n        return fetch(url,\r\n            {\r\n                headers: {\r\n                    'Accept' : 'application/json'\r\n                }\r\n            }).then( res => {\r\n                if(res.ok) {\r\n                    return res.json()\r\n                }\r\n                else{\r\n                    _error_handler__WEBPACK_IMPORTED_MODULE_0__.ErrorHnadler.handleError(res)\r\n                }\r\n            })\r\n    }\r\n}\n\n//# sourceURL=webpack:///./http-client.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./app.js");
/******/ 	
/******/ })()
;