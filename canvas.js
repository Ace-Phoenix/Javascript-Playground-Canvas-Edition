
var c = document.getElementById("canvas");
var ctx = c.getContext("2d");

setInterval(function(){
ctx.beginPath() ;
var pos = {x:Math.floor(Math.random()*400), y:Math.floor(Math.random()*300), r:Math.floor(Math.random()*90)+4};
if ((pos.x-pos.r) < 0) {
    pos.x+=pos.r;
}
else if ((pos.x+pos.r) > 400) {
    pos.x-=pos.r;
}
if ((pos.y-pos.r) < 0) {
    pos.y += pos.r;
}
else if ((pos.y + pos.r) > 300) {
    pos.y-=pos.r;
}
var loops = ["circle", "rect"];
for (var i = 0; i < 100; i++) {
    var rand = Math.floor(Math.random()*2);
    var t = loops[rand];
}
var asseter = new Asset(t, {x:pos.x, y:pos.y}, pos.r, Math.floor(Math.random()*10)+2);
asseter.draw();
}, 100);
setInterval(function(){ctx.clearRect(0,0,400, 300);},2000);



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
var bouncyBall = new Asset("circle", {x:10,y:10}, 10, 5, "south-east");
function bouncyBouncy() {
    setInterval(bouncy, 100);
    function bouncy() {
        if ((bouncyBall.center.y + bouncyBall.num1) == c.height) {
            bouncyBall = new Asset("Circle", bouncyBall.center, bouncyBall.num1, bouncyBall.num2, "north-east");
        }
        if ((bouncyBall.center.y - bouncyBall.num1) == 0) {
            bouncyBall = new Asset("Circle", bouncyBall.center, bouncyBall.num1, bouncyBall.num2, "south-west");
        }
        if ((bouncyBall.center.x + bouncyBall.num1) == c.width) {
            bouncyBall = new Asset("Circle", bouncyBall.center, bouncyBall.num1, bouncyBall.num2, "north-west");
        }
        if ((bouncyBall.center.x - bouncyBall.num1) == 0) {
            bouncyBall = new Asset("Circle", bouncyBall.center, bouncyBall.num1, bouncyBall.num2, "south-east");
        }
        if () {
            //code
        }
    }
}