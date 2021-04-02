var starImg,bgImg;
var star, starBody;
var fairy, fairyImg;
var fairyVoice;

//create variable for fairy sprite and fairyImg

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
	fairyImg= loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	fairyVoice= loadSound("sound/JoyMusic.mp3");
	//load animation for fairy here
}

function setup() {
	createCanvas(800, 750);

	//write code to play fairyVoice sound
	fairyVoice.play();

	//create fairy sprite and add animation for fairy
    fairy= createSprite(125,505,30,30);
	fairy.addAnimation("fairyMoving",fairyImg);
	fairy.scale= 0.3;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

keyPressed();
  star.x= starBody.position.x 
  star.y= starBody.position.y 

  if(star.position.y > 470){
	star.velocityY = 0;
	fairy.x = 500;
  console.log(star.y);
  }

  //write code to stop star in the hand of fairy
  if(star.y > 470 && starBody.position.y > 470){
	  Matter.Body.setStatic(starBody,true)
  }
  
  drawSprites();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}
	
	//writw code to move fairy left and right
	if(keyWentDown(RIGHT_ARROW)){
		fairy.velocityX =3;
		fairy.velocityY =0;
	}
	
	if(keyWentDown(LEFT_ARROW)){
		fairy.velocityX =-3;
		fairy.velocityY =0;
	}

	if(keyWentDown(DOWN_ARROW)){
		star.velocityY = 4;
	}
	
}
