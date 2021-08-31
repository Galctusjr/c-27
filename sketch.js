const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var hammer;
var stone;
var rubber;
var ground;
var wall1, wall2, wall3

function setup() {
	createCanvas(600, 400);
    background("black")

	engine = Engine.create();
	world = engine.world;

	ground=new Ground(300,height,800,30);
  wall1=new Ground(1,100,30,800);
  wall2=new Ground(599,200,800,30);
  wall3=new Ground(300,200,30,800);
  stone=new Stone(450,200,75,75)
  rubber=new Rubber(150,200,75,75)  
  hammer=new Hammer(50,50,100,20)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
  
    fill("grey")
  stone.display();
  fill("white")
  rubber.display();
  fill("yellow")
  hammer.display();  
  

  drawSprites();
 
}



