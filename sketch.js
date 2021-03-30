var balloon,balloonImage1,balloonImage2;
var database;
var height;
// create database and position variable here

function preload(){
   bg =loadImage("cityImage.png");
   //balloonImage1=loadAnimation("hotairballoon1.png");
   //balloonImage2=loadAnimation("hotairballoon1.png","hotairballoon1.png",
   //"hotairballoon1.png","hotairballoon2.png","hotairballoon2.png",
   //"hotairballoon2.png","hotairballoon3.png","hotairballoon3.png","hotairballoon3.png");
  }

//Function to set initial environment
function setup() {
  database=firebase.database();
  createCanvas(1500,700);

  airBalloon=createSprite(250,650,150,150);
  //balloon.addAnimation("hotAirBalloon",balloonImage2);
  airBalloon.scale=0.5;
var airBalloonPosition=database.ref('airBalloon/height')
airBalloonPosition.on("value", readHeight, showError);
  textSize(20); 
}

// function to display UI
function draw() {
  background(bg);

  if(keyDown(LEFT_ARROW)){
    updateHeight(-10,0);
  }
  else if(keyDown(RIGHT_ARROW)){
    updateHeight(10,0);
  }
  else if(keyDown(UP_ARROW)){
    updateHeight(0,-10);
  }
  else if(keyDown(DOWN_ARROW)){
    updateHeight(0,+10);
  }

  drawSprites();
  fill(0);
  stroke("white");
  textSize(25);
  text("**Use arrow keys to move Hot Air Balloon!",40,40);

  
}
function updateHeight(x,y){ 
  database.ref('airBalloon/height').set({
     'x': height.x + x , 'y': height.y + y 
    })
  }

function readHeight(data){
height=data.val()
airBalloon.x = height.x;
airBalloon.y = height.y;

}

function showError(){
  console.log ("Error in writing to the database")
}