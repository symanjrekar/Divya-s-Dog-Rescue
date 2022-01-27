var canvas;
var dog, dogImage, dogAnimation;
var gameState = 0;
var bg, bgImg;
var score = 0;

function preload()
{
    dogAnimation = loadAnimation("Assets/Run1.png","Assets/Run2.png",
                                 "Assets/Run3.png","Assets/Run4.png",
                                 "Assets/Run5.png","Assets/Run6.png",
                                 "Assets/Run7.png","Assets/Run8.png")
    dogImage = loadImage("Assets/Run1.png");
    bgImg = loadImage("Assets/m_park.jpg");
    //bgImg = loadImage("bg.jpg");
}

function setup()
{
    //createCanvas(windowWidth, windowHeight);
    canvas = createCanvas (1530,750);

    //bg = createSprite(965,325,1630, 730);
    bg = createSprite(500,250,1000,500);
    bg.addImage(bgImg);
    bg.scale = 1.7;
    bg.velocityX = -2;
    

    dog = createSprite(150,600,50,50);
    dog.shapeColor = "red";
    dog.addAnimation("running",dogAnimation);
    dog.scale = 0.3;
    
}

function draw()
{
    bg.velocityX = -2;
    console.log(bg.x);
       if (bg.x < 660) 
        {
          bg.x = width/2;
        }
        drawSprites();
        textSize(50);
        stroke(4);
        fill("brown");
        textFont("Times New Romans")
        text("Dog To The Rescue", 600, 150); 
    
}

