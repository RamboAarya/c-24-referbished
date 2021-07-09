const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var body1;
var body2;
var body3;
var paper;
var ground;

function preload()
{	
	
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;


	//Create the Bodies Here.

	Engine.run(engine);
   
	body1=new Box_tree(390,650,200,20);
	body2=new Box_tree(280,610,20,100);
	body3=new Box_tree(500,610,20,100);
	paper=new Paper(150,600,10);
	ground=new Ground(400,650,800,10);
}


function draw() {
  rectMode(CENTER);
  background(0);
  drawSprites();
 
  body1.display();
  body2.display();
  body3.display();
  paper.display();
  ground.display();
}
function keyPressed(){
   if (keyCode===UP_ARROW){
	   Matter.Body.applyForce(paper.body,paper.body.position,{x:5,y:-22});
   }	
}



