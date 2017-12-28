let pongR = 5;
let padWidth = 7;
let padHeight = 100;
let leftScore = 0;
let rightScore = 0;

let pong; //the ball
let leftPad;
let rightPad;

function setup() {

  createCanvas(600, 400);
  background(50);
   pong = new Pong(width/2, height/2, pongR*2);
   leftPad = new Pad((20 - padWidth / 2 ), (height/2 - padHeight/2), padWidth, padHeight);
   rightPad =  new Pad(( width-20 - padWidth / 2), (height/2 - padHeight/2), padWidth, padHeight);
}

function draw() {
  background(50);
  moveLeftPad();
  moveRightPad()
  updateAll();
  pongCollisionTB();
  checkCollisonPads();
  checkPongOffscreen();
}

//lets the left paddle move
function moveLeftPad() {

  if(keyIsDown(UP_ARROW)) {
      if( (leftPad.y-3) > 0) {
        leftPad.y -= 3;
        leftPad.update();
      }
    }

    if(keyIsDown(DOWN_ARROW)) {
      if((leftPad.y + padHeight + 3) < height) {
        leftPad.y += 3;
        leftPad.update();
      }
    }
  }

//lets the right paddle move
function moveRightPad() {

    if(keyIsDown(87)) {
        if( (rightPad.y-3) > 0) {
          rightPad.y -= 3;
        }
      }

      if(keyIsDown(83)) {
        if((rightPad.y + padHeight + 3) < height) {
          rightPad.y += 3;
        }
      }
    }

function updateAll() {
  leftPad.update();
  rightPad.update();
  pong.update();
  textSize(32);
  fill(255,255,255);
  text(leftScore, 100,30);
  text(rightScore, 500,30);

}

//Check if Pong collides top or Bottom
function pongCollisionTB() {

  if( (pong.y + pongR) > height) {
    console.log("x");
    pong.ySpeed *= -1;
  } else if (pong.y < 0) {
    console.log("y");
    pong.ySpeed *= -1;
  }

}

function checkCollisonPads() {
  //leftPadCollision
  if(pong.x - pongR < (leftPad.x + padWidth) && (pong.y > leftPad.y
    && pong.y + pongR < leftPad.y + padHeight )) {
    pong.xSpeed *= -1;
  }

  //rightPadCollison
  if(pong.x + pongR > (rightPad.x) && (pong.y > rightPad.y
    && pong.y + pongR < rightPad.y + padHeight )) {
    pong.xSpeed *= -1;
  }
}

function checkPongOffscreen() {
  if(pong.x - pongR < 0) {
    rightScore++;
    initPong();
  }
  if (pong.x + pongR > width) {
    leftScore++;
    initPong();
  }
}

function initPong() {
  pong.x = width/2;
  pong.y = height/2;
  pong.xSpeed = random(-1,1) * 3;;
  pong.ySpeed = random(5);
}
