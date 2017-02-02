/**
 * Created by codeamend on 1/30/17.
 */

var html = document.getElementsByTagName('html')[0];
var board = new CanVo("canvas_id", html.clientWidth, html.clientHeight);

window.addEventListener('resize', function(e) {
    board.setCanvasDim(html.clientWidth, html.clientHeight);
    walker.position = board.getCenterOfCanvas();
});

var Walker = {
    // centerOfCanvas: a PVector created by half of width and height.
    position: board.getCenterOfCanvas(),
    diameter: 5,
    stride: 6,
    color: "white",

    move: function() {
        randDir(this);
    },

    draw: function() {
        board.paintCircle(this.position.x, this.position.y, this.diameter, this.color);
    }

};

function randDir(walkerObject) {
    walkerObject.position.addFunction(
        function(item) {
           var dir = Math.floor(Math.random() * 3) - 1;
           return item + walkerObject.stride * dir;
        }.bind(walkerObject)
    )
}

var walker = Walker;


function start() {
    var framesPerSecond = 60;
    setInterval(update, 1000 / framesPerSecond);
}
function update() {

    walker.draw();
    walker.move();

}

start();