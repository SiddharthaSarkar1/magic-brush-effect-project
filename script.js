var myCanvas = document.getElementById("myCanvas");
var ctx = myCanvas.getContext("2d");
var img = new Image();

img.onload = function(){
    ctx.drawImage(img, 0, 0, myCanvas.width, myCanvas.height);
}
img.src = "before.jpg";

function performMagic(e){
    var brushPos = getBrush(e.clientX, e.clientY);
    if(e.buttons === 1){
        paint(brushPos.x, brushPos.y);
    }
}

function getBrush(x, y) {
    var canvasRect = myCanvas.getBoundingClientRect();
    return {
        x:Math.floor(
            ((x - canvasRect.left) / (canvasRect.right - canvasRect.left)) * myCanvas.width
        ),
        y:Math.floor(
            ((y - canvasRect.top) / (canvasRect.bottom - canvasRect.top)) * myCanvas.height
        ),
    }
}

function paint(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, 15, 0, 2 * Math.PI, true);
    ctx.globalCompositeOperation = "destination-out";
    ctx.fill();
}