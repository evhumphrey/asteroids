const MovingObject = require("./moving_object")
const utils = require("./utils")

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
