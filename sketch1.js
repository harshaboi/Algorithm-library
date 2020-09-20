var sprite1, sprite2;

function setup() {
  createCanvas(1200,800);
  sprite1 = createSprite(50, 400, 30, 80);
  sprite2 = createSprite(500,400,80,30);
  sprite1.shapeColor = "blue";
  sprite2.shapeColor = "red";

    sprite2.velocityX = -6;
    sprite1.velocityX = 3;
}

function draw() {
  background(255,255,255);
  

 
bounceOff(sprite1, sprite2);


  drawSprites();
}
