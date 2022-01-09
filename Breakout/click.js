var canvas = document.getElementById("MyCanvas");

canvas.addEventListener('click', function(e){
  
  
    var relativeX = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
    var relativeY = e.clientY + document.body.scrollTop + document.documentElement.scrollTop; 
  
    relativeX -= canvas.offsetLeft;
    relativeY -= canvas.offsetTop;
    
      console.log(relativeX + "  " + relativeY);
  
    if(relativeX > 180 && relativeX < 260 && relativeY > 2 && relativeY < 25){
          open = !open;
          console.log("shop");
        }
    
   
    if(relativeX > 70 && relativeX < 150 && relativeY > 80 && relativeY < 120 && open){
      if(Money >= b1SpeedCost){
        basicSpeed++;
        Money-=b1SpeedCost;
        b1SpeedCost += 25
        for(var x=0;x<basics.length;x++){
            basics[x].dx = basicSpeed;
            basics[x].dy = basicSpeed;
        }
        
      }
    }
    if(relativeX > 70 && relativeX < 150 && relativeY > 130 && relativeY < 170 && open){
      if(Money >= basicBallCost){
        basicAmount+=1;
        Money-=basicBallCost;
        basicBallCost += 25;
        basicLoader();
      }
    }
    if(relativeX > 70 && relativeX < 150 && relativeY > 180 && relativeY < 220 && open){
      if(Money >= powerCost){
        power+=1;
        Money-=powerCost;
        powerCost += 25;
      }
    }
    
    if(relativeX > 160 && relativeX < 240 && relativeY > 80 && relativeY < 120 && open){
      if(Money >= targetSpeedCost){
        targetSpeed+=1;
        Money-=targetSpeedCost;
        targetSpeedCost=(targetSpeedCost*2)-10;
      }
    }
    if(relativeX > 160 && relativeX < 240 && relativeY > 130 && relativeY < 170 && open){
      if(Money >= targetBallCost){
        targetLoader();
        Money-=targetBallCost;
        targetBallCost=(targetBallCost*2);
      }
    }
    if(relativeX > 160 && relativeX < 240 && relativeY > 180 && relativeY < 220 && open){
      if(Money >= targetPowerCost){
        targetPower+=1;
        Money-=targetPowerCost;
        targetPowerCost = (targetPowerCost*2)-10
      }
    }
    for(var c=0; c<brickColumnCount; c++) {
      for(var r=0; r<brickRowCount; r++) {
        var b = bricks[c][r];
        
        
        
        if(b.status >= 1) {
          if(relativeX > b.x && relativeX < b.x+brickWidth && relativeY > b.y && relativeY < b.y+brickHeight) {
            b.status -= 1;
            if(b.status == 0){
            Money+=level;
            score++;
            
            }
          }
        }
      }}
  }, false);