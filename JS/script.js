function playGame(argPlayerInput){
clearMessages();
const randomNumber = Math.floor(Math.random() * 3 + 1);

const computerMove = getMoveName(randomNumber);

const playerMove = getMoveName(argPlayerInput);

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

