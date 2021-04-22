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

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (() => {

eval("const btn = document.querySelector('button');\r\nfunction getJokes() {\r\n    return fetch('http://api.icndb.com/jokes/random')\r\n        .then((res) => {\r\n        return res.json();\r\n    })\r\n        .then((response) => writeJoke(response.value.joke));\r\n}\r\nfunction writeJoke(jokes) {\r\n    let con = document.querySelector('div');\r\n    const joke = document.createElement('p');\r\n    joke.textContent = jokes.toString();\r\n    con.appendChild(joke);\r\n}\r\nbtn.addEventListener('click', function () {\r\n    getJokes();\r\n});\r\n\n\n//# sourceURL=webpack://day-01/./src/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.ts"]();
/******/ 	
/******/ })()
;