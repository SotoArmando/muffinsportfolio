/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const apps = [\r\n  {\r\n    title: \"Brilliant Escape\",\r\n    desc: \"<b>Brilliant Escape</b> is a 2D Arcade game made by Javedots Games where player *you must never let the bouncing square hit you otherwise you lose.\",\r\n    platform: \"Android\",\r\n    src: \"./pic/mobile/brilliant.webp\",\r\n    class: \"mobile3\",\r\n    stacks: \"Unity, C#, Google Admob\",\r\n    isgame: true,\r\n    link: \"https://play.google.com/store/apps/details?id=com.armando.Brilliant\"\r\n  },\r\n  {\r\n    title: \"Codi Cooking Timer\",\r\n\r\n    desc: \"<b>Codi Cooking Timer</b> Is an cooking assitant, a place to save recipes and have a quick stepthrought cooking feature.\",\r\n    platform: \"Android\",\r\n    src: \"./pic/mobile/codicook.webp\",\r\n    stacks: \"Python, Kivy\",\r\n    class: \"mobile1\",\r\n    isgame: false,\r\n    link: \"https://play.google.com/store/apps/details?id=cc.test.codi\"\r\n  },\r\n  {\r\n    title: \"Budgetboy Lite: Quick Budgeting\",\r\n    desc: \"<b>Budgetboy</b> is An Easy way to manage a occational budget for quick, also you will find more functions with will help u get more sophisticated use of it.\",\r\n    platform: \"Android\",\r\n    src: \"./pic/mobile/budgetboy.jpg\",\r\n    stacks: \"Java, Android Studio, XML\",\r\n    class: \"mobile2\",\r\n    isgame: false,\r\n    link: \"https://play.google.com/store/apps/details?id=com.devindie.budgetmanager\"\r\n  },\r\n  {\r\n    title: \"Prepmile: Steps Cooking\",\r\n    desc: \"<b>Prepmile</b> This is a project am working right now this is just a preview over a design i got.\",\r\n    platform: \"Not published\",\r\n    src: \"./pic/mobile/prepmile.jpg\",\r\n    stacks: \"Adobe XD\",\r\n    class: \"mobile0\",\r\n    isgame: false,\r\n    link: \"https://xd.adobe.com/view/a0ef51a0-b6b3-4067-66a4-5c86cb746e73-d6de/\"\r\n\r\n  },\r\n  {\r\n    title: \"MDM Sample\",\r\n    desc: \"Just a sample over MDM done in laravel.\",\r\n    platform: \"Not published\",\r\n    src: \"./pic/web/Group 2.png\",\r\n    stacks: \"Php, Laravel, Javascript, Bootstrap\",\r\n    class: \"web0\",\r\n    link: \"https://appfuturo.dixlater.com/\",\r\n    isgame: false,\r\n  },\r\n  {\r\n    title: \"Startpress Gaming MEdia\",\r\n    desc: \"This was going to be something i was gonna do with some IGDB developer api but that got as far as i knew how GOOD was theyr service.\",\r\n    platform: \"Web\",\r\n    stacks: \"HTML/CSS, Javascript, Bootstrap\",\r\n    src: \"./pic/web/Group 3.png\",\r\n    link: \"https://sotoarmando.github.io/StartpressMedia/dist/index.html\",\r\n    class: \"web0\",\r\n    isgame: false,\r\n  },\r\n  {\r\n    title: \"Odin Battleships\",\r\n    desc: \"<b>Battleships</b> Is a sample TDD project of the odin-project curriculum. set up your places and battle!\",\r\n    platform: \"Web\",\r\n    stacks: \"HTML/CSS, Javascript\",\r\n    src: \"./pic/web/Group 1.png\",\r\n    class: \"web0\",\r\n    isgame: true,\r\n    link: \"https://sotoarmando.github.io/odin-battleships/dist/index.html\"\r\n  },\r\n]\r\n\r\nlet index = 1\r\nlet toggled = false\r\nfunction toggleopacity_over100and0() {\r\n  \r\n  elements = (toggled) ? document.querySelectorAll(\".mustappear\"): document.querySelectorAll(\".mustdissapear\");\r\n  if (toggled) {\r\n    for (let i = 0; i < elements.length; i ++) {\r\n      console.log(\"toggleopacity_over100and0 \", i)\r\n      elements[i].classList.add(\"mustdissapear\");\r\n      elements[i].classList.remove(\"mustappear\");\r\n    }\r\n  } else {\r\n    for (let i = 0; i < elements.length; i ++) {\r\n      console.log(\"toggleopacity_over100and0 \", i)\r\n      elements[i].classList.remove(\"mustdissapear\");\r\n      elements[i].classList.add(\"mustappear\");\r\n    }\r\n  }\r\n\r\n  toggled = !toggled;\r\n}\r\n\r\n\r\nvar t=setInterval(function () {\r\n  console.log(index)\r\n  toggleopacity_over100and0();\r\n  let app = apps[index]\r\n  let display = document.querySelector(\"display\");\r\n  let img = document.querySelector(\"display > img\");\r\n  let descriptionspans = document.querySelectorAll(\"#displaydescription span\"); \r\n  let flagspans = document.querySelector(\"row.stuffrowspans\"); \r\n\r\n  setTimeout(() => {\r\n    img.setAttribute(\"src\", app.src);\r\n    display.classList.forEach((entry,value) => display.classList.remove(entry))\r\n    display.classList.add(app.class);\r\n\r\n    descriptionspans[0].innerHTML = app.desc;\r\n    descriptionspans[1].innerHTML = app.platform;\r\n    descriptionspans[2].innerHTML = app.stacks;\r\n    descriptionspans[3].querySelector(\"a\").setAttribute(\"href\", app.link);\r\n    descriptionspans[3].querySelector(\"a\").innerHTML = (app.platform === \"Web\") ? \"Live Link\" : \"Store Link\"\r\n    descriptionspans[3].querySelector(\"a\").innerHTML = (app.platform === \"Not published\") ? \"Preview Link\" : descriptionspans[3].querySelector(\"a\").innerHTML\r\n    \r\n  \r\n    flagspans.innerHTML = \"\"\r\n    flagspans.innerHTML += `<span class=\"btn1\" style=\"margin-left: .79em;\">${app.platform}</span>`\r\n    flagspans.innerHTML += (app.isgame) ? `<span class=\"btn1\" style=\"margin-left: .79em;\">Game</span>` : ''\r\n\r\n  }, 355);\r\n  \r\n\r\n\r\n\r\n\r\n  index += 1;\r\n  if (apps.length == index) {\r\n    index = 0;\r\n  }\r\n  setTimeout(() => {\r\n    toggleopacity_over100and0();\r\n  }, 355 + 355);\r\n},6000);\r\n\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });