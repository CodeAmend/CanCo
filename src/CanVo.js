(function(global){

var CanVo = function(id) {
    this.canvas = document.getElementById(id);
    this.ctx = this.canvas.getContext('2d');
    
}

CanVo.prototype =  {
    paintBackground: function(color) {
        this.ctx.fillStyle = color;
        this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height)
    }
}

global.CanVo = CanVo;

})(window);
