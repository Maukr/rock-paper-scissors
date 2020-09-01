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
function endGame(){
    const btns = Array.from(document.querySelectorAll('.btn'));

    btns.forEach(btn => {
        btn.classList.remove('btn-hover');
        btn.disabled = true; 
    });
    resultTitle.innerHTML = '-';
}
function startGame(){

    const btns = Array.from(document.querySelectorAll('.btn'));

    btns.forEach(btn => {
        btn.classList.add('btn-hover');
        btn.disabled = false; 
    });
}
const btnPlay = document.querySelector('#btn-play');
btnPlay.addEventListener('click', e => {
    btnPlay.disabled = true;
    startGame();
});

let playerScore = 0;
let computerScore = 0;

const resultTitle= document.querySelector('#result');

const player = document.querySelector('#player');
const bot = document.querySelector('#bot');
const winner = document.querySelector('#winner');

const btns = Array.from(document.querySelectorAll('.btn'));
btns.forEach(btn => {
    btn.disabled = true;
    btn.addEventListener('click', e => {

        if(playerScore < 3 && computerScore < 3){
            let playerSelection = e.target.id;
            let computerSelection = computerPlay();

            let result = playRound(playerSelection, computerSelection);

            console.log(`Jugador: ${playerSelection}, Computadora: ${computerSelection}`);


            if(result === 1){
                resultTitle.innerHTML = 'La BOT gana la ronda';
                winner.innerHTML = `BOT`;
                computerScore++;
                
                player.innerHTML = `${computerSelection} - ${computerScore} `;
            }else if(result === 2){
                resultTitle.innerHTML = 'El Jugador gana la ronda';
                winner.innerHTML = `Jugador`;

                playerScore++;
                bot.innerHTML = `${playerSelection} - ${playerScore} `;
            }else{
                resultTitle.innerHTML = 'Empate, se repite la ronda';
                winner.innerHTML = `-`;
            }
            console.log(playerScore, computerScore); 
            bot.innerHTML = `${computerSelection} - ${computerScore} `;
            player.innerHTML = `${playerSelection} - ${playerScore} `;
        }
        if(!(playerScore < 3 && computerScore < 3)){
            if(playerScore > computerScore){
                resultTitle.innerHTML = `Gana le jugador ${playerScore} a ${computerScore}`;          
            }else{
                resultTitle.innerHTML = `Gana el BOT ${computerScore} a ${playerScore}`;       
            }
            playerScore = 0;
            computerScore = 0;
            btnPlay.disabled = false;
            endGame();
        }
        
    }) 
});



