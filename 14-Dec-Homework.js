var c = document.getElementById("myCanvas");
var ctx = c.getContext("2d");
var rl = document.getElementById("rainbowLines");
var rb = document.getElementById("rainbowBall");
/*
var x = c.width / 20; //These 2 variables determine the starting circles location, in this case, the top left of the screen.
var y = c.height / 20;

var dx = 2; //These variables will be used later to change the position of the circle.
var dy = 4; //Changing both of these numbers will also change the speed of the circle (in other words, how many units the circle moves per frame).

var size = (Math.abs(c.width - c.height)) / 10;
if (size == 0) { size = 25; }
var ballSize = Math.floor(Math.random() * size - 5) + 6; //Sets the circle's radius.
*/
var size = (Math.abs(c.width - c.height)) / 10;
if (size == 0) { size = 25; };
var one = Math.floor(Math.random()*13)+2;
var two = Math.floor(Math.random()*11)+4;
var ball = {x:c.width / 20, y:c.height / 20, dx:one, dy:two, ballSize:Math.floor(Math.random() * size - 5) + 6};

function drawCircle() {
 var colors = ["red", "green", "blue", "violet", "pink", "cyan", "yellow", "orange"];
   var rainbow = rb.checked;
 ctx.beginPath();
 ctx.arc(ball.x, ball.y, ball.ballSize, 0, Math.PI*2); //The circle, on frame one, will always start at the top left, and its size will always be set to ballSize.
   if (rainbow == true) {
    //code
  for (var j = 0; j< 10; j++) {
    var color = colors[Math.floor(Math.random()*colors.length)];
  }
  ctx.fillStyle = color;
  }else{
   ctx.fillStyle = "#0095DD"; //Sets the color of the circle to light blue.
  }

 ctx.fill(); //Fills in the circle with the color provided in fillStyle.
 ctx.stroke();
}
  var lines = [{x:ball.x,y:ball.y}];

function lineDraw() {
  ctx.beginPath();
  var rainbow = rl.checked;
  var colors = ["red", "green", "blue", "violet", "pink", "cyan", "yellow", "orange"];
  for (var i = lines.length - 1; i >= 0; i--) {
  if (i == lines.length-1) {
    ctx.moveTo(ball.x,ball.y);
    ctx.lineTo(lines[i].x,lines[i].y);
  }
  else {
    ctx.moveTo(lines[i].x, lines[i].y);
    ctx.lineTo(lines[i+1].x,lines[i+1].y);

  }
  if (rainbow == true) {
    //code
  for (var j = 0; j< 10; j++) {
    var color = colors[Math.floor(Math.random()*colors.length)];
  }
  ctx.strokeStyle = color;
  }else{
  ctx.strokeStyle = "black";
  }
  }

  ctx.stroke();
}

function draw() {
 ctx.clearRect(0, 0, c.width, c.height); //Clears the canvas every frame, so a new circle can be drawn.
 lineDraw();
 drawCircle();
 if((ball.x + ball.dx > c.width - ball.ballSize) || (ball.x + ball.dx < ball.ballSize)) { //If the circle's x position exceeds the width of the canvas...
   ball.dx = -ball.dx; //Its x direction will be flipped.
   lines.push({x:ball.x,y:ball.y});
 }

 if((ball.y + ball.dy > c.height - ball.ballSize) || (ball.y + ball.dy < ball.ballSize)) { //If the circle's y position exceeds the height of the canvas...
   ball.dy = -ball.dy; //Its y direction will be flipped.
   lines.push({x:ball.x,y:ball.y});
 }

 ball.x += ball.dx;
 ball.y += ball.dy;
}

setInterval(draw, 25);
