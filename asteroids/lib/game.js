const Asteroid = require('./asteroid')

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
