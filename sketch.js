
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball, ground;
var trash1,trash2,trash3;
var trashImg;
var trials;

function preload(){
	trashImg = loadImage('dustbingreen.png');
}

function setup() {
	createCanvas(1500, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(750,690,1500,10);

	ball = new Ball(200,200,50,50);

	trash1 = new Box(1490,680-(100/2),10,100);
	trash2 = new Box(1350,680-(100/2),10,100);
	trash3 = new Box(1355+(130/2),680,130,10);


	Engine.run(engine);
  
}


function draw() {
	Engine.update(engine);

	rectMode(CENTER);
	background(0);

	ground.display();
	ball.display();
	trash1.display();
	trash2.display();
	trash3.display();
	imageMode(CENTER);
	image(trashImg,1420,630,140,100);

	
	drawSprites();
	if(ball.body.position.x>1500){
		Body.setPosition(ball.body,{x:0,y:ball.body.position.y})
	}

	if(keyDown('UP_ARROW')){
		Body.applyForce(ball.body,ball.body.position,{x:20,y:-25})

		//console.log(':3');
	}
 
}

