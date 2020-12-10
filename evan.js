var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

var x = c.width / 20; //These 2 variables determine the starting circles location, in this case, the top right of the screen.
var y = c.height / 20;

var dx = 2; //These variables will be used later to change the position of the circle.
var dy = 4; //Changing both of these numbers will also change the speed of the circle (in other words, how many units the circle moves per frame).

var size = (Math.abs(c.width - c.height)) / 10;
if (size == 0) { size = 25; }
var ballSize = Math.floor(Math.random() * size - 5) + 6; //Sets the circle's radius.

function drawCircle() {
  ctx.beginPath();
  ctx.arc(x, y, ballSize, 0, Math.PI*2); //The circle, on frame one, will always start in the middle, and its size will always be set to ballSize.
  ctx.fillStyle = "#0095DD"; //Sets the color of the circle to light blue.
  ctx.fill(); //Fills in the circle with the color provided in fillStyle.
  ctx.stroke();
}

function draw() {
  var lines = [];
  ctx.clearRect(0, 0, c.width, c.height); //Clears the canvas every frame, so a new circle can be drawn.
  drawCircle();

  if(x + dx > myCanvas.width - ballSize || x + dx < ballSize) { //If the circle's x position exceeds the width of the canvas...
    dx = -dx; //Its x direction will be flipped.
  }

  if(y + dy > myCanvas.height - ballSize || y + dy < ballSize) { //If the circle's y position exceeds the height of the canvas...
    dy = -dy; //Its y direction will be flipped.
  }

  x += dx;
  y += dy;
}

setInterval(draw, 10);
