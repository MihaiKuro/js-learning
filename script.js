
    let playerScore = 0;
    let computerScore = 0;
   
    const playRound = (playerSelection) => {
        const computerSelection = computerChoice();
        console.log('You threw: ' + playerSelection);
        console.log('The computer threw:' + computerSelection);
        console.log(determineWinner(playerSelection, computerSelection));
        const winner = determineWinner(playerSelection, computerSelection);
        if(winner === 'You win!'){
          playerScore += 1;
        } else if(winner === 'Computer wins!'){
          computerScore += 1;
        }
        updateScores(winner);
        updateChoices(playerSelection, computerSelection);
      }
       
computerChoice = () => {
    let randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
      case 0:
        return 'rock';
      case 1:
        return 'paper';
      case 2:
        return 'scissors';
    }
  }

  function playerChoice() {
    let choice = prompt('Choose rock, paper, or scissors');
    if (choice === 'rock' || choice === 'paper' || choice === 'scissors') {
      return choice;
    } else {
      alert('Invalid choice!');
      return playerChoice();
    }
    
  }
  const determineWinner = (playerChoice ,computerChoice) =>{
    if (playerChoice === computerChoice) {
      return 'The game is a tie!';
    }
    if (playerChoice === 'rock') {
      if (computerChoice === 'paper') {
        return 'Computer wins!';
      } else {
        return 'You win!';
      }
    }
    if (playerChoice === 'paper') {
      if (computerChoice === 'scissors') {
        return 'Computer wins!';
      } else {
        return 'You win!';
      }
    }
    if (playerChoice === 'scissors') {
      if (computerChoice === 'rock') {
        return 'Computer wins!';
      } else {
        return 'You win!';
      }
    }
  }
  
//uUI
//selecting DOM Elements
const scoreInfo = document.querySelector('.scoreboard-info');
const scoreMessage = document.querySelector('.scoreboard-message');
const playerScorePara = document.querySelector('#player-score'); 
const computerScorePara = document.querySelector('#computer-score');
const rockButton = document.querySelector('#rock');
const paperButton = document.querySelector('#paper');
const scissorsButton = document.querySelector('#scissors');

//Event Listeners 
rockButton.addEventListener('click', () => handleClick('rock'));
paperButton.addEventListener('click', () => handleClick('paper'));
scissorsButton.addEventListener('click', () => handleClick('scissors'));

const handleClick = (choice) => {
    playRound(choice);
}

const updateScores = (winner) => {
    if(winner === 'You win!'){
        scoreInfo.textContent = 'You win!';
    } else if(winner === 'Computer wins!'){
        scoreInfo.textContent = 'Computer wins!';
    } else {
        scoreInfo.textContent = 'The game is a tie!';
    }
    playerScorePara.textContent = `Player: ${playerScore}`;
    computerScorePara.textContent = `Computer: ${computerScore}`;
    }

const updateScoreMessage = (winner, playerSelection, computerSelection) => {
    if(winner === 'You win!'){
        scoreMessage.textContent = `${playerSelection} beats ${computerSelection}. You win!`;
    } else if(winner === 'Computer wins!'){
        scoreMessage.textContent = `${computerSelection} beats ${playerSelection}. Computer wins!`;
    } else {
        scoreMessage.textContent = `${playerSelection} ties ${computerSelection}. It's a tie!`;
    }
    }


function updateChoices(playerSelection, computerSelection) {
    const playerSign = document.querySelector('#player-sign')
    const computerSign = document.querySelector('#computer-sign')
  switch (playerSelection) {
    case 'rock':
      playerSign.textContent = '✊'
      break
    case 'paper':
      playerSign.textContent = '✋'
      break
    case 'scissors':
      playerSign.textContent = '✌'
      break
  }

  switch (computerSelection) {
    case 'rock':
      computerSign.textContent = '✊'
      break
    case 'paper':
      computerSign.textContent = '✋'
      break
    case 'scissors':
      computerSign.textContent = '✌'
      break
  }
}



