function computerPlay(){
    const values = ['rock', 'paper', 'scissors'];
    return values[Math.floor(Math.random() * values.length)];
}

function playRound(playerSelection, computerSelection){
    
    if(playerSelection === computerSelection){
        return 0;
    }

    if(playerSelection === 'rock'){
        if(computerSelection === 'paper') return 1;
        if(computerSelection === 'scissors') return 2;
    }

    if(playerSelection === 'paper'){
        if(computerSelection === 'scissors') return 1;
        if(computerSelection === 'rock') return 2;
    }

    if(computerSelection === 'rock') return 1;
    if(computerSelection === 'paper') return 2;
}

function startGame(){

    const btns = Array.from(document.querySelectorAll('.btn'));

    btns.forEach(btn => {
        btn.classList.add('btn-hover');
        btn.disabled = false; 
    });
 /*
    let playerScore = 0;
    let computerScore = 0;

    while(playerScore < 3 && computerScore < 3){


        let playerSelection;
        do{
            console.log('Elije rock, paper, or scissors');
            playerSelection = (prompt('Rock, paper, scissors')).toLowerCase();
        }while(playerSelection !== 'rock' && playerSelection !== 'paper' && playerSelection !== 'scissors');
        
        
        let computerSelection = computerPlay();
        let result = playRound(playerSelection, computerSelection);

        console.log(`Jugador: ${playerSelection}, Computadora: ${computerSelection}`);
        if(result === 1){
            console.log('La computadora gana la ronda');
            computerScore++;
        }else if(result === 2){
            console.log('El jugador gana la ronda');
            playerScore++;
        }else{
            console.log('Empate, se repite la ronda');
        }
        console.log(playerScore, computerScore); 
    }

    if(playerScore > computerScore){
        console.log('Gana player');
    }else{
        console.log('Gana PC');
    }
*/
}

//game();

const btnPlay = document.querySelector('#btn-play');
btnPlay.addEventListener('click', e => {
    startGame();
})

const btns = Array.from(document.querySelectorAll('.btn'));

btns.forEach(btn => {
    btn.disabled = true;
    btn.addEventListener('click', e => {
        console.log(e.target.id);
    }) 
});