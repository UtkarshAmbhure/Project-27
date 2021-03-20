
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world
var bob,rope,roof


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	




	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  rope.display();
  roof.display();
  bob.display();

  
  drawSprites();
 
}



