window.onload = function() {
    Crafty.init(402, 402);
    // A blue block, controlled by arrow keys
    var player = Crafty.e("2D, Canvas, Color, Keyboard, Collision, player")
        .attr({x:0, y:0, w:50, h:50})
        .color("blue")
        .bind('KeyDown', function(e) {
          if(e.key == Crafty.keys.LEFT_ARROW) {
            this.x = this.x - 50;
          } else if (e.key == Crafty.keys.RIGHT_ARROW) {
            this.x = this.x + 50;
          } else if (e.key == Crafty.keys.UP_ARROW) {
            this.y = this.y - 50;
          } else if (e.key == Crafty.keys.DOWN_ARROW) {
            this.y = this.y + 50;
          }
        });
    var enemyBlock = Crafty.e("2D, Canvas, Color, Collision, enemy_block")
      .attr({x:100, y:100, w:50, h:50})
      .color("red")
      .collision().onHit("player", function() {
        this.destroy();
      });
};
