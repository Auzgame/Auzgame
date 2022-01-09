var basicAmount=0;
var b1SpeedCost=10;
var basicBallCost=10;
var basicSpeed=2
var power=1
var powerCost=10;

var basics = [];

function basicLoader(){
    bb = new basicBaller((56), 56, basicSpeed, -basicSpeed);
    
        //basics[c] = [];
        
        basics.push(bb);
    
}
function basicBaller(x, y, dx, dy){
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
}


function drawBall() {
    for(var c=0; c<basicAmount; c++){
     ball = basics[c]
     ctx.beginPath();
     ctx.arc(ball.x, ball.y, ballRadius, 0, Math.PI*2);
     ctx.fillStyle = "#0095DD";
     ctx.fill();
     ctx.closePath();
     if(ball.x + ball.dx > canvas.width-ballRadius || ball.x + ball.dx < ballRadius) {
         ball.dx = -ball.dx;
       }
       if(ball.y + ball.dy < ballRadius || ball.y + ball.dy > canvas.height-ballRadius){
         ball.dy = -ball.dy;
       }
     ball.x += ball.dx;
     ball.y += ball.dy;
 
     
   }
     
 }
