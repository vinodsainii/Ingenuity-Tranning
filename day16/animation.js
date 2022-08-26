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









var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var image = document.getElementById("source");
const player = {
  w: 30,
  h: 30,
  x: 100,
  y: 80,
  speed: 5,
  dx: 10,
  dy: 5,
};

function drawPlayer() {
  ctx.drawImage(image, player.x, player.y, player.w, player.h);
}

// function clear() {
//   ctx.clearRect(0, 0, canvas.width, canvas.height);
// }

function newPos() {
  ctx.clearRect(0,0,canvas.width,canvas.height)
  drawPlayer();
  player.x += player.dx;
  player.y += player.dy;
  

  if(image.x + image.size > image.width || image.x - image.size<0)
    {
        image.dx *=-1 ;
    }

if(image.y + image.size > image.height || image.y - image.size<0)
    {
    image.dy *=-1;
   }

    requestAnimationFrame(newPos);
    console.log(123);

}
newPos();











//...... for circle.........................

var canves =document.getElementById("can");
const ctx=canves.getContext("2d");


// animation
var circle={
    x:100,y:80,size:5,dx:10,dy:5,
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
        circle.dx *=-1 ;
    }

if(circle.y + circle.size > canves.height || circle.y - circle.size<0)
    {
    circle.dy *=-1;
   }

    requestAnimationFrame(update);
    console.log(123);
}
update();




// .............for image ......................

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var image = document.getElementById("source");
const player = {
  w: 30,
  h: 30,
  x: 200,
  y: 80,
  size:5,
  dx: 5,
  dy: 5,
};

function drawplayer() {
  ctx.drawImage(image, player.x, player.y, player.w, player.h);
}

// function clear() {
//   ctx.clearRect(0, 0, canvas.width, canvas.height);
// }

function newPos() {
  ctx.clearRect(0,0,canvas.width,canvas.height)
  drawplayer();
  player.x += player.dx;
  player.y += player.dy;
  
  if(player.x +player.size > canvas.width || player.x - player.size<0)
    {
        player.dx *=-1 ;
    }

if(player.y + player.size > canvas.height || player.y - player.size<0)
    {
    player.dy *=-1;
   }

    requestAnimationFrame(newPos);
    console.log(123);

}
newPos();