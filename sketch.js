var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var box1,box2,box3;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png");
	packageIMG=loadImage("package.png");
	console.log("helicopter");
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);

	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	World.add(world, ground);

	box1 = new Box(400,670,200,20);
	box2 = new Box(200,150,20,100);
	box3 = new Box(600,150,20,100);

	Engine.run(engine);
	console.log("package");
}

function draw() {
  rectMode(CENTER);
  background(0);
  ground.shapeColor=color(255,255,255);

  box1.shapeColor=color(255,0,0);
  box2.shapeColor=color(255,0,0);
  box3.shapeColor=color(255,0,0);

  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y

  box1.display();
  box2.display();
  box3.display();
  Engine.update(engine);
  console.log("Engine");
  drawSprites();
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	Matter.Body.setStatic(packageBody,false);
	console.log("Static");
  }
  console.log("Key");
}