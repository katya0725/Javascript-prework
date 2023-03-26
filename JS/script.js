let randomNumber = Math.floor(Math.random() * 3 + 1);

let computerMove = 'Empty';

if(randomNumber == 1){
  computerMove = 'stone';
} else if (randomNumber == 2){
  computerMove = 'scissors';
} else computerMove = 'paper';
    

printMessage('Computer choose: ' + computerMove);

let playerInput = prompt('Choose your move! 1: stone, 2: scissors, 3: paper.');
let playerMove = 'Empty';

if(playerInput == 1){
    playerMove = 'stone';
  } else if (playerInput == 2){
    playerMove = 'scissors';
  } else if (playerInput == 3) {
    playerMove = 'paper';
  } else printMessage('Choose error number');

if ((playerMove == 'stone' && computerMove == 'stone') ||
    (playerMove == 'scissors' && computerMove == 'scissors') ||
    (playerMove == 'paper' && computerMove == 'paper'))
{
    printMessage('draw');
}
if ((playerMove == 'stone' && computerMove == 'paper') ||
    (playerMove == 'scissors' && computerMove == 'stone') ||
    (playerMove == 'paper' && computerMove == 'scissors'))
{
    printMessage('you lose');
}
if ((playerMove == 'stone' && computerMove == 'scissors') ||
    (playerMove == 'scissors' && computerMove == 'paper') ||
    (playerMove == 'paper' && computerMove == 'stone'))
{
    printMessage('you win');
}