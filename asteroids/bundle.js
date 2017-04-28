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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
/***/ (function(module, exports) {

const MovingObject = function(options) {
  this.pos = options['pos'];
  this.vel = options['vel'];
  this.radius = options['radius'];
  this.color = options['color'];
}

MovingObject.prototype.draw = function (ctx) {
  const [x, y] = this.pos;
  ctx.fillStyle = "#FFFFFF"

  ctx.beginPath();
  ctx.arc(x, y, this.radius, 0, 2*Math.PI, true);
  ctx.closePath();
  ctx.fill();
};

MovingObject.prototype.move = function() {
  const [x, y] = this.pos;
  const [dX, dY] = this.vel;
  this.pos = [x + dX, y + dY];
}

module.exports= MovingObject


/***/ }),
/* 2 */
/***/ (function(module, exports) {

const utils = {
  inherits: function (childClass, parentClass) {
      function Surrogate() {};
      Surrogate.prototype = parentClass.prototype;
      childClass.prototype = new Surrogate();
      childClass.prototype.constructor = childClass;
  }
}

module.exports = utils


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

const MovingObject = __webpack_require__(1)
const utils = __webpack_require__(2)

function Asteroid(pos){
  this.COLOR = "#FFFFFF"
  this.RADIUS = 50

  MovingObject.call(this, {
    color: this.COLOR,
    radius: this.RADIUS,
    pos,
    vel: [Math.random() * 10, Math.random() * 10]
  })
}

utils.inherits(Asteroid, MovingObject)
console.log(Asteroid)
module.exports = Asteroid


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

const Asteroid = __webpack_require__(3)

function Game(){
  this.DIM_X = 500
  this.DIM_Y = 500
  this.NUM_ASTEROIDS = 3
  this.asteroids = []
  this.addAsteroids()
}

Game.prototype.addAsteroids = function() {
  for(let i = 0; i < this.NUM_ASTEROIDS; i++) {
    pos = [Math.random() * this.DIM_X, Math.random() * this.DIM_Y]
    this.asteroids.push(new Asteroid(pos))
  }
}

Game.prototype.draw = function(ctx){
  ctx.fillStyle = "#000000"
  ctx.clearRect(0,0,this.DIM_Y,this.DIM_Y)
  ctx.rect(0,0,this.DIM_Y,this.DIM_Y);
  ctx.fillRect(0,0,this.DIM_Y,this.DIM_Y);
  ctx.stroke();

  this.asteroids.forEach(asteroid => asteroid.draw(ctx))
}

Game.prototype.moveObjects = function() {
  this.asteroids.forEach(asteroid => asteroid.move())
}

module.exports = Game


/***/ }),
/* 5 */
/***/ (function(module, exports) {

const GameView = function(game, context) {
  this.game = game
  this.context = context
}

GameView.prototype.start = function() {  setInterval(() => {
    this.game.moveObjects(this.context)
    this.game.draw(this.context)
  }, 20)
}

module.exports = GameView


/***/ }),
/* 6 */,
/* 7 */,
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

const Asteriod = __webpack_require__(3)
const GameView = __webpack_require__(5)
const Game = __webpack_require__(4)
// const Laser = require("./laser")
const MovingObject = __webpack_require__(1)
// const Ship = require("./ship")
const utils = __webpack_require__(2)

document.addEventListener("DOMContentLoaded", function(event) {
  console.log(Game)
  var game = new Game();
  var canvas = document.getElementById("game-canvas");
  canvas.width = game.DIM_X;
  canvas.height = game.DIM_Y;
  var ctx = canvas.getContext("2d");

  var view = new GameView(game, ctx);
  view.start();
});


/***/ })
/******/ ]);