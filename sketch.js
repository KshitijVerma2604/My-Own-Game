// variable
let scissor, stone, paper,scissorImg, stoneImg, paperImg;
let playImg, homeImg;
let backGround;
let header, headerImg, headerBlock;
let orangeIMG;
// entrance
let playButton, Homeview;

// player
let playerSide;
let computerSide;

// gamestates
let play, end, pause, gamestate=pause;

let leftPart, rightPart;

function preload(){

  // lmages going to be used
  scissorImg=loadImage("Scissor.jpg");
  stoneImg=loadImage('Stone.jpg');
  paperImg=loadImage('Paper.jpg');

  playImg=loadImage('play.png');
  homeImg=loadImage('home.png');
  backGround=loadImage('background.jpg');

  leftPart=loadImage('Question Mark left.png');
  rightPart=loadImage('Question Mark Right.jpg');

  headerImg=loadImage('Header.jpeg');
  orangeIMG=loadImage('orange.png');
}
function setup() {
  createCanvas(1000,639);

  // assigning variable and picture
  scissor=createSprite(260,500,10,10);
  scissor.addImage(scissorImg);
  scissor.scale=0.16;
  stone=createSprite(500,500,10,10);
  stone.addImage(stoneImg);
  stone.scale=0.16;
  paper=createSprite(770,500,10,10);
  paper.addImage(paperImg);
  paper.scale=0.16;

  // entrance
  playButton=createSprite(500,310,10,10);
  playButton.addImage(playImg);
  playButton.scale=0.04;
  Homeview=createSprite(500,130,10,10);
  Homeview.addImage(homeImg);
  Homeview.scale=0.6;

  // header
  headerBlock=createSprite(500,50,1100,100);
  headerBlock.addImage(orangeIMG)
  header=createSprite(500,50,200,100);
  header.addImage(headerImg);
  header.scale=0.51;
}
 
function draw() {
  // background Color
  background('green'); 
  
  if(keyDown('r')){
    gamestate=pause;
  }

  if(gamestate===pause){
    Homeview.visible=true;
    playButton.visible=true;
    scissor.visible=false;
    stone.visible=false;
    paper.visible=false;
    leftPart.visible=false;
    rightPart.visible=false;

    if(keyDown("space")){
      gamestate=play;
    }
  }

  if(gamestate===play){
    Homeview.visible=false;
    playButton.visible=false;
    scissor.visible=true;
    stone.visible=true; 
    paper.visible=true;
    leftPart.visible=true;
    rightPart.visible=true;
    computer();
    playerPart();
  }


  drawSprites();
}

function computer(){
  let computerSide=createSprite(800,200,100,100);
  computerSide.addImage(rightPart);
  computerSide.scale=0.3;

  if(mousePressedOver(scissor)||mousePressedOver(paper)||mousePressedOver(stone)){
    console.log("I am here in IF")
    let rand=Math.round(random(1,2,3));
    switch(rand){
      case 1:
        computerSide.changeImage(scissorImg);
        break;
      case 2:
        computerSide.changeImage(stoneImg);
        break;
      case 3:
        computerSide.changeImage(paperImg);
        break;
    }
  }
}

function playerPart(){
  let playerSide=createSprite(200,200,100,100);
  // this.playerSide.addImage(leftPart);
  playerSide.scale=0.3;

  if(mousePressedOver(scissor)){
    playerSide.changeImage(scissorImg);
  }
  if(mousePressedOver(paper)){
    playerSide.changeImage(paperImg);
  }
  if(mousePressedOver(stone)){
    playerSide.changeImage(stoneImg);
  }
  else{
    playerSide.addImage(leftPart);
  }
}