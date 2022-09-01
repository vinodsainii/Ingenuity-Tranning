

var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");


canvas.width = innerWidth
canvas.height = innerHeight

class Player {
    constructor(){

      

      this.velocity={
        x:0,
        y:0
      }
      this.rotation =0  //for ratation

      // for geting image 
      const image=new Image()
      image.src="./spaceship.png"
      image.onload =()=>{
        const scale=0.15;
        this.image=image
        this.width=image.width *scale
        this.height=image.height *scale

        // for image position
        this.position={
        x: canvas.width/2 -this.width/2,
        y:canvas.height-this.height-20
      }
      }

      
    }
    draw(){

      ctx.save()  //for rotation
      ctx.translate( 
        player.position.x + player.width/2,  //for rotation ofhalf of height and width
        player.position.y + player.height/2
        )
      ctx.rotate(this.rotation)

      ctx.translate( 
        -player.position.x - player.width/2,  //for rotation ofhalf of height and width
        -player.position.y - player.height/2
        )

      if(this.image)
      ctx.drawImage(this.image, this.position.x, this.position.y, this.width,this.height)
      ctx.restore()    //for restore to position of image
    }
    

    update(){
      if(this.image){
      this.draw()
      this.position.x +=this.velocity.x
      }
    }

}

//..............draw target...............
class Target {
  constructor(){
    this.velocity={
      x:0,
      y:0
    }
    

    // for geting image 
    const image=new Image()
    image.src="./kl.png"
    image.onload =()=>{
      const scale=0.05;   //size of image
      this.image=image
      this.width=image.width *scale
      this.height=image.height *scale

      // for image position
      this.position={
      x: canvas.width/2 -this.width/2,
      y:canvas.height/8
    }
    }
  }
  draw(){
    ctx.drawImage(this.image, this.position.x, this.position.y, this.width,this.height)
    
  }
  
  update(){
    if(this.image){
    this.draw()
    this.position.x +=this.velocity.x
    this.position.y +=this.velocity.y
    }
  }

}





// ..................create bullets ............

class projectile{
  constructor({position,velocity}){
    this.position =position
    this.velocity =velocity

    this.radius=3
  }

  draw(){
    ctx.beginPath()
    ctx.arc(this.position.x,this.position.y,this.radius, 0 , Math.PI*2)
    ctx.fillStyle ="red"
    ctx.fill()
    ctx.closePath()
  }
  update(){
    this.draw()
    this.position.x +=this.velocity.x
    this.position.y +=this.velocity.y

  }
}

// ......................



// for show image on screen 
const player=new Player()
const projectiles= []    //for Bullets
const target= new Target()  //for target
const keys ={
  a:{
    pressed:false
  },
  d: {
    pressed:false
  },
  space:{
    pressed:false
  }
}


function animate() {
  requestAnimationFrame(animate)
  ctx.fillStyle = 'black'   //clear the image
  ctx.fillRect(0,0,canvas.width,canvas.height)  //for background color
  player.update() // call player
  target.update() //call target
  projectiles.forEach(projectile =>{
    
    projectile.update()
  })
  //for giving velocity by key
  if(keys.a.pressed && player.position.x >=0){
    player.velocity.x =-7 
    player.rotation=-0.15
  }
  else if (keys.d.pressed && player.position.x +player.width<=canvas.width){
    player.velocity.x =7 
    player.rotation=0.15
  }
  else{
    player.velocity.x =0 
    player.rotation=0
  }
}
animate()

// for key press and move object
addEventListener("keydown",({key})=>{
  console.log(key)
  switch(key){
    case 'a':
      console.log("left")
        //for giving velocity by key
      keys.a.pressed=true
      break
    case 'd':
      console.log("right")
      keys.d.pressed=true
      break  
      case ' ':
        console.log("space")
        projectiles.push(
          new projectile({        //for bullets image
            position:{
              x:player.position.x+ player.width/2,
              y:player.position.y
            },
            velocity:{
              x:0,
              y:-10
            }
          })
        )
        break 
  }
})
//by key press and stop object
addEventListener("keyup",({key})=>{
  console.log(key)
  switch(key){
    case 'a':
      console.log("left")
        //for giving velocity by key
      keys.a.pressed=false
      break
    case 'd':
      console.log("right")
      keys.d.pressed=false
      break  
      case ' ':
        console.log("space")
        break 
  }
})

