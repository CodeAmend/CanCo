/**
 * Created by codeamend on 1/30/17.
 */

var board = new CanVo("canvas_id", 400, 200);
board.paintBackground("gray");

var Walker = {
    x: board.width / 2,
    y: board.height / 2,
    diameter: 5,
    stride: 10,
    color: "white",
    move: function() {
        // Random number only -1 0 or 1
        var moveX = Math.floor(Math.random() * 3) - 1;
        var moveY = Math.floor(Math.random() * 3) - 1;
        // stride * movement = negative zero or positive.
        this.x += (this.stride  * moveY);
        this.y += (this.stride  * moveX);
    },
    draw: function() {
        board.paintCircle(this.x, this.y, this.diameter, "white");
    }

};

walker = Walker;
walker.draw();