var PLAY =1;
var END =0;
var gameState = 1;

var sword,knifeI;
var gameOverI;

var fruit1;
var fruit1I,fruit2I,fruit3I, fruit4I;
score=0;
    
var alien1;
var alien1I,alien2I;
var alienGroup,fruitGroup;
var cutSound,gameoverSound;
function preload(){
    
     knifeI = loadImage('sword.png');
     fruit1I = loadImage ('fruit1.png');
     fruit4I = loadImage ('fruit4.png');
     fruit3I = loadImage ('fruit3.png');
     fruit2I = loadImage ('fruit2.png');
    alien1I = loadImage  ('alien1.png');
    alien2I = loadImage  ('alien2.png');
    gameOverI= loadImage('gameover.png');
    cutSound=loadSound('knifeSwooshSound.mp3')
  gameoverSound=loadSound('gameover.mp3')
}

function setup(){
  
  sword=createSprite(400,200,20,20)
  sword.addImage(  'knife',knifeI)  
  sword.addImage('gameover',gameOverI);
  sword.scale=0.5;
  
  fruitGroup=new Group()
  alienGroup=new Group()
  
    score=0;
  
}

function draw(){
background('lightyellow');
  text('score:'+score,350,20 )
  if(gameState===PLAY){
  sword.x=mouseX;
  sword.y=mouseY;
  
  if(fruitGroup.isTouching(sword)){
    fruitGroup.destroyEach();
    score=score+2
    cutSound.play();
  
  }
  
  if(sword.isTouching(alienGroup)){
    gameState=END;
    fruitGroup.destroyEach();
    alienGroup.destroyEach();
    sword.changeImage('gameover')
    
    sword.x=200;
    sword.y=200
    gameoverSound.play();
    
  }
  
  Fruit();
  enemy();
  }
  
  drawSprites();
}



function Fruit(){
if(frameCount%80===0){
fruit=createSprite(400,200,20,20);
fruit.scale=0.2;
r = Math.round(random(1,4))
  if(r==1){
  fruit.addImage(fruit1I);
  } else if (r ==2){
    fruit.addImage(fruit2I);
} else if (r ==3){
    fruit.addImage(fruit3I);
 } else if (r ==4){
    fruit.addImage(fruit4I);
 }
fruit.velocityX=-3;
fruit.y = Math.round(random(50,340));
  
fruit.velocityx = 7;
fruit.setLifetime=100;
  
  position = Math.round(random(1,2)); 
   
  
  if(position==1) 
  { 
    fruit.x=400; 
    fruit.velocityX=-(7+(score/4));
  }
  else
  { 
    if(position==2){
      fruit.x=0;
      
 fruit.velocityX= (7+(score/4)); } 
} 


  fruitGroup.add(fruit)
}

}

function enemy (){
  
 if(World.frameCount%200===0){
 alien=createSprite(400,200,20,20);
   alien.addAnimation('alien',alien2I);
   alien.y=Math.round(random(100,300));
   alien.velocityX=-(8+(score/10))
   alien.setlifetime=50;
   
   alienGroup.add(alien);
   
   
 } 
  
  
  
  
}




















