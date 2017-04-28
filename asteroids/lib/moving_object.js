const MovingObject = function(options) {
  this.pos = options['pos'];
  this.vel = options['vel'];
  this.radius = options['radius'];
  this.color = options['color'];
}

MovingObject.prototype.draw = function (ctx) {
  const [x, y] = this.pos;
  ctx.beginPath();
  ctx.arc(x, y, this.radius, 0, 2*Math.PI);
  ctx.stroke();
};

MovingObject.prototype.move = function() {
  const [x, y] = this.pos;
  const [dX, dY] = this.vel;
  this.pos = [x + dX, y + dY];
}

module.export = MovingObject
