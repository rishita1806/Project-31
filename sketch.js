var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score = 0;
var bg;

var particles = [];
var plinkos = [];
var divisions = [];

function preload(){
  bg = loadImage("background.jpg");
}

function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(width/2,height,width,20);

  for (var k = 0; k <=width; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var j = 75; j <=width; j=j+50) { 
    plinkos.push(new Plinko(j,75));
  }

  for (var j = 50; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,175));
  }

  for (var j = 75; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,275));
  }
  
  for (var j = 50; j <=width-10; j=j+50) 
  {
    plinkos.push(new Plinko(j,375));
  }

}
 
function draw() {
  background(bg);

  textSize(20)
 
  Engine.update(engine);
  ground.display();

  if(frameCount%60 === 0){
    particles.push(new Particle(random(width/2-10 , width/2+10,),10, 15));
  }

  for (var i = 0; i < plinkos.length; i++) {
    plinkos[i].display();   
  }

  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }

for (var o = 0; o < particles.length; o++){
  particles[o].display();
}

}