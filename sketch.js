var robot;
var skulls;
var aliens;

function preload()
{
skulls = loadImage("img/1379343666592.jpg");
robot = loadImage("img/robot__by_darksidehk.jpg");
alien = loadImage("img/Loki Prime background.png");
}
function setup()
{
createCanvas(640,500);
background(100, 50, 40);
//image(skulls);
}
function draw()
{
image(skulls,0,0);
image(skulls,0,mouseY * -1);
if(mouseIsPressed)
{
  image(skulls, random(width), random (height),random(width), random (height) );
} else {
  image(robot, random(width), random (height),random(width), random (height) );
}

image(alien, random(width), random (height),random(width), random (height) );
}
