const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var ground;
var myengine,myworld;
function setup() {
  createCanvas(400,400);
 

 myengine = Engine.create();
 myworld = myengine.world;

var ground_options={
  isStatic: true
}
 ground = Bodies.rectangle(200,390,400,20,ground_options);
World.add(myworld,ground);

console.log(ground);
console.log(ground.position.x);

}

function draw() {
  background("black");  
  Engine.update(myengine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);
  

}