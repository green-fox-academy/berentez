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
/***/ (function() {

eval("var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nconst btn = document.querySelectorAll('button');\r\nlet quest = document.querySelector('.question');\r\nconst score = document.querySelector('span');\r\nlet questionId = 1;\r\nlet questList = [];\r\nconst getQuestionArray = () => __awaiter(this, void 0, void 0, function* () {\r\n    const response = yield fetch('http://localhost:8080/api/questions');\r\n    const data = yield response.json();\r\n    return data;\r\n});\r\nconst getRandomId = () => {\r\n    getQuestionArray()\r\n        .then((data) => {\r\n        data.forEach((element) => {\r\n            questList.push(element.id);\r\n        });\r\n    })\r\n        .then(() => {\r\n        const index = Math.floor(Math.random() * questList.length);\r\n        questionId = questList[index];\r\n    });\r\n};\r\nfunction getQuestionPatch() {\r\n    const xhr = new XMLHttpRequest();\r\n    xhr.open('GET', 'http://localhost:8080/api/game', true);\r\n    xhr.setRequestHeader('Content-Type', 'application/json');\r\n    xhr.setRequestHeader('id', `${questionId}`);\r\n    xhr.send();\r\n    xhr.onload = () => {\r\n        const question = JSON.parse(xhr.responseText);\r\n        displayQuestion(question);\r\n    };\r\n}\r\nconst getQuestion = () => {\r\n    fetch('http://localhost:8080/api/game', {\r\n        method: 'GET',\r\n        headers: { id: `${questionId}` },\r\n    })\r\n        .then((res) => res.json())\r\n        .then((question) => displayQuestion(question))\r\n        .catch((err) => console.error('Nope', err));\r\n};\r\nfunction displayQuestion(question) {\r\n    quest.innerHTML = question.question;\r\n    for (let i = 0; i < 4; i++) {\r\n        btn[i].innerHTML = question.answers[i].answer;\r\n        btn[i].classList.add(question.answers[i].id);\r\n    }\r\n}\r\nfunction checkButton() {\r\n    btn.forEach((value, i) => {\r\n        value.addEventListener('click', function () {\r\n            checkResult(i);\r\n        });\r\n    });\r\n}\r\nconst checkResult = (index) => {\r\n    const xhr = new XMLHttpRequest();\r\n    xhr.open('GET', 'http://localhost:8080/api/game', true);\r\n    xhr.setRequestHeader('Content-Type', 'application/json');\r\n    xhr.setRequestHeader('id', `${questionId}`);\r\n    xhr.send();\r\n    xhr.onload = () => {\r\n        const result = JSON.parse(xhr.responseText);\r\n        if (result.answers[index].is_correct === 1) {\r\n            btn[index].setAttribute('style', 'background-color: rgb(97, 152, 100)');\r\n            score.innerText = (parseInt(score.innerText) + 1).toString();\r\n        }\r\n        else {\r\n            btn[index].setAttribute('style', 'background-color: red');\r\n        }\r\n        getRandomId();\r\n        setTimeout(clearButtons, 2800);\r\n        setTimeout(getQuestion, 3000);\r\n    };\r\n};\r\nfunction clearButtons() {\r\n    btn.forEach((value) => {\r\n        value.className = '';\r\n        value.setAttribute('style', 'background-color :');\r\n    });\r\n}\r\nwindow.onload = () => {\r\n    getQuestion();\r\n    checkButton();\r\n};\r\n\n\n//# sourceURL=webpack://client/./src/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.ts"]();
/******/ 	
/******/ })()
;