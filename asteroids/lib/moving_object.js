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

MovingObject.prototype.move = function(windowSize) {
  [canvasX, canvasY] = windowSize
  const [x, y] = this.pos;
  const [dX, dY] = this.vel;
  this.pos = [ (x + dX) % (canvasX + 200), (y + dY) % (canvasY + 200) ];
  console.log(this.pos)
}

MovingObject.prototype.isCollidedWith = function(otherObject) {
  const [x1, y1] = this.pos
  const [x2, y2] = otherObject.pos

  const dist = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2)

  return (dist < this.radius + otherObject.radius)
}


module.exports= MovingObject
