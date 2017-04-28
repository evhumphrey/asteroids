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
