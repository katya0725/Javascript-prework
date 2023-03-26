function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
    
    document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}

function getMoveName(argMoveId){
    if(argMoveId == 1){
      return 'stone';
    } else if (argMoveId == 2){
      return 'scissors';
    } else if (argMoveId == 3){
      return 'paper';
    } else return 'Empty';
}

function displayResult(argComputerMove, argPlayerMove){
    console.log('moves:', argComputerMove, argPlayerMove);
    printMessage('Computer choose ' + argComputerMove + ', and you ' + argPlayerMove);
    if (argPlayerMove == 'Empty') {
        printMessage('You enter error number');
        return;
    }
    if (argPlayerMove == argComputerMove){
        printMessage('draw');
        return;
    } 
    if ((argPlayerMove == 'stone' && argComputerMove == 'paper') ||
        (argPlayerMove == 'scissors' && argComputerMove == 'stone') ||
        (argPlayerMove == 'paper' && argComputerMove == 'scissors'))
    {
        printMessage('you lose');
    } else printMessage('you win');
}
