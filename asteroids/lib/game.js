const Asteroid = require('./asteroid')

function Game(){
  this.DIM_X = 500
  this.DIM_Y = 500
  this.NUM_ASTEROIDS = 5
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
  this.asteroids.forEach(asteroid => asteroid.move([this.DIM_X, this.DIM_Y]))
}

Game.prototype.checkCollisions = function() {
  const elementsToDelete = []
  for (let i = 0; i < this.asteroids.length; i++) {
    for (let j = 0; j < this.asteroids.length; j++){
      if ( i !== j && this.asteroids[i].isCollidedWith(this.asteroids[j]) ) {
        elementsToDelete.push(this.asteroids[i])
        elementsToDelete.push(this.asteroids[j])
      }
    }
  }
  elementsToDelete.forEach(asteroid => this.removeAsteroid(asteroid))
}

Game.prototype.step = function(context) {
  this.moveObjects(context)
  this.draw(context)
  this.checkCollisions()
}

Game.prototype.removeAsteroid = function(asteroid){
  const index = this.asteroids.indexOf(asteroid)
  if(index >= 0) this.asteroids.splice(index, 1)
}

module.exports = Game
