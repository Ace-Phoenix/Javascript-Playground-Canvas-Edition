var canvas = document.getElementById("myCanvas");
// ^^^ {id: "myCanvas", width: 400, height: 200} made from the html
var context = canvas.getContext("2d");

//var controler = setInterval(circleFunctionNoClear, 100);

// function for inside the inside function
function circleFunctionNoClear(){
  var rad = Math.floor(Math.random() * 50);
  var maxX = canvas.width - (rad * 2);
  var maxY = canvas.height - (rad * 2);
  var xVal = Math.floor(Math.random() * maxX) + rad;
  var yVal = Math.floor(Math.random() * maxY) + rad;
  context.beginPath();
  context.arc(xVal, yVal, rad, 0, 2 * Math.PI);
  context.stroke();
}

function squareFunctionNoClear(){
  var width = Math.floor(Math.random() * 100);
  var maxX = canvas.width - (width);
  var maxY = canvas.height - (width);
  var xVal = Math.floor(Math.random() * maxX);
  var yVal = Math.floor(Math.random() * maxY);
  context.beginPath();
  context.rect(xVal, yVal, width, width);
  context.stroke();
}


// fancy loop getaround for animating
function circles(){
  var interval = setInterval(step, 100);
  var counter = 0;

  function step(){ // this is within the circles namespace
    if ((counter % 20) == 0) {
      context.clearRect(0, 0, canvas.width, canvas.height);
    }
    if ((counter % 2) == 0){
      circleFunctionNoClear();
    }
    else {
      squareFunctionNoClear();
    }
    counter ++;
  }
}

circles();
