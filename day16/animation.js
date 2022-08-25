var canves =document.getElementById("can");
const ctx=canves.getContext("2d");

// animation
var circle={
    x:200,y:200,size:50,dx:5,dy:5,
};

// draw circle

function drawCircle() {
    ctx.beginPath();
    ctx.arc(circle.x, circle.y, circle.size, 0, 2*Math.PI);
    ctx.fillStyle="orange";
    ctx.fill();
    
}

function update(){
    ctx.clearRect(0,0,canves.width,canves.height)
    drawCircle();
    circle.x += circle.dx;
    circle.y += circle.dy;

if(circle.x + circle.size > canves.width || circle.x - circle.size<0)
    {
        circle.dx *=-1;
    }

if(circle.y + circle.size > canves.height || circle.y - circle.size<0)
    {
    circle.dy *=-1;
   }

    requestAnimationFrame(update);
    console.log(123);
}
update();