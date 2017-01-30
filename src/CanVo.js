(function(global){

    // Private variables for ONLY this IIFE context.
    var canvas, ctx;

    var CanVo = function(id, width, height) {
        canvas = document.getElementById(id);
        ctx = canvas.getContext('2d');
        this.setCanvasDim(width, height);
    };

    CanVo.prototype =  {
        paintBackground: function(color) {
            ctx.fillStyle = color;
            ctx.fillRect(0, 0, canvas.width, canvas.height)
        },
        setCanvasDim: function(width, height) {
            canvas.width = width;
            canvas.height = height;
            return this;
        }
    };

    global.CanVo = CanVo;

})(window);
