var bullet,bullet2,bullet3,bullet4,wall,thickness;
var rect1,rect2,rect3,rect4;
var g1,g2,g3,g4;
var speed,s,p,t,weight;

function setup() {
  createCanvas(1000,400);

 wall=createSprite(600,200,20,400);
 bullet=createSprite(100,90,30,30);
 bullet2=createSprite(100,150,30,30);
 bullet3=createSprite(100,200,30,30);
 bullet4=createSprite(100,280,30,30);
 rect1=createSprite(50,50,2000,5);
 rect2=createSprite(50,125,2000,5);
 rect3=createSprite(50,225,2000,5);
 rect4=createSprite(50,325,2000,5);
 g1=createSprite(50,87,60,50);
 g2=createSprite(50,150,50,30);
 g3=createSprite(50,200,50,30);
 g4=createSprite(50,280,60,50);


 //random 
  speed=random(223,321);
  s=random(230,340);
  t=random(235,330);
  p=random(240,335);
  
  weight=random(30,52);
  thickness=random(23,82); 

  wall.shapeColor = color (80,80,80);

  //velocity 
bullet.velocityX=speed;
bullet2.velocityX=s;
bullet3.velocityX=t;
bullet4.velocityX=p;
}

function draw() {
  background(80,80,80);

//shape color
bullet.shapeColor="yellow";
bullet2.shapeColor="blue";
bullet3.shapeColor="orange";
bullet4.shapeColor="pink";
g1.shapeColor=("red");
g2.shapeColor=("yellow");
g3.shapeColor=("yellow");
g4.shapeColor=("red");


if(hasCollided(bullet,wall)) {
  var damage = 0.5 * weight * speed * speed / (thickness * thickness * thickness); 

if(damage>10) {
  bullet = "green";
  bullet2="red";
  bullet3="cyan";
  bullet4="magenta";
  bullet.velocityX=0;
  bullet2.velocityX=0;
  bullet3.velocityX=0;
  bullet4.velocityX=0;

}
if(damage<10) { 
  bullet = "cyan";
  bullet2="megenta";
  bullet3="red";
  bullet4="green";
  bullet.velocityX=0;
  bullet2.velocityX=0;
  bullet3.velocityX=0;
  bullet4.velocityX=0;
}
}
drawSprites();
}

function hasCollided(bullet,wall) {
  bulletRightEdge=bullet.x + bullet.width ; 
  wallLeftEdge = wall.x;
  if(bulletRightEdge>=wallLeftEdge) {
    return true ; 
  }
return false ; 
}
