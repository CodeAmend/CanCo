/**
 * Created by codeamend on 1/30/17.
 */

var board = new CanVo("canvas_id", 600, 400);
board.paintBackground("red");

var centerOfCanvas = board.createPVector(board.width / 2, board.height / 2);


var Walker = {
    // centerOfCanvas: a PVector created by half of width and height.
    position: centerOfCanvas,
    diameter: 4,
    stride: 5,
    color: "white",
    move: function() {
        // Random number only -1 0 or 1
        var moveX = Math.floor(Math.random() * 3) - 1;
        var moveY = Math.floor(Math.random() * 3) - 1;
        // stride * movement = negative zero or positive.
        this.position.x += (this.stride  * moveY);
        this.position.y += (this.stride  * moveX);
    },
    draw: function() {
        board.paintCircle(this.position.x, this.position.y, this.diameter, "white");
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
}

start();