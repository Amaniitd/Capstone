/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/api/omdbApi.js":
/*!****************************!*\
  !*** ./src/api/omdbApi.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"omdbApi\": () => (/* binding */ omdbApi)\n/* harmony export */ });\n/* harmony import */ var _enum_httpMethods__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../enum/httpMethods */ \"./src/enum/httpMethods.js\");\n/* harmony import */ var _enum_restEndpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enum/restEndpoints */ \"./src/enum/restEndpoints.js\");\n/* harmony import */ var _enum_restEndpoints__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_enum_restEndpoints__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _models_movie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/movie */ \"./src/models/movie.js\");\n/* harmony import */ var _models_movieList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/movieList */ \"./src/models/movieList.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nclass omdbApi {\r\n    static getMovies() {\r\n        return new Promise((resolve, reject) => {\r\n            const xhr = new XMLHttpRequest();\r\n            xhr.open(\r\n                _enum_httpMethods__WEBPACK_IMPORTED_MODULE_0__.httpMethods.get,\r\n                _enum_restEndpoints__WEBPACK_IMPORTED_MODULE_1__.endpoints.omdb,\r\n                true\r\n            );\r\n            xhr.onload = function () {\r\n                try {\r\n                    const data = JSON.parse(xhr.response);\r\n                    const movies = new _models_movieList__WEBPACK_IMPORTED_MODULE_3__.MovieList();\r\n                    data.forEach(raw_movie => {\r\n                        var movie = new _models_movie__WEBPACK_IMPORTED_MODULE_2__.Movie();\r\n                        movie.load(raw_movie);\r\n                        movies.push(movie);\r\n                    });\r\n                    resolve();\r\n                } catch (ex) {\r\n                    console.log(ex);\r\n                    reject();\r\n                }\r\n            };\r\n            xhr.send();\r\n        });\r\n    \r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/api/omdbApi.js?");

/***/ }),

/***/ "./src/enum/httpMethods.js":
/*!*********************************!*\
  !*** ./src/enum/httpMethods.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"httpMethods\": () => (/* binding */ httpMethods)\n/* harmony export */ });\n\r\nconst httpMethods = {\r\n    get: \"get\",\r\n    post: 'post',\r\n    put: 'put',\r\n    delete: 'delete'\r\n};\r\n\n\n//# sourceURL=webpack:///./src/enum/httpMethods.js?");

/***/ }),

/***/ "./src/enum/restEndpoints.js":
/*!***********************************!*\
  !*** ./src/enum/restEndpoints.js ***!
  \***********************************/
/***/ (() => {

eval("const endpoints = {\r\n    omdb: \"http://localhost:3000/movies\"\r\n}\n\n//# sourceURL=webpack:///./src/enum/restEndpoints.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _api_omdbApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api/omdbApi */ \"./src/api/omdbApi.js\");\n\r\n\r\n\r\n\r\nfunction fetchMoviesFromOMDB() {\r\n    var promise = _api_omdbApi__WEBPACK_IMPORTED_MODULE_0__.omdbApi.getMovies();\r\n    promise.then(\r\n        (movies) => {\r\n            console.log(movies);\r\n        },\r\n        () => {\r\n            console.log(\"error\");\r\n        }\r\n    );\r\n\r\n}\r\n\r\nfetchMoviesFromOMDB();\n\n//# sourceURL=webpack:///./src/main.js?");

/***/ }),

/***/ "./src/models/baseModel.js":
/*!*********************************!*\
  !*** ./src/models/baseModel.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"BaseModel\": () => (/* binding */ BaseModel)\n/* harmony export */ });\nclass BaseModel{\r\n    constructor(){\r\n        this.id = 0;\r\n    }\r\n    load(rawData) {\r\n        for (let prop in rawData) {\r\n            this[prop] = rawData[prop];\r\n        }\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/models/baseModel.js?");

/***/ }),

/***/ "./src/models/movie.js":
/*!*****************************!*\
  !*** ./src/models/movie.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Movie\": () => (/* binding */ Movie)\n/* harmony export */ });\n/* harmony import */ var _baseModel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./baseModel */ \"./src/models/baseModel.js\");\n\r\n\r\n\r\nclass Movie extends _baseModel__WEBPACK_IMPORTED_MODULE_0__.BaseModel{\r\n    constructor (name = \"\", producer = \"\", rating = 0) {\r\n        super();\r\n        this.name = name;\r\n        this.rating = rating;\r\n        this.producer = producer;\r\n    }\r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./src/models/movie.js?");

/***/ }),

/***/ "./src/models/movieList.js":
/*!*********************************!*\
  !*** ./src/models/movieList.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"MovieList\": () => (/* binding */ MovieList)\n/* harmony export */ });\n\r\n\r\nclass MovieList extends Array {\r\n    constructor() {\r\n        super();\r\n    }\r\n    sortByRating() {\r\n        const movies = this;\r\n        movies = movies.sort((a, b) => {\r\n            return b.rating - a.rating;\r\n        });\r\n        return movies;\r\n    }\r\n    filterByRating(rating = 1) {\r\n        const movies = this;\r\n        movies = movies.filter(movie => {\r\n            return movie.rating >= rating;\r\n        });\r\n        return movies;\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/models/movieList.js?");

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ })()
;