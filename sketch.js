
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;


var roof;
var bob1,bob2,bob3,bob4,bob5;
var rope1,rope2,rope3,rope4,rope5;
function preload()
{
	
}

function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;

	roof=new Roof(400,200,350,40);
	bob1=new Bob(300,380);
	bob2=new Bob(350,380);
	bob3=new Bob(400,380);
	bob4=new Bob(450,380);
	bob5=new Bob(500,380);

	rope1=new Chain(bob1.body,roof.body,-100,0);
	rope2=new Chain(bob2.body,roof.body,-50,0);	
	rope3=new Chain(bob3.body,roof.body,0,0);
	rope4=new Chain(bob4.body,roof.body,50,0);	
	rope5=new Chain(bob5.body,roof.body,100,0);
	Engine.run(engine);
  
}


function draw() {
  background("white");
  
  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
 

}
function keyPressed(){
	if(keyCode===UP_ARROW){
		Body.applyForce(bob1.body,bob1.body.position,{x:-80,y:85})
	}
}


