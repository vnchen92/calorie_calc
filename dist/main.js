/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("var leftSide = __webpack_require__(/*! ./scripts/options.js */ \"./src/scripts/options.js\");\n\ndocument.addEventListener(\"DOMContentLoaded\", function () {\n  console.log(\"leftSide\");\n}); //import all js files here, require\n//use window.#whatver class you have to  to test things\n// window.GameClass = Game//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6IkFBQUEsSUFBTUEsUUFBUSxHQUFHQyxtQkFBTyxDQUFDLHNEQUFELENBQXhCOztBQUVBQyxRQUFRLENBQUNDLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxZQUFNO0VBQ2hEQyxPQUFPLENBQUNDLEdBQVIsQ0FBWSxVQUFaO0FBQ0gsQ0FGRCxFLENBS0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2Fsb3JpZV9jYWxjdWxhdG9yLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgbGVmdFNpZGUgPSByZXF1aXJlKFwiLi9zY3JpcHRzL29wdGlvbnMuanNcIik7XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcImxlZnRTaWRlXCIpO1xyXG59KTtcclxuXHJcblxyXG4vL2ltcG9ydCBhbGwganMgZmlsZXMgaGVyZSwgcmVxdWlyZVxyXG4vL3VzZSB3aW5kb3cuI3doYXR2ZXIgY2xhc3MgeW91IGhhdmUgdG8gIHRvIHRlc3QgdGhpbmdzXHJcbi8vIHdpbmRvdy5HYW1lQ2xhc3MgPSBHYW1lIl0sIm5hbWVzIjpbImxlZnRTaWRlIiwicmVxdWlyZSIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/options.js":
/*!********************************!*\
  !*** ./src/scripts/options.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("var breads = __webpack_require__(/*! ../data/bread.json */ \"./src/data/bread.json\");\n\nvar ul = document.createElement(\"ul\");\n\nfor (var key in breads) {\n  var li = document.createElement(\"li\");\n  li.innerText = key;\n  ul.appendChild(li);\n} //optionsCanvas.addEventListener(\"click\", functiontoupdatebarchart);\n//if clicked, have an outline around it and update chart\n//if unclicked, remove outline and update chart\n//if you click this bread, you will get its protein, carb, fat\n\n\nfunction addToChart(bread) {\n  var singleBread = {\n    breadName: \"\",\n    servingSize: 0,\n    calories: 0,\n    totalFat: 0,\n    carb: 0,\n    protein: 0\n  };\n\n  for (var name in breads) {\n    var breadName = breads[name];\n\n    if (bread = breadName) {\n      singleBread.breadName = breadName;\n      singleBread.servingSize = breadName.servingSize;\n      singleBread.calories = breadName.calories;\n      singleBread.totalFat = breadName.totalFat;\n      singleBread.carb = breadName.carb;\n      singleBread.protein = breadName.protein;\n    }\n  }\n\n  return singleBread;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9vcHRpb25zLmpzLmpzIiwibWFwcGluZ3MiOiJBQUFBLElBQU1BLE1BQU0sR0FBR0MsbUJBQU8sQ0FBQyxpREFBRCxDQUF0Qjs7QUFPSSxJQUFJQyxFQUFFLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixJQUF2QixDQUFUOztBQUNBLEtBQUssSUFBSUMsR0FBVCxJQUFnQkwsTUFBaEIsRUFBdUI7RUFDbkIsSUFBSU0sRUFBRSxHQUFHSCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsSUFBdkIsQ0FBVDtFQUNBRSxFQUFFLENBQUNDLFNBQUgsR0FBZUYsR0FBZjtFQUNBSCxFQUFFLENBQUNNLFdBQUgsQ0FBZUYsRUFBZjtBQUNILEMsQ0FJRDtBQUNJO0FBQ0E7QUFJUjs7O0FBQ0EsU0FBU0csVUFBVCxDQUFvQkMsS0FBcEIsRUFBMEI7RUFDdEIsSUFBSUMsV0FBVyxHQUFHO0lBQ2RDLFNBQVMsRUFBRSxFQURHO0lBRWRDLFdBQVcsRUFBRSxDQUZDO0lBR2RDLFFBQVEsRUFBRSxDQUhJO0lBSWRDLFFBQVEsRUFBRSxDQUpJO0lBS2RDLElBQUksRUFBRSxDQUxRO0lBTWRDLE9BQU8sRUFBRTtFQU5LLENBQWxCOztFQVFBLEtBQUssSUFBSUMsSUFBVCxJQUFpQmxCLE1BQWpCLEVBQXlCO0lBQ3JCLElBQUlZLFNBQVMsR0FBR1osTUFBTSxDQUFDa0IsSUFBRCxDQUF0Qjs7SUFDQSxJQUFJUixLQUFLLEdBQUdFLFNBQVosRUFBc0I7TUFDbEJELFdBQVcsQ0FBQ0MsU0FBWixHQUF3QkEsU0FBeEI7TUFDQUQsV0FBVyxDQUFDRSxXQUFaLEdBQTBCRCxTQUFTLENBQUNDLFdBQXBDO01BQ0FGLFdBQVcsQ0FBQ0csUUFBWixHQUF1QkYsU0FBUyxDQUFDRSxRQUFqQztNQUNBSCxXQUFXLENBQUNJLFFBQVosR0FBdUJILFNBQVMsQ0FBQ0csUUFBakM7TUFDQUosV0FBVyxDQUFDSyxJQUFaLEdBQW1CSixTQUFTLENBQUNJLElBQTdCO01BQ0FMLFdBQVcsQ0FBQ00sT0FBWixHQUFzQkwsU0FBUyxDQUFDSyxPQUFoQztJQUNIO0VBQ0o7O0VBQ0QsT0FBT04sV0FBUDtBQUNIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2Fsb3JpZV9jYWxjdWxhdG9yLy4vc3JjL3NjcmlwdHMvb3B0aW9ucy5qcz9jMTlkIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGJyZWFkcyA9IHJlcXVpcmUoXCIuLi9kYXRhL2JyZWFkLmpzb25cIik7XHJcblxyXG5cclxuXHJcblxyXG4gXHJcblxyXG4gICAgbGV0IHVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInVsXCIpO1xyXG4gICAgZm9yIChsZXQga2V5IGluIGJyZWFkcyl7XHJcbiAgICAgICAgbGV0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpXHJcbiAgICAgICAgbGkuaW5uZXJUZXh0ID0ga2V5O1xyXG4gICAgICAgIHVsLmFwcGVuZENoaWxkKGxpKTtcclxuICAgIH1cclxuXHJcbiAgICBcclxuXHJcbiAgICAvL29wdGlvbnNDYW52YXMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9udG91cGRhdGViYXJjaGFydCk7XHJcbiAgICAgICAgLy9pZiBjbGlja2VkLCBoYXZlIGFuIG91dGxpbmUgYXJvdW5kIGl0IGFuZCB1cGRhdGUgY2hhcnRcclxuICAgICAgICAvL2lmIHVuY2xpY2tlZCwgcmVtb3ZlIG91dGxpbmUgYW5kIHVwZGF0ZSBjaGFydFxyXG5cclxuXHJcblxyXG4vL2lmIHlvdSBjbGljayB0aGlzIGJyZWFkLCB5b3Ugd2lsbCBnZXQgaXRzIHByb3RlaW4sIGNhcmIsIGZhdFxyXG5mdW5jdGlvbiBhZGRUb0NoYXJ0KGJyZWFkKXtcclxuICAgIGxldCBzaW5nbGVCcmVhZCA9IHtcclxuICAgICAgICBicmVhZE5hbWU6IFwiXCIsXHJcbiAgICAgICAgc2VydmluZ1NpemU6IDAsXHJcbiAgICAgICAgY2Fsb3JpZXM6IDAsXHJcbiAgICAgICAgdG90YWxGYXQ6IDAsXHJcbiAgICAgICAgY2FyYjogMCxcclxuICAgICAgICBwcm90ZWluOiAwXHJcbiAgICB9O1xyXG4gICAgZm9yIChsZXQgbmFtZSBpbiBicmVhZHMpIHtcclxuICAgICAgICBsZXQgYnJlYWROYW1lID0gYnJlYWRzW25hbWVdO1xyXG4gICAgICAgIGlmIChicmVhZCA9IGJyZWFkTmFtZSl7XHJcbiAgICAgICAgICAgIHNpbmdsZUJyZWFkLmJyZWFkTmFtZSA9IGJyZWFkTmFtZTtcclxuICAgICAgICAgICAgc2luZ2xlQnJlYWQuc2VydmluZ1NpemUgPSBicmVhZE5hbWUuc2VydmluZ1NpemU7XHJcbiAgICAgICAgICAgIHNpbmdsZUJyZWFkLmNhbG9yaWVzID0gYnJlYWROYW1lLmNhbG9yaWVzOyBcclxuICAgICAgICAgICAgc2luZ2xlQnJlYWQudG90YWxGYXQgPSBicmVhZE5hbWUudG90YWxGYXQ7XHJcbiAgICAgICAgICAgIHNpbmdsZUJyZWFkLmNhcmIgPSBicmVhZE5hbWUuY2FyYjtcclxuICAgICAgICAgICAgc2luZ2xlQnJlYWQucHJvdGVpbiA9IGJyZWFkTmFtZS5wcm90ZWluO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiBzaW5nbGVCcmVhZDtcclxufVxyXG5cclxuXHJcblxyXG4iXSwibmFtZXMiOlsiYnJlYWRzIiwicmVxdWlyZSIsInVsIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwia2V5IiwibGkiLCJpbm5lclRleHQiLCJhcHBlbmRDaGlsZCIsImFkZFRvQ2hhcnQiLCJicmVhZCIsInNpbmdsZUJyZWFkIiwiYnJlYWROYW1lIiwic2VydmluZ1NpemUiLCJjYWxvcmllcyIsInRvdGFsRmF0IiwiY2FyYiIsInByb3RlaW4iLCJuYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/options.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2Nzcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jYWxvcmllX2NhbGN1bGF0b3IvLi9zcmMvaW5kZXguc2Nzcz85NzQ1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ }),

/***/ "./src/data/bread.json":
/*!*****************************!*\
  !*** ./src/data/bread.json ***!
  \*****************************/
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('{"Artisan Flatbread":{"servingSize":78,"calories":220,"totalFat":4,"satFat":1,"transFat":0,"chol":0,"sodium":360,"carb":40,"dietaryFiber":1,"sugar":2,"protein":7,"vitA":0,"vitC":0,"calcium":0,"iron":15},"Artisan Italian Bread":{"servingSize":65,"calories":160,"totalFat":2,"satFat":1,"transFat":0,"chol":0,"sodium":350,"carb":34,"dietaryFiber":0,"sugar":2,"protein":7,"vitA":0,"vitC":8,"calcium":0,"iron":10},"Hearty Multigrain Bread":{"servingSize":71,"calories":190,"totalFat":2,"satFat":0,"transFat":0,"chol":0,"sodium":310,"carb":36,"dietaryFiber":3,"sugar":3,"protein":7,"vitA":0,"vitC":0,"calcium":0,"iron":8},"Italian Herbs & Cheese":{"servingSize":76,"calories":200,"totalFat":4,"satFat":2,"transFat":0,"chol":10,"sodium":550,"carb":36,"dietaryFiber":0,"sugar":2,"protein":9,"vitA":4,"vitC":8,"calcium":6,"iron":10},"Jalapeno Cheddar Bread":{"servingSize":76,"calories":190,"totalFat":4,"satFat":2,"transFat":0,"chol":10,"sodium":470,"carb":34,"dietaryFiber":0,"sugar":2,"protein":9,"vitA":4,"vitC":10,"calcium":6,"iron":10},"Biscuit":{"servingSize":90,"calories":290,"totalFat":14,"satFat":8,"transFat":0,"chol":0,"sodium":960,"carb":35,"dietaryFiber":0,"sugar":3,"protein":4,"vitA":0,"vitC":0,"calcium":0,"iron":0},"Gluten-Free Bread":{"servingSize":113,"calories":340,"totalFat":12,"satFat":7,"transFat":0,"chol":0,"sodium":800,"carb":52,"dietaryFiber":3,"sugar":7,"protein":6,"vitA":0,"vitC":0,"calcium":4,"iron":0},"Spinach Wrap":{"servingSize":102,"calories":290,"totalFat":8,"satFat":4,"transFat":0,"chol":0,"sodium":780,"carb":48,"dietaryFiber":2,"sugar":1,"protein":8,"vitA":0,"vitC":0,"calcium":10,"iron":15},"Tomato Basil Wrap":{"servingSize":102,"calories":290,"totalFat":8,"satFat":4,"transFat":0,"chol":0,"sodium":730,"carb":49,"dietaryFiber":2,"sugar":2,"protein":8,"vitA":0,"vitC":10,"calcium":8,"iron":15},"Mini Artisan Italian Bread":{"servingSize":43,"calories":100,"totalFat":1,"satFat":0,"transFat":0,"chol":0,"sodium":240,"carb":22,"dietaryFiber":0,"sugar":1,"protein":4,"vitA":0,"vitC":6,"calcium":0,"iron":6},"Mini Hearty Multigrain Bread":{"servingSize":47,"calories":120,"totalFat":2,"satFat":0,"transFat":0,"chol":0,"sodium":210,"carb":24,"dietaryFiber":2,"sugar":2,"protein":5,"vitA":0,"vitC":0,"calcium":0,"iron":6},"Hero Bread":{"servingSize":75,"calories":100,"totalFat":5,"satFat":0,"transFat":0,"chol":0,"sodium":430,"carb":27,"dietaryFiber":26,"sugar":0,"protein":12,"vitA":0,"vitC":4,"calcium":2,"iron":6}}');

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
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;