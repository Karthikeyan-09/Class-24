const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, box1, box2, box3, box4, box5;
var pig1, pig2, log1, log2, log3, log4;
var bird;
function setup(){
    var canvas = createCanvas(1000,500);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(500,480,1000,20);
    box1 = new Box(500,450,70,70);
    box2 = new Box(700,450,70,70);
    pig1 = new Pig(600,450);
    log1 = new Log(600,415,280,PI/2);

    box3 = new Box(500,380,70,70);
    box4 = new Box(700,380,70,70);
    pig2 = new Pig(600,380);
    log2 = new Log(600,300,280,PI/2);

    //PI = 360
    box5 = new Box(600,280,70,70);
    log3 = new Log(550,280,140,PI/7);
    log4 = new Log(650,280,140,-PI/7);

    bird = new Bird(100,100);
    
    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    //Matter.Body.setPosition(bird.body, {bird.body.position.x:mouseX, bird.body.position.y:mouseY});
    ground.display();
    box1.display();
    box2.display();    
    log1.display();
    pig1.display();
    box3.display();
    box4.display();    
    log2.display();
    pig2.display();
    log3.display();
    log4.display();
    box5.display();
    bird.display();
}