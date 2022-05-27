function gameLoop(timeStamp) {
    // Update game objects in the loop
    update();
    draw();
    window.requestAnimationFrame(gameLoop);
}
function update() {
    rectX += 1;
    rectY += 1;
}
function draw(){
    context.clearRect(0, 0, canvas.width, canvas.height);

    context.fillStyle = '#ff8080';
    context.fillRect(rectX, rectY, 150, 100);
}
function drawCircle(x,y){
    context.beginPath();
    context.strokeStyle = '#0099b0';
    context.arc(x, y, 50, 0, 2 * Math.PI);
    context.fillStyle = '#0099b0';
    context.fill();
    context.closePath();
}
function init(){
    // Get a reference to the canvas
    canvas = document.getElementById('canvas');
    context = canvas.getContext('2d');

    draw();
    drawCircle(600,200);
    //window.requestAnimationFrame(gameLoop);
}
"use strict";
let canvas;
let context;
let rectX = 0;
let rectY = 0;
window.onload = init;
