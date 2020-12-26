const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var squ;
var ball;

function setup() {
  createCanvas(400, 400);
  engine = Engine.create();
  world = engine.world;

  var ballOptions = {
    restitution: 1,
  }
  ball = Bodies.circle(200, 100, 20, ballOptions);
  World.add(world, ball);

  var options = {
    isStatic: true,
  }

  squ = Bodies.rectangle(200, 390, 400, 20, options);
  World.add(world, squ);
  console.log(squ);
  console.log(squ.position.x);

}

function draw() {
  background(120, 100, 230);
  Engine.update(engine);
  rectMode(CENTER);

  rect(squ.position.x, squ.position.y, 400, 20);
  ellipseMode(RADIUS);
  fill("yellow")
  ellipse(ball.position.x, ball.position.y, 20);
}