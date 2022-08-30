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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _error_handler__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./error-handler */ \"./error-handler.js\");\n/* harmony import */ var _error_logging_strategy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./error-logging-strategy */ \"./error-logging-strategy.js\");\n/* harmony import */ var _message_handler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./message-handler */ \"./message-handler.js\");\n\r\n\r\n\r\n\r\n\r\nconst errorHandler = new _error_handler__WEBPACK_IMPORTED_MODULE_0__.ErrorHandler(_message_handler__WEBPACK_IMPORTED_MODULE_2__.MessageHandlingStrategys, _error_logging_strategy__WEBPACK_IMPORTED_MODULE_1__.ErrorLoggingStrategy)\r\n\r\nonerror = function(message, source, lineNumber, colNumber, errorObject) {\r\n    errorHandler.handle('Unknown Error', 'Oops Something went wrong', 5 , {\r\n        message,\r\n        source,\r\n        lineNumber,\r\n        colNumber,\r\n        errorObject\r\n    })\r\n}\r\n\r\nlet myFunc = {}\r\n\r\nmyFunc()\n\n//# sourceURL=webpack:///./app.js?");

/***/ }),

/***/ "./error-handler.js":
/*!**************************!*\
  !*** ./error-handler.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ErrorHandler\": () => (/* binding */ ErrorHandler)\n/* harmony export */ });\nclass ErrorHandler {\r\n    constructor (messageHandler, logger) {\r\n        if(!messageHandler){\r\n            throw new Error('Message handler not defined')\r\n        }\r\n        if(!logger){\r\n            throw new Error('Logger not defined')\r\n        }\r\n        this.messageHandler = messageHandler;\r\n        this.logger = logger;\r\n    }\r\n\r\n    handle(header, content, severity, errorObject) {\r\n        this.messageHandler(header, content, severity)\r\n        this.logger(errorObject)\r\n    }\r\n}\n\n//# sourceURL=webpack:///./error-handler.js?");

/***/ }),

/***/ "./error-logging-strategy.js":
/*!***********************************!*\
  !*** ./error-logging-strategy.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ErrorLoggingStrategy\": () => (/* binding */ ErrorLoggingStrategy)\n/* harmony export */ });\nfunction ErrorLoggingStrategy(error) {\r\n    console.log(`An error occured at file ${error.source} line ${error.lineNumber} with message ${error.message}`)\r\n}\n\n//# sourceURL=webpack:///./error-logging-strategy.js?");

/***/ }),

/***/ "./message-handler.js":
/*!****************************!*\
  !*** ./message-handler.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MessageHandlingStrategys\": () => (/* binding */ MessageHandlingStrategys)\n/* harmony export */ });\n// import * as toastr from 'toastr';\r\n\r\nfunction MessageHandlingStrategys(header, content, severity) {\r\n    if(severity <= 3) {\r\n        alert(content, header)\r\n    }\r\n    else {\r\n        alert(content, header)\r\n    }\r\n}\n\n//# sourceURL=webpack:///./message-handler.js?");

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