const Asteriod = require("./asteroid")
const GameView = require("./game_view")
const Game = require("./game")
// const Laser = require("./laser")
const MovingObject = require("./moving_object")
// const Ship = require("./ship")
const utils = require("./utils")

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
