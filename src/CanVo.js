(function(global){

    // Private variables for ONLY this IIFE context.
    var canvas, ctx;
    var colSize, rowSize;
    var cols, rows;

    var CanVo = function(id, width, height) {
        canvas = document.getElementById(id);
        ctx = canvas.getContext('2d');

        this.setCanvasDim(width, height);

        // Public variables and initializers
        this.width = canvas.width;
        this.height = canvas.height;

        cols = rows = colSize = rowSize = null;

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

        paintCircle: function(x, y, diameter, color ) {
            ctx.beginPath();
            ctx.fillStyle = color;
            ctx.arc(x, y, diameter / 2, 0, Math.PI * 2);
            ctx.fill();
        },
        setGridSize: function(columnCount, rowCount) {
            if(Number(columnCount) && columnCount > 0 && columnCount < canvas.width) {
                colSize = this.width / columnCount;
                cols = columnCount;
            } else {
                throw RangeError(columnCount + " is not valid.");
            }
            if(Number(rowCount) && rowCount > 0 && rowCount < canvas.height) {
                rowSize = this.height / rowCount;
                rows = rowCount;
            } else {
                throw RangeError(rowCount + " is not valid.");
            }
        },

        // These methods are added to make canvas and context private.
        getCanvasElement: function() {
            return canvas;
        },
        getCanvasContext: function() {
            return ctx;
        },

        // Return of Private variables
        colSize: function() { return colSize },
        rowSize: function() { return rowSize },
        cols: function() { return cols },
        rows: function() { return rows }
    };

    global.CanVo = CanVo;

})(window);
