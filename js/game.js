window.onload = function() {
    Crafty.init(800, 500);

    // PLAYER

    var player = Crafty.e("2D, Canvas, Keyboard, Collision, Image, player")
        .attr({x:225, y:375, w:50, h:50})
        .image("http://lparchive.org/Professor-Layton-and-the-Curious-Village/Update%2003/63-Simon.png")
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

    // ENEMIES

    var enemyBlockA = Crafty.e("2D, Canvas, Color, Collision, enemy_block")
      .attr({x:275, y:275, w:50, h:50})
      .color("red")
      .bind("moving", randomMoving)
      .collision().onHit("player", function() {
        moveEnemy(this);
      }).collision().onHit("wall_left", function() {
        this.x += 100;
      }).collision().onHit("wall_right", function() {
        this.x -= 100;
      }).collision().onHit("wall_top", function() {
        this.y += 100;
      }).collision().onHit("wall_bottom", function() {
        this.y -= 100;
      });
    var enemyBlockB = Crafty.e("2D, Canvas, Color, Collision, enemy_block")
      .attr({x:475, y:175, w:50, h:50})
      .color("blue")
      .bind("moving", randomMoving)
      .collision().onHit("player", function() {
        moveEnemy(this);
      }).collision().onHit("wall_left", function() {
        this.x += 100;
      }).collision().onHit("wall_right", function() {
        this.x -= 100;
      }).collision().onHit("wall_top", function() {
        this.y += 100;
      }).collision().onHit("wall_bottom", function() {
        this.y -= 100;
      });
    var enemyBlockC = Crafty.e("2D, Canvas, Color, Collision, enemy_block")
      .attr({x:675, y:375, w:50, h:50})
      .color("yellow")
      .bind("moving", randomMoving)
      .collision().onHit("player", function() {
        moveEnemy(this);
      }).collision().onHit("wall_left", function() {
        this.x += 100;
      }).collision().onHit("wall_right", function() {
        this.x -= 100;
      }).collision().onHit("wall_top", function() {
        this.y += 100;
      }).collision().onHit("wall_bottom", function() {
        this.y -= 100;
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

    function randomMoving () {
      var direction = Math.floor(Math.random() * 4);
      switch (direction) {
        case 0:
          this.x -= 50;
          break;
        case 1:
          this.x += 50;
          break;
        case 2:
          this.y -= 50;
          break;
        case 3:
          this.y += 50;
          break;
      }
    }

    function ticker () {
      Crafty.trigger("moving");
    }

    // GAMEPLAY

    var movingTimer = setInterval(ticker, 250);
};
