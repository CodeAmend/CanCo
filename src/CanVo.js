(function(global){

    // Private variables for ONLY this IIFE context.
    var canvas, ctx;
    var colSize, rowSize;
    var cols, rows;

    var CanVo = function(id, width, height) {
        canvas = document.getElementById(id);
        ctx = canvas.getContext('2d');

        this.setCanvasDim(width, height);
        this.setGridColsRows(width, height);

        // Public variables and initializers
        this.width = canvas.width;
        this.height = canvas.height;

    };

    CanVo.prototype =  {
        // Fills entire background of width and height
        paintBackground: function(color) {
            ctx.fillStyle = color;
            ctx.fillRect(0, 0, canvas.width, canvas.height)
        },

        // Changes the dimensions of entire canvas element.
        setCanvasDim: function(width, height) {
            // Keeps the update of public dimensions equal to canvas dimensions
            if(width > 0) this.width = canvas.width = width;
            if(height > 0) this.height = canvas.height = height;

            return this;
        },

        // An easier way to draw a circle by point, size and color.
        paintCircle: function(x, y, diameter, color ) {
            ctx.beginPath();
            ctx.fillStyle = color;
            ctx.arc(x, y, diameter / 2, 0, Math.PI * 2);
            ctx.fill();
        },

        // Users size of element and calculates grid size based off column and row count.
        setGridColsRows: function(columnCount, rowCount) {
            if(Number(columnCount) && columnCount > 0 && columnCount <= canvas.width) {
                colSize = this.width / columnCount;
                cols = columnCount;
            } else {
                throw RangeError(columnCount + " is not a valid col count.");
            }
            if(Number(rowCount) && rowCount > 0 && rowCount <= canvas.height) {
                rowSize = this.height / rowCount;
                rows = rowCount;
            } else {
                throw RangeError(rowCount + " is not valid row count.");
            }
        },

        // Create a simple Point Vector
        createPVector: function(x, y) {
            return new PVector(x, y)
        },

        getCenterOfCanvas: function() {
            var cx = this.width / 2;
            var cy = this.height / 2;
            return new PVector(cx, cy);
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

    function PVector(x, y) {
        this.x = x;
        this.y = y;
        this.add = function(pVector) {
            x = pVector.x + this.x;
            y = pVector.y + this.y;
            return new PVector(x, y);
        };
        this.equals = function(pVector) {
            return (pVector.x === this.x && pVector.y === this.y);
        };
    }

    global.CanVo = CanVo;

})(window);
