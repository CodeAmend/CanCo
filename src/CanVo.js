(function(global){

    // Private variables for ONLY this IIFE context.
    var canvas, ctx;

    var CanVo = function(id, width, height) {
        canvas = document.getElementById(id);
        ctx = canvas.getContext('2d');

        this.setCanvasDim(width, height);

        // Public variables
        this.width = canvas.width;
        this.height = canvas.height;
    };

    CanVo.prototype =  {

        paintBackground: function(color) {
            ctx.fillStyle = color;
            ctx.fillRect(0, 0, canvas.width, canvas.height)
        },

        setCanvasDim: function(width, height) {
            // Keeps the update of public dimensions equal to canvas dimensions
            if(width > 0) this.width = canvas.width = width;
            if(height > 0) this.height = canvas.height = height;

            return this;
        },

        // These methods are added to make canvas and context private.
        getCanvasElement: function() {
            return canvas;
        },
        getCanvasContext: function() {
            return ctx;
        }
    };

    global.CanVo = CanVo;

})(window);
