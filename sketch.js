var Tower,towerImage
var doors,doorGroup,doorImage
var climber,climberGroup,climberImage
var ghost,ghostImage
var stone,stoneGroup
function preload(){
  towerImage=loadImage("tower.png")
  doorImage=loadImage("door.png")
  climberImage=loadImage("climber.png")
  ghostImage=loadImage("ghost-standing.png")
  
}
function setup(){
createCanvas(400,400)
  Tower=createSprite(200,200)
  Tower.addImage(towerImage)
  Tower.velocityY=3;
  doorGroup=new Group()
climberGroup=new Group()  
  ghost=createSprite(200,200,20,20)
  ghost.scale=0.5
  ghost.addImage(ghostImage)
  stoneGroup= new Group()
  
}
function spawnDoors(){
  if(frameCount%100===0){
     door=createSprite(200,-50)
    door.addImage(doorImage)
    door.x=Math.round(random(100,300))
  door.velocityY=3;
    door.lifetime=134;
    doorGroup.add(door)
    climber=createSprite(200,10)
    climber.addImage(climberImage)
    climber.x=door.x
    climber.velocityY=door.velocityY
    climber.lifetime=134;
    climberGroup.add(climber)
    ghost.depth=door.depth
    ghost.depth=ghost.depth+1
    stone=createSprite(200,20,50,10)
    stone.x=door.x
    stone.velocityY=door.velocityY
    stoneGroup.add(stone)
  }
  
}
function draw (){
  background("white");
  if(Tower.y>400){
     Tower.y=200
     }
  spawnDoors()
  if(keyDown("left_arrow")){
     ghost.x=ghost.x-3
     }
  if(keyDown("right_arrow")){
     ghost.x=ghost.x+3
     }
  
  if(keyDown("space")){
     ghost.velocityY=-10;
     }
  ghost.velocityY=ghost.velocityY+0.8;
  if(climberGroup.isTouching(ghost)){
     ghost.velocityY=0
     }
  if(stoneGroup.isTouching(ghost)){
     ghost.velocityY=0
    text("Game Over",200,200);
    tower.velocityY=0
     }
  drawSprites();
}

