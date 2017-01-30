(function(global){

    var CanVo = function(id, width, height) {
        this.canvas = document.getElementById(id);
        this.ctx = this.canvas.getContext('2d');
        this.setCanvasDim(width, height);
    }

    CanVo.prototype =  {
        paintBackground: function(color) {
            this.ctx.fillStyle = color;
            this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height)
        },
        setCanvasDim: function(width, height) {
            this.canvas.width = width;
            this.canvas.height = height;
            return this;
        }
    }

    global.CanVo = CanVo;

})(window);
