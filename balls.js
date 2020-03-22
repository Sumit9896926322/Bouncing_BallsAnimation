var canvas = document.querySelector("#canvas");
var ctx = canvas.getContext('2d');
var height = canvas.height = window.innerHeight;
var width = canvas.width = window.innerWidth;
var size = radom(10,30);
var ballsList = [];
var check = [];
var NOB = 20;
var i,j;
var disX,disY,dis,rad,checkDist;
function radom(min, max){
   return Math.floor(Math.random() * (max - min) + min);
}

/**Balls object**/
Balls.prototype.move = function(){
  if(this.size + this.x >=width){
    this.velocityX = -this.velocityX;
  }

  if(this.size + this.y >=height){
    this.velocityY = -this.velocityY;
  }

  if(this.size + this.y <=50){
    this.velocityY = -this.velocityY;
  }

  if(this.size + this.x <= 50){
    this.velocityX = -this.velocityX;
  }


  this.x+= this.velocityX;
  this.y+= this.velocityY;
}

function getDistance(that,balls){
   disX = Math.pow(that.x - balls.x ,2);
   disY = Math.pow(that.y - balls.y ,2);
   dis = Math.sqrt(disX+disY);
   rad = that.size +balls.size;
   checkDist = dis <= rad;
   return checkDist;
}


Balls.prototype.distraction = function(){
  for(i = 0;i<ballsList.length;i++){
    if(this !== ballsList[i]){
      if(getDistance(this,ballsList[i])){
          ballsList[i].color = this.color = 'rgb(' + radom(0, 255) + ',' + radom(0, 255) + ',' + radom(0, 255) +')';
        // this.velocityX = -this.velocityX;
        // this.velocityY = -this.velocityY;
        // this.x += this.velocityX;
        // this.y+= this.velocityY;
        // ballsList[i].x+= this.velocityX;
        // ballsList[i].y+= this.velocityY;
    }
  }
 }
}

Balls.prototype.draw =function(){
 ctx.beginPath();
 ctx.fillStyle = this.color;
 ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
 ctx.fill();
}

/*****constructor here******/
function Balls(){

  this.x =radom(0+size,width-size),
  this.y =radom(0+size,height-size),
  this.color =`rgba(${radom(0,255)},${radom(0,255)},${radom(0,255)},1)`,
  this.velocityX = radom(1,8),
  this.velocityY = radom(1,5),
  this.size = radom(10,30);
}

/*Collecting all the balls in array*/
for(i = 0;i<NOB;i++){
var ball = new Balls();
ballsList.push(ball);
}

function init(){
  ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
 ctx.fillRect(0, 0, width, height);

for(j = 0;j<ballsList.length;j++){
  ballsList[j].draw();
  ballsList[j].distraction();
  ballsList[j].move();


}
requestAnimationFrame(init);
}

init();
/*29 may 2019 */
