var path,surfer,surferImg,edges
var pathImage

function preload(){
pathImage=loadImage("path.png")
surferImg=loadAnimation("Runner-1.png","Runner-2.png")

}

function setup(){
  createCanvas(400,400);
  path=createSprite(200,200,400,400);
path.addImage(pathImage)
path.velocityY=4
surfer=createSprite(200,300,10,20)
surfer.addAnimation("boy",surferImg)
surfer.scale=0.1
edges=createEdgeSprites()
b1=createSprite(0,0,200,800)
b1.visible=false
}




function draw() {
  background(0);
console.log(path.y)
if (path.y > 400){
  path.y=path.height/4
}
surfer.collide(edges[3])







surfer.x=World.mouseX
drawSprites()














}
