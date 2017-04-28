const GameView = function(game, context) {
  this.game = game
  this.context = context
}

GameView.prototype.start = function() {  setInterval(() => {
    this.game.step(this.context)
  }, 20)
}

module.exports = GameView
