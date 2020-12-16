var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");

var x = myCanvas.width / 20; //These 2 variables determine the starting circles location, in this case, the top right of the screen.
var y = myCanvas.height / 20;

var dx = 10; //These variables will be used later to change the position of the circle.
var dy = 10; //Changing both of these numbers will also change the speed of the circle (in other words, how many units the circle moves per frame).

var gravity = 0.2; //Sets the gravity pulling the ball to the ground.
var damping = 0.9; //The rate at which the ball slows down.
var traction = 0.8; //Will make the ball stop.

var ballSize = 20; //Sets the circle's radius.

function drawCircle() {
  ctx.beginPath();
  ctx.arc(x, y, ballSize, 0, Math.PI*2); //The circle, on frame one, will always start in the middle, and its size will always be set to ballSize.
  ctx.fillStyle = "#0095DD"; //Sets the color of the circle to light blue.
  ctx.fill(); //Fills in the circle with the color provided in fillStyle.
  ctx.stroke();
}

function draw() {
  ctx.clearRect(0, 0, myCanvas.width, myCanvas.height); //Clears the canvas every frame, so a new circle can be drawn.
  drawCircle();

  if(x + dx > myCanvas.width - ballSize || x + dx < ballSize) { //If the circle's x position exceeds the width of the canvas...
    dx = -dx * damping; //Its x direction will be flipped, and it's speed will decrease.
  }

  if(y + dy > myCanvas.height - ballSize || y + dy < ballSize) { //If the circle's y position exceeds the height of the canvas...
    dy = -dy * damping; //Its y direction will be flipped, and it's speed will decrease.
    x *= tracton;
  }

  dy += gravity;

  x += dx;
  y += dy;
}

setInterval(draw, 10);
