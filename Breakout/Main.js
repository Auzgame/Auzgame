var canvas = document.getElementById("MyCanvas");
var ctx = canvas.getContext("2d");
var ballRadius = 10;
var x = canvas.width/2;
var y = canvas.height-30;

var brickRowCount = 5;
var brickColumnCount = 3;
var brickWidth = 75;
var brickHeight = 20;
var brickPadding = 10;
var brickOffsetTop = 30;
var brickOffsetLeft = 30;
var score = 0;
var lives = 3;
var level = 1;
var Money = 0;
var open = false;

var bricks = [];

function load(){
  for(var c=0; c<brickColumnCount; c++) {
    bricks[c] = [];
    for(var r=0; r<brickRowCount; r++) {
      bricks[c][r] = { x: 0, y: 0, status: level };
    }
  }
}


function collisionDetection() {
  for(var c=0; c<brickColumnCount; c++) {
    for(var r=0; r<brickRowCount; r++) {
        for(var a=0; a<basicAmount; a++){
            var ball = basics[a]
            var b = bricks[c][r];
            if(b.status >= 1) {
                if(ball.x > b.x && ball.x < b.x+brickWidth && ball.y > b.y && ball.y < b.y+brickHeight + 5) {
                ball.dy = -ball.dy;
                b.status -= power;
                if(b.status <= 0){
                Money+=level;
                score++;
          
          }
        }
      }
    }
  }
}
}


function Shop(){
  if(open){
    ctx.beginPath();
    ctx.fillStyle = "rgb(255, 212, 133)";
    ctx.rect(50, 2, canvas.width - 100, canvas.height);
    ctx.fill();
    ctx.closePath();
    
    ctx.beginPath();
    ctx.fillStyle = "rgb(100, 300, 100)";
    ctx.rect(180, 2, canvas.width - 400, 25);
    ctx.fill();
    ctx.closePath();
    
    ctx.beginPath();
    ctx.font = "20px Arial";
    ctx.fillStyle = "rgb(0,0,0)";
    ctx.fillText("Shop!", 195, 20);
    ctx.closePath();
    
   
    ctx.beginPath();
    ctx.fillStyle = "rgb(110, 253, 255)";
    ctx.arc(100, 50, ballRadius + 10,0, Math.PI*2);
    ctx.fill();
    ctx.closePath();
    
    ctx.beginPath();
    ctx.fillStyle = "#FF5555";
    ctx.arc(200, 50, ballRadius + 10,0, Math.PI*2);
    ctx.fill();
    ctx.closePath();
    
    // basic ball speed 

    ctx.beginPath();
    ctx.fillStyle = "rgb(255, 255, 255)";
    ctx.rect(70, 80, 80, 40);
    ctx.fill();
    ctx.closePath();
    
    ctx.beginPath();
    ctx.font = "14px Arial";
    ctx.fillStyle = "rgb(0,0,0)";
    ctx.fillText("Speed: " + (basicSpeed - 1) , 80, 95);
    ctx.fill();
    ctx.closePath();
    
    ctx.beginPath();
    ctx.font = "14px Arial";
    ctx.fillStyle = "rgb(0,0,0)";
    ctx.fillText("Cost: " + b1SpeedCost , 80, 110);
    ctx.fill();
    ctx.closePath();
    
    //more basic balls

    ctx.beginPath();
    ctx.fillStyle = "rgb(255, 255, 255)";
    ctx.rect(70, 130, 80, 40);
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.font = "14px Arial";
    ctx.fillStyle = "rgb(0,0,0)";
    ctx.fillText("Basics: " + basicAmount , 80, 145);
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.font = "14px Arial";
    ctx.fillStyle = "rgb(0,0,0)";
    ctx.fillText("Cost: " + basicBallCost , 80, 160);
    ctx.fill();
    ctx.closePath();

    //BAsic Power
    
    ctx.beginPath();
    ctx.fillStyle = "rgb(255, 255, 255)";
    ctx.rect(70, 180, 80, 40);
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.font = "14px Arial";
    ctx.fillStyle = "rgb(0,0,0)";
    ctx.fillText("Power: " + power , 80, 195);
    ctx.fill();
    ctx.closePath();

    ctx.beginPath();
    ctx.font = "14px Arial";
    ctx.fillStyle = "rgb(0,0,0)";
    ctx.fillText("Cost: " + powerCost , 80, 210);
    ctx.fill();
    ctx.closePath();
    
    //Homing Ball Speed
    ctx.beginPath();
    ctx.fillStyle = "rgb(255, 255, 255)";
    ctx.rect(160, 80, 80, 40);
    ctx.fill();
    ctx.closePath();
    
    ctx.beginPath();
    ctx.font = "14px Arial";
    ctx.fillStyle = "rgb(0,0,0)";
    ctx.fillText("Speed: " + (targetSpeed - 1) , 170, 95);
    ctx.fill();
    ctx.closePath();
    
    ctx.beginPath();
    ctx.font = "14px Arial";
    ctx.fillStyle = "rgb(0,0,0)";
    ctx.fillText("Cost: " + targetSpeedCost , 170, 110);
    ctx.fill();
    ctx.closePath();
    
    //Homing ball amount
    ctx.beginPath();
    ctx.fillStyle = "rgb(255, 255, 255)";
    ctx.rect(160, 130, 80, 40);
    ctx.fill();
    ctx.closePath();
    
    ctx.beginPath();
    ctx.font = "14px Arial";
    ctx.fillStyle = "rgb(0,0,0)";
    ctx.fillText("Homing: " + (targetAmount) , 170, 145);
    ctx.fill();
    ctx.closePath();
    
    ctx.beginPath();
    ctx.font = "14px Arial";
    ctx.fillStyle = "rgb(0,0,0)";
    ctx.fillText("Cost: " + targetBallCost , 170, 160);
    ctx.fill();
    ctx.closePath();
    //Homing ball power
    
    ctx.beginPath();
    ctx.fillStyle = "rgb(255, 255, 255)";
    ctx.rect(160, 180, 80, 40);
    ctx.fill();
    ctx.closePath();
    
    ctx.beginPath();
    ctx.font = "14px Arial";
    ctx.fillStyle = "rgb(0,0,0)";
    ctx.fillText("Power: " + (targetPower) , 170, 195);
    ctx.fill();
    ctx.closePath();
    
    ctx.beginPath();
    ctx.font = "14px Arial";
    ctx.fillStyle = "rgb(0,0,0)";
    ctx.fillText("Cost: " + targetPowerCost , 170, 210);
    ctx.fill();
    ctx.closePath();
    
  } else{
    ctx.beginPath();
    ctx.fillStyle = "rgb(100, 300, 100)";
    ctx.rect(180, 2, canvas.width - 400, 25);
    ctx.fill();
    ctx.closePath();
    
    ctx.beginPath();
    ctx.font = "20px Arial";
    ctx.fillStyle = "rgb(0,0,0)";
    ctx.fillText("Shop!", 195, 20);
    
    
    
  }
}



