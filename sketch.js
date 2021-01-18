const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;

var engine,world;

var ground1;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20;
var ball1;
var rope1;
var pole1,pole2;
var back;
var crane;


function preload(){
  craneImg=loadImage("cr.jpeg");
  back=loadImage("OIP.jpg")
}

function setup() {
  createCanvas(displayWidth,750);
  engine=Engine.create();
  world=engine.world;
  pole1=createSprite(300,50,500,20);
  pole2=createSprite(100,300,20,500)
  

  ground1= new Ground(600,600,2000,20);
  box1=new Box(900,100,70,70);
  box2=new Box(900,150,70,70);
  box3=new Box(900,200,70,70);
  box4=new Box(900,250,70,70);
  box5=new Box(900,300,70,70);
  box6=new Box(900,350,70,70);
  box7=new Box(800,100,70,70);
  box8=new Box(800,150,70,70);
  box9=new Box(800,200,70,70);
  box10=new Box(800,250,70,70);
  box11=new Box(800,300,70,70);
  box12=new Box(800,350,70,70);
  box13=new Box(700,100,70,70);
  box14=new Box(700,150,70,70);
  box15=new Box(700,200,70,70);
  box16=new Box(700,250,70,70);
  box17=new Box(700,300,70,70);
  box18=new Box(700,350,70,70);
  box19=new Box(700,400,70,70);
  box20=new Box(700,450,70,70);
  //crane= new Box(200,100,100,100)

 


  //ball
  ball1=new Ball(500,200,80,80);
  rope1= new Rope(ball1.body,{x:500,y:50});
}

function draw() {

  background(0);  
  Engine.update(engine);
  //ball
 
  ball1.display();
ground1.display();
box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
box8.display();
box9.display();
box10.display();
box11.display();
box12.display();
box13.display();
box15.display();
box14.display();
box16.display();
box17.display();
box18.display();
box19.display();
box20.display();
rope1.display();
//crane.display();
spwan();

if (keyCode=== 32){
  Matter.Body.setPosition (ball1.body,{x:LEFT_ARROW,y:RIGHT_ARROW})
}

  drawSprites();

}

  function mousePressed(){
 rope.fly();
   
 }
 function spwan(){
  //scale(5);
  crane=createSprite(130,550,200,200);
  
    crane.addImage(craneImg)
 }