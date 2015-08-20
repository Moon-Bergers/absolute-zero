window.onload = function() {
    Crafty.init(800, 500);
    // A blue block, controlled by arrow keys
    var player = Crafty.e("2D, Canvas, Color, Keyboard, Collision, player")
        .attr({x:225, y:375, w:50, h:50})
        .color("blue")
        .bind('KeyDown', function(e) {
          if(e.key == Crafty.keys.LEFT_ARROW) {
            this.x -= 50;
          } else if (e.key == Crafty.keys.RIGHT_ARROW) {
            this.x += 50;
          } else if (e.key == Crafty.keys.UP_ARROW) {
            this.y -= 50;
          } else if (e.key == Crafty.keys.DOWN_ARROW) {
            this.y += 50;
          }
        }).collision().onHit("wall_left", function() {
          this.x += 50;
        }).collision().onHit("wall_right", function() {
          this.x -= 50;
        }).collision().onHit("wall_top", function() {
          this.y += 50;
        }).collision().onHit("wall_bottom", function() {
          this.y -= 50;
        });
    var enemyBlock = Crafty.e("2D, Canvas, Color, Collision, enemy_block")
      .attr({x:75, y:75, w:50, h:50})
      .color("red")
      .collision().onHit("player", function() {
        moveEnemy(this);
      });

    // WALLS

    var wall_left = Crafty.e("2D, Canvas, Color, Collision, wall_left")
      .attr({x:0, y:0, w:25, h:500})
      .color("black");
    var wall_right = Crafty.e("2D, Canvas, Color, Collision, wall_right")
        .attr({x:775, y:0, w:25, h:500})
        .color("black");
    var wall_top = Crafty.e("2D, Canvas, Color, Collision, wall_top")
        .attr({x:0, y:0, w:800, h:25})
        .color("black");
    var wall_bottom = Crafty.e("2D, Canvas, Color, Collision, wall_bottom")
        .attr({x:0, y:475, w:800, h:25})
        .color("black");

    // FUNCTIONS

    function moveEnemy (enemy) {
      enemy.x = ((Math.floor(Math.random() * 15)) * 50) + 25;
      enemy.y = ((Math.floor(Math.random() * 9)) * 50) + 25;
    }
};
