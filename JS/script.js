let randomNumber = Math.floor(Math.random() * 3 + 1);

function getMoveName(argMoveId){
    if(argMoveId == 1){
      return 'stone';
    } else if (argMoveId == 2){
      return 'scissors';
    } else if (argMoveId == 3){
      return 'paper';
    } else return 'Empty';
}
let computerMove = getMoveName(randomNumber);

/*if(randomNumber == 1){
  computerMove = 'stone';
} else if (randomNumber == 2){
  computerMove = 'scissors';
} else computerMove = 'paper';

printMessage('Computer choose: ' + computerMove);*/

let playerInput = prompt('Choose your move! 1: stone, 2: scissors, 3: paper.');
let playerMove = getMoveName(playerInput);
/*if(playerInput == 1){
    playerMove = 'stone';
  } else if (playerInput == 2){
    playerMove = 'scissors';
  } else if (playerInput == 3) {
    playerMove = 'paper';
  } else printMessage('Choose error number');*/

function displayResult(argComputerMove, argPlayerMove){
    console.log('moves:', argComputerMove, argPlayerMove);
    printMessage('Computer choose ' + argComputerMove + ', and you ' + argPlayerMove);
    if (playerMove == 'Empty') {
        printMessage('You enter error number');
        return;
    }
    if (playerMove == computerMove){
        printMessage('draw');
        return;
    } 
    if ((playerMove == 'stone' && computerMove == 'paper') ||
        (playerMove == 'scissors' && computerMove == 'stone') ||
        (playerMove == 'paper' && computerMove == 'scissors'))
    {
        printMessage('you lose');
    } else printMessage('you win');
}

displayResult(computerMove,playerMove);

