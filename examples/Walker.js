/**
 * Created by codeamend on 1/30/17.
 */

var board = new CanVo("canvas_id", 600, 400);
board.paintBackground("gray");

// stride perhaps should not be on Walker, instead ConVo should create a grid.
// Todo: Find a way to use ConVo to auto create a grid system.

var Walker = {
    x: board.width / 2,
    y: board.height / 2,
    diameter: 4,
    stride: 5,
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

var walker = Walker;
function start() {
    var framesPerSecond = 30;
    setInterval(update, 1000 / framesPerSecond);
}
function update() {
    walker.draw();
    walker.move();
};

start();