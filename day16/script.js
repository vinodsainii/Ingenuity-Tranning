var canves =document.getElementById("can");
const ctx =canves.getContext("2d");

// canves.width=window.innerWidth;
ctx.fillStyle="red";
ctx.fillRect(50,50,150,100);


ctx.lineWidth="6";
ctx.fillStyle="green";
ctx.strokeRect(250,50,150,100);


ctx.fillStyle="blue";
ctx.roundRect(450,50,100,100,[10])
ctx.fill();

ctx.clearRect(0,0,canves.width,canves.height);
// ctx.font="30px Arial";
// ctx.fillStyle="green";

ctx.beginPath();
ctx.moveTo(50,50);
ctx.lineTo(150,50);
ctx.lineTo(100,200);
ctx.lineTo(50,50);
ctx.fillStyle="coral";
// ctx.stroke();
ctx.fill()

ctx.beginPath();
ctx.moveTo(200,50);
ctx.lineTo(150,200);
ctx.lineTo(250,200);
ctx.closePath()
// ctx.fillStyle="gray";
ctx.stroke();
// ctx.fill()


ctx.beginPath();
ctx.rect(300,50,150,100);
ctx.fillStyle="orange";
ctx.fill(); 

ctx.beginPath();
ctx.fillStyle="orange";
ctx.arc(300,300,100,0,Math.PI*2);
// ctx.stroke();
ctx.fill();

// radian=(Math.PI)*2;--.full circle
// radin=(math.PI)-->half circle


