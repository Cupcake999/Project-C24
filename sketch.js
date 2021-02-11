
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var hammerObj,ground,sand1,sand2,sand3,sand4,sand5,sand6,sand7,sand8,sand9,sand10;
var stone,rubber1,iron;
function preload()
{
	
}

function setup() {
	createCanvas(1200, 500);


engine = Engine.create();
world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
	hammerObj = new hammer(250,250,200,20)
  ground = new Plane(600,500,1200,10)
  sand1 = new Sand(600,500,5)
  sand2 = new Sand(600,400,5)
  sand3 = new Sand(600,400,5)
  sand4 = new Sand(600,400,5)
  sand5 = new Sand(600,400,5)
  sand6 = new Sand(600,490,5)
  sand7 = new Sand(600,490,5)
  sand8 = new Sand(600,490,5)
  sand9 = new Sand(600,490,5)
  sand10 = new Sand(600,490,5)
  stone = new Stone(400,400,70,70)
  rubber1 = new Rubber(420,490,30)
  iron = new Iron(300,490,100,5)
}


function draw() {
  background("skyBlue");
  Engine.update(engine);
  hammerObj.display()
  ground.display()
  sand1.display()
  sand2.display()
  sand3.display()
  sand4.display()
  sand5.display()
  sand6.display()
  sand7.display()
  sand8.display()
  sand9.display()
  sand10.display()
  stone.display()
  rubber1.display()
  iron.display()
  drawSprites();
 
}



