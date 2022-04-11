const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world, backgroundImg;

var canvas, angle, tower, ground, cannon;
//var spookySound;

function preload() {
  backgroundImg = loadImage("./assets/background.png");
  towerImage = loadImage("./assets/base.png");
  //spookySound = loadSound("./assets/all.mp3");
}

function setup() {

  canvas = createCanvas(1000, 600);
  //spookySound.loop();

  engine = Engine.create();
  world = engine.world;
  
  var options = {
    isStatic: true
  }

  ground = Bodies.rectangle(0, height - 1, width * 2, 1, options);
  World.add(world, ground);

  tower = Bodies.rectangle(140, 340, 160, 310, options);
  World.add(world, tower);
  angle =20; 
  cannon = new Cannon(180, 110, 130, 100, angle);

}

function draw() {
  image(backgroundImg,0,0,1200,600)
  Engine.update(engine);

  
  rect(ground.position.x, ground.position.y, width * 2, 1);
  

  push();
  imageMode(CENTER);

  image(towerImage,tower.position.x, tower.position.y, 160, 310);
  pop();  
  cannon.display();
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPICA", width / 2, 100);
}
