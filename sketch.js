const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var ground;

function setup() {
  createCanvas(480,800);
  //createSprite(400, 200, 50, 50);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(240,700,200,10);
  World.add(world,ground);
}

function draw() {
  background(0);  

  Engine.update(engine);

  ground.display();

  drawSprites();
}