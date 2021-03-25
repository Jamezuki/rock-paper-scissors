let roundCount = 0;
let playerScore = 0;
let computerScore = 0;

const computerImg = document.getElementById('computer-img');
const resetButton = document.getElementById('reset-button');
const rockButton = document.getElementById('rock-button');
const paperButton = document.getElementById('paper-button');
const scissorsButton = document.getElementById('scissors-button');
const rounds = document.querySelectorAll('.rounds');
const results = document.querySelectorAll('.results');
const result = document.getElementById('result');

rockButton.addEventListener('click', (e) => {
    control('rock');
});

paperButton.addEventListener('click', (e) => {
    control('paper');
});
scissorsButton.addEventListener('click', (e) => {
    control('scissors');
});

resetButton.addEventListener('click', (e) => {
    console.clear();
    roundCount = 0;
    playerScore = 0;
    computerScore = 0;
    computerImg.setAttribute('src', 'images/question.png');
    rounds.forEach(element => element.textContent = '');
    results.forEach(element => element.textContent = '');
    result.textContent = '';
});

function control(playerSelection) {
    if (roundCount < 4) {
        playRound(playerSelection, computerPlay());
    } else if (roundCount == 4) {
        playRound(playerSelection, computerPlay());
        if (playerScore > computerScore) {
            result.textContent = 'You Win!';
        } else if (playerScore < computerScore) {
            result.textContent = 'You Lose!';
        } else {
            result.textContent = 'It\'s a Tie!';
        }
    }
}

function playRound(playerSelection, computerSelection) {
    roundCount++;
    let roundResult = document.createElement('tr');
    switch (playerSelection) {
        case 'rock':
            switch (computerSelection) {
                case 'rock':
                    rounds[roundCount - 1].textContent = roundCount;
                    results[roundCount - 1].textContent = 'Tie';
                    console.log(`Round ${roundCount}: Tie`);
                    return;
                case 'paper':
                    computerScore++;
                    rounds[roundCount - 1].textContent = roundCount;
                    results[roundCount - 1].textContent = 'Lose';
                    console.log(`Round ${roundCount}: Lose`);
                    return;
                case 'scissors':
                    playerScore++;
                    rounds[roundCount - 1].textContent = roundCount;
                    results[roundCount - 1].textContent = 'Win';
                    console.log(`Round ${roundCount}: Win`);
                    return;
            }
        case 'paper':
            switch (computerSelection) {
                case 'rock':
                    playerScore++;
                    rounds[roundCount - 1].textContent = roundCount;
                    results[roundCount - 1].textContent = 'Win';
                    console.log(`Round ${roundCount}: Win`);
                    return;
                case 'paper':
                    rounds[roundCount - 1].textContent = roundCount;
                    results[roundCount - 1].textContent = 'Tie';
                    console.log(`Round ${roundCount}: Tie`);
                    return;
                case 'scissors':
                    computerScore++;
                    rounds[roundCount - 1].textContent = roundCount;
                    results[roundCount - 1].textContent = 'Lose';
                    console.log(`Round ${roundCount}: Lose`);
                    return;
            }
        case 'scissors':
            switch (computerSelection) {
                case 'rock':
                    computerScore++;
                    rounds[roundCount - 1].textContent = roundCount;
                    results[roundCount - 1].textContent = 'Lose';
                    console.log(`Round ${roundCount}: Lose`);
                    return;
                case 'paper':
                    playerScore++;
                    rounds[roundCount - 1].textContent = roundCount;
                    results[roundCount - 1].textContent = 'Win';
                    console.log(`Round ${roundCount}: Win`);
                    return;
                case 'scissors':
                    rounds[roundCount - 1].textContent = roundCount;
                    results[roundCount - 1].textContent = 'Tie';
                    console.log(`Round ${roundCount}: Tie`);
                    return;
            }
    }
}

let computerPlay = () => {
    switch (getRndInteger(1, 3)) {
        case 1:
            computerImg.setAttribute('src', 'images/rock.png');
            return 'rock';
        case 2:
            computerImg.setAttribute('src', 'images/paper.png');
            return 'paper';
        case 3:
            computerImg.setAttribute('src', 'images/scissors.png');
            return 'scissors';
    }
};

/* returns a random number between min and max (both included) */
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
