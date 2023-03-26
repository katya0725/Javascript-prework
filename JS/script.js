let randomNumber = Math.floor(Math.random() * 3 + 1);

/*console.log('Wylosowana liczba to: ' + randomNumber);*/

let computerMove = 'Empty';

if(randomNumber == 1){
  computerMove = 'stone';
} else if (randomNumber == 2){
  computerMove = 'scissors';
} else computerMove = 'paper';
    

printMessage('Computer choose: ' + computerMove);