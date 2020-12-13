var bullet,wall,weight,speed,thickness;

function setup() {
  createCanvas(1600,400); 

speed = random(230,300);
weight = random(30,40);

thickness = random(30,80);

bullet = createSprite(100,200,50,5);
bullet.shapeColor = ("white");
bullet.velocityX=75;

wall = createSprite(1200,200,thickness,200);
wall.shapeColor = ("white");



}

function draw() {
  background("black");  

if(wall.x - bullet.x < (wall.width+bullet.width)/2){
var damage = (0.5 * speed * weight * speed) / (thickness*thickness*thickness);
bullet.velocityX = 0;
if(damage > 10){
    wall.shapeColor = ("red");
}
if(damage < 10){
    wall.shapeColor = ("green");
}

}

  drawSprites();
}