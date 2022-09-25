'use strict';


// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent ="New Number"


// document.querySelector('.number').textContent=20;
// document.querySelector('.score').textContent=21;
// document.querySelector('.guess').value=35;

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore=0;

const displayMessage= function(message){
  document.querySelector('.message').textContent =message;

}

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  if (!guess) {

    displayMessage('Not a number')
    // document.querySelector('.message').textContent = 'Not a number';
  } else if (guess === secretNumber) {
    displayMessage('Right Answer')
    // document.querySelector('.message').textContent = 'Right Answer';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor=	'#60b347';
    document.querySelector('.number').style.width='30rem';
    if(score>highScore){
      highScore=score;
      document.querySelector('.highscore').textContent=highScore;
      
      }
  }  else if(guess!==secretNumber){

    if(score > 1){ 
      displayMessage(guess>secretNumber ? 'Too high' :  'Too low')
      // document.querySelector('.message').textContent = guess>secretNumber ? 'Too high' :  'Too low' 
     
      score--;
     
      document.querySelector('.score').textContent=score;
  }else{
    displayMessage('You lost the game')
      // document.querySelector('.message').textContent = 'You lost the game';
      document.querySelector('.score').textContent=0;
      
  }




  }
  
  
  
  // else if(guess>secretNumber){

  //   if(score > 1 ){
  //       document.querySelector('.message').textContent = 'Too high';
  //       score--;
       
  //       document.querySelector('.score').textContent=score;
  //   }else{
  //       document.querySelector('.message').textContent = 'You lost the game';
  //       document.querySelector('.score').textContent=0;
  //   }

    
   

  // } else if (guess<secretNumber){

  //   if(score>1){

  //       document.querySelector('.message').textContent = 'Too low';
  //       score--;
  //       document.querySelector('.score').textContent=score;
  //   }else{

  //       document.querySelector('.message').textContent = 'You lost the game';
  //       document.querySelector('.score').textContent=0;
  //   }

   
   
  // }
});







document.querySelector('.again').addEventListener(
('click'), function() {
  document.querySelector('body').style.backgroundColor=	'#222';
 
  
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...')
  // document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent=score;
  document.querySelector('.number').textContent ="?"
  document.querySelector('.guess').value = ' ';
  document.querySelector('.number').style.width='15rem'
}

)

