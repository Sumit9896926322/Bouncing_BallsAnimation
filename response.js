var spinner = document.querySelector('.symbol');
var player1 = document.querySelector('.player-1');
var player2 = document.querySelector('.player-2');
var degree = 0;
var starttime = null;
var ref;
var score1 = 0,score2 = 0;
var winner = document.querySelector('.winner');
var score_1 = document.querySelector('.score-1');
var score_2 = document.querySelector('.score-2');


function random(){
  return  Math.floor(Math.random() * (10000 - 1000) + 1000);
}

function spin(timestamp){
if(!starttime){
  starttime = timestamp;
}
  degree += 6;
spinner.style.transform = `rotate(${degree}deg)`;
ref = requestAnimationFrame(spin);

if(degree > 359){
  degree-= 360;
}
}

spin();

function stop(){
  console.log("Its running");
  cancelAnimationFrame(ref);
  player1.innerText = "G0! G0! G0!";
  player2.innerText = "G0! G0! G0!";


  document.addEventListener('keydown',function(e){
  if(e.which === 65){
    score_1.innerText = ++score1;
    winner.innerHTML = "Player1 Wins"

  }
    else if(e.which === 76){
        score_2.innerText = ++score2;
        winner.innerHTML = "Player2 Wins";
     }
  })
  player1.innerText = "Player-1";
  player2.innerText = "Player-2";

}
setTimeout(stop,random());
