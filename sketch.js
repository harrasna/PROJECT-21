var bullet, wall

var speed, weight, thickness


function setup() {
  createCanvas(1600,400);
  

  bullet = creatSprites(50,200,50,5);
  bullet.shapecolor = ("white");
  bullet.velocityX=speed;
  bullet.weight = weight;

  wall = createSprites(1200,200,thickness,height/2);
  wall.shapecolor = color(80,80,80);



  speed = random(223,321);
  weight = random(30,52);
  thickness = random(23,83);



}

function draw() {
  background(255,255,255); 
  
  if(hasCollided(bullet,wall)){
    bullet.velocityX=0;

    var damage = 0.5*weight*speed*speed/(thickness*thickness*thickness);
    if(damage>10){
      wall.shapecolor =color(255,0,0);

    }
    if(damage <10){
      wall.shapeColor = color(0,255,0);
    }
  }

  drawSprites();
}

function hasCollided(Lbullet, Lwall){
  bulletRightEdge =Lbullet.x +Lbullet.width;
  wallLeftEdge = Lwall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true;
  }
  return false;
}