function drawHealth(health, brickX, brickY){
        ctx.fillStyle = "#000000";
        ctx.fillText(health, brickX+40, brickY+15);
}

function drawBricks() {
  for(var c=0; c<brickColumnCount; c++) {
    for(var r=0; r<brickRowCount; r++) {
      if(bricks[c][r].status >= 1) {
        var brickX = (r*(brickWidth+brickPadding))+brickOffsetLeft;
        var brickY = (c*(brickHeight+brickPadding))+brickOffsetTop;
        bricks[c][r].x = brickX;
        bricks[c][r].y = brickY;
        
        var health = bricks[c][r].status
        ctx.font = "16px Arial";
       
        
        
        ctx.beginPath();
      
        ctx.fillStyle = "#0095DD";
        ctx.rect(brickX, brickY, brickWidth, brickHeight);
        ctx.fill();
        ctx.closePath();
        
        ctx.beginPath();
        drawHealth(health, brickX, brickY);
        
        ctx.fill();
        ctx.closePath();
      }
    }
  }
}

function drawScore() {
  ctx.font = "16px Arial";
  ctx.fillStyle = "#0095DD";
  ctx.fillText("Level: "+level, 8, 20);
}

function drawMoney(){
  ctx.font = "16px Arial";
  ctx.fillStyle = "#0095DD";
  ctx.fillText("Money: "+Money, canvas.width-(Money.toString().length*10)-67, 20);
}


function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBricks();
  drawBall();
  drawScore();
  drawMoney();
  drawTarget();
  collisionDetection();
  Shop();
  

  
  
  if(score == brickRowCount*brickColumnCount) {
      level++;
      load();
      score=0;
  }


  requestAnimationFrame(draw);
}
load();
basicLoader();
draw();