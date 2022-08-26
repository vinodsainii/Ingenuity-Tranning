

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