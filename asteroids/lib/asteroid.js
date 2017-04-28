import MovingObject from "./moving_object"

function Asteroid(pos){
  this.COLOR = "#FFFFFF"
  this.RADIUS = 50

  MovingObject.call(this, {
    color: this.COLOR,
    radius: this.RADIUS,
    pos,
    vel: [Math.random * 10, Math.random * 10]
  })
}

module.export = Asteroid
