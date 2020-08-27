function computerPlay(){
    const values = ['rock', 'paper', 'scissors'];
    return values[Math.floor(Math.random() * values.length)];
}

function playRound(playerSelection, computerSelection){
    
    let playerValue = playerSelection.toLowerCase();
    
    if(playerValue === computerSelection){
        return 0;
    }

    if(playerValue === 'rock'){
        if(computerSelection === 'paper') return 1;
        if(computerSelection === 'scissors') return 2;
    }

    if(playerValue === 'paper'){
        if(computerSelection === 'scissors') return 1;
        if(computerSelection === 'rock') return 2;
    }

    if(computerSelection === 'rock') return 1;
    if(computerSelection === 'paper') return 2;
}

function game(){

    let playerScore = 0;
    let computerScore = 0;
    let rondas = 5;

    while(rondas > 0){
        
        let playerSelection = prompt('Rock, paper, scissors');
        let computerSelection = computerPlay();
        let result = playRound(playerSelection, computerSelection);

        console.log(`Jugador: ${playerSelection}, Computadora: ${computerSelection}`);
        if(result === 1){
            console.log('La computadora gana la ronda');
            computerScore++;
            rondas--;
        }else if(result === 2){
            console.log('El jugador gana la ronda');
            playerScore++;
            rondas--;
        }else{
            console.log('Empate, se repite la ronda');
        }
    }

    if(playerScore > computerScore){
        console.log('Gana player');
    }else{
        console.log('Gana PC');
    }

}
game();