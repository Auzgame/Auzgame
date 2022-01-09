var targetAmount=0;
var targetSpeedCost=50;
var targetBallCost=60;
var targetSpeed=2;
var targetPower=1;
var targetPowerCost=20;

var targets = [];

function targetLoader(){
  var t = new target(56, 56, targetSpeed, -targetSpeed, null)
  
  targets.push(t);
  targetAmount += 1;
}

function target(x, y, dx, dy, target){
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.target = target;
}

function drawTarget(){
  for(var x=0;x<targetAmount;x++){
    t = targets[x];
     ctx.beginPath();
     ctx.arc(t.x, t.y, ballRadius, 0, Math.PI*2);
     ctx.fillStyle = "#FF5555";
     ctx.fill();
     ctx.closePath();
     if(t.x + t.dx > canvas.width-ballRadius || t.x + t.dx < ballRadius) {
         
         var tarX = getAlive();
         if(tarX != null){
         //if(tarX.x > t.x){t.dx = (Math.abs(t.dx))}
         //if(tarX.x < t.x){t.dx = -(Math.abs(t.dx))}
         //(tarX.y > t.y){t.dy = (Math.abs(t.dy))}
         //if(tarX.y < t.y){t.dy = -(Math.abs(t.dy))}
          
         t.dy = (tarX.y+(brickHeight/2) - t.y)/66;
         t.dx = (tarX.x+(brickWidth/2)- t.x)/66;
         }
       }
       if(t.y + t.dy < ballRadius || t.y + t.dy > canvas.height-ballRadius){
         var tarX = getAlive();
         if(tarX != null){
         //if(tarX.x > t.x){t.dx = (Math.abs(t.dx))}
         //if(tarX.x < t.x){t.dx = -(Math.abs(t.dx))}
         //if(tarX.y > t.y){t.dy = (Math.abs(t.dy))}
         //if(tarX.y < t.y){t.dy = -(Math.abs(t.dy))}
         
         t.dy = ((tarX.y+(brickHeight/2) - t.y)/66);
         t.dx = ((tarX.x+(brickWidth/2) - t.x)/66);
         }
       }
     t.x+=t.dx*targetSpeed;
     t.y+=t.dy*targetSpeed;
     TcollisionDetection();
  }
}

function TcollisionDetection() {
  for(var c=0; c<brickColumnCount; c++) {
    for(var r=0; r<brickRowCount; r++) {
        for(var a=0; a<targetAmount; a++){
            var ball = targets[a]
            var b = bricks[c][r];
            if(b.status >= 1) {
                if(ball.x > b.x && ball.x < b.x+brickWidth && ball.y > b.y && ball.y < b.y+brickHeight + 5) {
                ball.dy = targetSpeed;
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

function getAlive(){
  if(score != brickRowCount*brickColumnCount){
  var tarX = bricks[Math.floor(Math.random() * brickColumnCount)][Math.floor(Math.random() * brickRowCount)];
  if(tarX.status > 0){
    return tarX;
  } 
  return getAlive();
  }
  return null;
}
