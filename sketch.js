
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}


var rect1,rect2,rect3 ,pbody;


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

 rect1 = new rect (650,200,20,50)
 rect2 = new rect (650,200,20,50)
 rect3 = new rect (650,200,20,50)

pbody = new pbody (50,10,r/2)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  rect1.display();
  rect2.display();
  rect3.display();
  pbody.display();
  drawSprites();
 
}


function keyPressed() {
	if (keyCode === UP_ARROW) {
	   
		Matter.Body.applyForce(pbody.body,pbody.pbody.body.position,{x:85,y:-85})
	   
	}
}   
