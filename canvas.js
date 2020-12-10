
var c = document.getElementById("canvas");
var ctx = c.getContext("2d");
//
//setInterval(function(){
//ctx.beginPath() ;
//var pos = {x:Math.floor(Math.random()*400), y:Math.floor(Math.random()*300), r:Math.floor(Math.random()*90)+4};
//if ((pos.x-pos.r) < 0) {
//    pos.x+=pos.r;
//}
//else if ((pos.x+pos.r) > 400) {
//    pos.x-=pos.r;
//}
//if ((pos.y-pos.r) < 0) {
//    pos.y += pos.r;
//}
//else if ((pos.y + pos.r) > 300) {
//    pos.y-=pos.r;
//}
//var loops = ["circle", "rect"];
//for (var i = 0; i < 100; i++) {
//    var rand = Math.floor(Math.random()*2);
//    var t = loops[rand];
//}
//var asseter = new Asset(t, {x:pos.x, y:pos.y}, pos.r, Math.floor(Math.random()*10)+2);
//asseter.draw();
//}, 100);
setInterval(function(){ctx.clearRect(0,0,400, 400);},20);



class Asset {
    constructor(type,center, num1, num2, direction){
        this.num1 = num1;
        this.num2 = num2;
        this.type = type.toLowerCase();
        this.center = center;
        this.direction = direction;
        }
    draw(){
    if (this.type == "circle") {
        ctx.beginPath();
        ctx.arc(this.center.x, this.center.y, this.num1,0, this.num2*Math.PI);
        ctx.stroke();
    }
    else if (this.type == "rect") {
        ctx.beginPath();
     ctx.rect(this.center.x - (this.num1/2), this.center.y - (this.num2/2),this.num1,this.num2);
     ctx.stroke();
    }

    }
}
var bouncyBall = new Asset("circle", {x:20,y:20}, 10, 5, "south-east");
function bouncyBouncy() {
    setInterval(bouncy, 10);
    function bouncy() {
        if ((bouncyBall.center.x + bouncyBall.num1) == c.width) {
            bouncyBall = new Asset("Circle", bouncyBall.center, bouncyBall.num1, bouncyBall.num2, "north-west");
        }else if (bouncyBall.direction == "north-east") {
            bouncyBall = new Asset("Circle", {x:bouncyBall.center.x+1,y:bouncyBall.center.y-1},bouncyBall.num1, bouncyBall.num2, "north-east");
        }
        if ((bouncyBall.center.y - bouncyBall.num1) == 0) {
            bouncyBall = new Asset("Circle", bouncyBall.center, bouncyBall.num1, bouncyBall.num2, "south-west");
        }else if (bouncyBall.direction == "south-east") {
                       bouncyBall = new Asset("Circle", {x:bouncyBall.center.x+1, y:bouncyBall.center.y+1}, bouncyBall.num1, bouncyBall.num2, "south-east");
        }
        if ((bouncyBall.center.x - bouncyBall.num1) <= 0) {
            bouncyBall = new Asset("Circle", bouncyBall.center, bouncyBall.num1, bouncyBall.num2, "south-east");
        }else if (bouncyBall.direction == "north-west") {
            bouncyBall = new Asset("Circle", {x:bouncyBall.center.x-1, y:bouncyBall.center.y-1}, bouncyBall.num1, bouncyBall.num2, "north-west");
        }
        if ((bouncyBall.center.y - bouncyBall.num1) == c.height) {
            bouncyBall = new Asset("Circle", bouncyBall.center, bouncyBall.num1, bouncyBall.num2, "north-east");
        }else if (bouncyBall.direction == "south-west") {//down right
                    bouncyBall = new Asset("Circle", {x:bouncyBall.center.x-1, y:bouncyBall.center.y+1}, bouncyBall.num1, bouncyBall.num2, "south-west");
}
        bouncyBall.draw();
    }
}

bouncyBouncy();
// im going to have you guys figure out how to make the circle work with corners because currently it has
//sad when it gets to a corner also this shows when i changed the canvas to 400 400 so ge to it i guess


//few questions to answer because i want to know if you all know how my class works there are three questions just
//make another space put your name and then your answer

/*
//Question One : How does the Asset class work? (MC)
//a. it doesn't
//b. it only makes parameters for an object
//c. it makes the parameters and draws the object
//d. none of the above

*/

//Question Two : What is the width of the canvas i use and how do you change it
//


//Question Three : Do you understand my code or do I have to explain all of it? (y/n/m)
//Yes?
//No?
//Maybe?//Maybe will need to be explained



//These question are just so that i know that all of you know how my code works so far to make and draw objects
//and with easy access to remove the object when you need to and update and change it when needed :)
