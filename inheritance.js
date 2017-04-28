// Function.prototype.inherits = function(parent) {
//   function Surrogate() {};
//   Surrogate.prototype = parent.prototype;
//   this.prototype = new Surrogate();
//   this.prototype.constructor = this;
// }

Function.prototype.inherits = function(parent) {
  this.prototype = Object.create(parent.prototype);
}


function MovingObject () {}

function Ship () {}
Ship.inherits(MovingObject);

function Asteroid () {}
Asteroid.inherits(MovingObject);

Ship.prototype.pewPew = function() {
  console.log("PEW PEW");
}
