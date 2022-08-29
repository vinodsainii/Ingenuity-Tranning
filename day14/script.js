const API_URL = "https://api.covid19api.com/summary";
var out;
async function getApiData(url) {
    var data = await fetch(url);
    var res =  await data.json();
    out=res["Countries"];
    entry(out);
    printdata(out);    
}
getApiData(API_URL)
var cn=document.getElementById("cn");
var dt=document.getElementById("da");
var tc=document.getElementById("tc");
var td=document.getElementById("td");
var nc=document.getElementById("nc");
var nd=document.getElementById("nd");
function entry(res)
{
    for(var i=0;i<res.length;i++)
    {    
    var ne=document.createElement("option");
    ne.innerText=res[i].Country;
    cn.appendChild(ne);
    }
}
function printdata(res){
    for(var i=0;i<res.length;i++)
    {    
        var e = document.getElementById("cn");
        var text = e.options[e.selectedIndex].text;
        if(res[i].Country==text)
        {         
            console.log(text)
    d = new Date(res[i].Date);
    var year = d.getFullYear();
    var month = d.getMonth()+1;
    var day = d.getDate();
    var final=day+"/"+month+"/"+year;
    dt.innerText=" "+final;
    tc.innerText=" "+res[i].TotalConfirmed;
    td.innerText=" "+res[i].TotalDeaths;
    nc.innerText=" "+res[i].NewConfirmed;
    nd.innerText=" "+res[i].NewDeaths;
    }
    }   
}
 cn.onclick= function(){
    var da=out;
    printdata(da);
 }



// ...............................................................for canves...........................................................

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var image = document.getElementById("source");

const player = {
  w: 50,
  h: 50,
  x: 200,
  y: 80,
  size:5,
  dx: 4,
  dy: 4,
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