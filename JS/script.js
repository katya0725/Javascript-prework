function playGame(argPlayerInput){
clearMessages();
let randomNumber = Math.floor(Math.random() * 3 + 1);

let computerMove = getMoveName(randomNumber);

//let playerInput = prompt('Choose your move! 1: stone, 2: scissors, 3: paper.');
let playerMove = getMoveName(argPlayerInput);

displayResult(computerMove,playerMove);
};

document.getElementById('play-button').addEventListener('click', function(){
    playGame(1);
  });
document.getElementById('play-scissors').addEventListener('click', function(){
    playGame(2);
  });
document.getElementById('play-paper').addEventListener('click', function(){
    playGame(3);
  });

