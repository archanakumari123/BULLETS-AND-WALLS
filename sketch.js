var bullet, wall;
var speed, weight;
var thickness;
function setup() {
  createCanvas(1600, 400);
  bullet= createSprite(50, 200, 50,10)
  bullet.shapeColor="white";
  speed = random(223,321)
  weight = random(30,52)
  wall = createSprite(1250, 203, thickness, height / 2)
  bullet.velocityX = speed;
  thickness =random(22,83);
  wall.shapeColor=(80,80,80)
}


function draw() {
  background(0, 0, 0);
  if(hasCollided(bulled,wall))
  {
    bullet.velocityX=0
    var damage=0.5 *weight* speed * speed /(thickness *thickness* thickness)

    if (damage >10)
    {
      wall.shapeColour = colour (255 ,0,0)
    }
    

    if (damage<10)
    {
      wall.shapeColour =colour (0,255,0)
    }




  }


  drawSprites();

}
function hasCollided (lbullet,lwall)
{
  bulletRigthEdge  =lbullet.x +lbullet .width;
  wallLeftEdge= lwall .x;
  if (bulletRightEdge>=wallLeftEdge);
  {
    return true ;
  } 
  return false;
}