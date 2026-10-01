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

/***/ "./index.js"
/*!******************!*\
  !*** ./index.js ***!
  \******************/
(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("{const Copo = __webpack_require__(/*! ./js/copo */ \"./js/copo.js\")\r\n\r\nlet resposta = document.getElementById('resposta')\r\nlet principal = document.getElementById('principal')\r\n\r\nprincipal.addEventListener('click', ()=>{\r\n\r\n    let raioMaior = Number(document.getElementById('raioMaior').value)\r\n    let raioMenor = Number(document.getElementById('raioMenor').value)\r\n    let altura = Number(document.getElementById('altura').value)\r\n\r\n    console.log(`--> ${raioMaior}`)\r\n    console.log(`--> ${raioMenor}`)\r\n    console.log(`--> ${altura}`)\r\n\r\n    let copo = new Copo(raioMaior, raioMenor, altura)\r\n\r\n    console.log(copo)\r\n\r\n    let calcG = copo.calcGeratris()\r\n    let calcABM = copo.calcABMaior()\r\n    let calcABm = copo.calcABMenor()\r\n    let calcAL = copo.calcAreaLateral()\r\n    let calcV = copo.calcVolume()\r\n    let classificar = copo.classificar()\r\n\r\n    console.log(`o calculo da geratris ficou em: ${calcG.toFixed(2)}`)\r\n    console.log(`o calculo da base maior ficou em: ${calcABM.toFixed(2)}`)\r\n    console.log(`o calculo da base menor ficou em: ${calcABm.toFixed(2)}`)\r\n    console.log(`o calculo da area lateral ficou em: ${calcAL.toFixed(2)}`)\r\n    console.log(`o calculo do volume ficou em: ${calcV.toFixed(2)}`)\r\n    console.log(`este copo é classificado como ${classificar}`)\r\n\r\n    resposta.innerHTML = ''\r\n    resposta.innerHTML += `<p> o calculo da geratris ficou em: ${calcG.toFixed(2)}</p>`\r\n    resposta.innerHTML += `<p> o calculo da base maior ficou em: ${calcABM.toFixed(2)}</p>`\r\n    resposta.innerHTML += `<p> o calculo da base menor ficou em: ${calcABm.toFixed(2)}</p>`\r\n    resposta.innerHTML += `<p> o calculo da area lateral ficou em: ${calcAL.toFixed(2)}</p>`\r\n    resposta.innerHTML += `<p> o calculo do volume ficou em: ${calcV.toFixed(2)}</p>`\r\n    resposta.innerHTML += `<p> este copo é classificado como ${classificar}</p>`\r\n\r\n})\n\n//# sourceURL=webpack://splich_trabalho/./index.js?\n}");

/***/ },

/***/ "./js/copo.js"
/*!********************!*\
  !*** ./js/copo.js ***!
  \********************/
(module) {

eval("{class Copo{\r\n    constructor(raioMaior, raioMenor, altura){\r\n        this.raioMaior = raioMaior\r\n        this.raioMenor = raioMenor\r\n        this.altura = altura\r\n    }\r\n    calcGeratris(){\r\n        return (this.altura * this.altura) + ((this.raioMaior - this.raioMenor) * (this.raioMaior - this.raioMenor))\r\n    }\r\n    calcABMaior(){\r\n        return Math.PI * (this.raioMaior * this.raioMaior)\r\n    }\r\n    calcABMenor(){\r\n        return Math.PI * (this.raioMenor * this.raioMenor)\r\n    }\r\n    calcAreaLateral(){\r\n        return Math.PI * this.calcGeratris() * (this.raioMaior + this.raioMenor)\r\n    }\r\n    calcVolume(){\r\n        return Math.PI * this.altura / 3 * ((this.raioMaior * this.raioMaior) + this.raioMaior * this.raioMenor + (this.raioMenor * this.raioMenor))\r\n    }\r\n    classificar(){\r\n        \r\n        if(this.calcVolume() <= 180){\r\n            return ' copo de dose! Ideal para café!'\r\n        }else if(this.calcVolume() >= 181 && this.calcVolume() <= 350){\r\n            return ' copo padrão! Ideal para servir água ou chá!'\r\n        }else if(this.calcVolume() >= 350){\r\n            return ' copo grande! Ideal para sucos e refrigerantes!'\r\n        }\r\n\r\n    }\r\n\r\n}\r\n\r\nmodule.exports = Copo\r\n\n\n//# sourceURL=webpack://splich_trabalho/./js/copo.js?\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	let __webpack_exports__ = __webpack_require__("./index.js");
/******/ 	
/******/ })()
;