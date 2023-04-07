const paperElement = document.querySelector('#paper')
const rockElement = document.querySelector('#rock')
const scissorsElement = document.querySelector('#scissors')
let userScore = 0;
let computerScore = 0;
const userScoreElement = document.querySelector('.score-board > .user-score')
const compScoreElement = document.querySelector('.score-board > .computer-score')
const resultElement = document.querySelector('.body-wrapper > h1')


function getComputerChoice() {
    const choices = ['p', 'r', 's'];
    const randomIndex = Math.floor(Math.random() * choices.length)
    const randomChoice = choices[randomIndex]
    return randomChoice
}

function convertToWord(word) {
    if (word === 'p') return 'Paper';
    if (word === 'r') return 'Rock';
    if (word === 's') return 'Scissors';
}

function win(userChoice, computerChoice) {
    userScore++
    console.log('You won!')
    userScoreElement.innerHTML = userScore
    const smallUserWord = '<sub>user</sub>'
    const smallCompWord = '<sub>comp</sub>'
    resultElement.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(computerChoice)}${smallCompWord}. You win!`
}

function lose(userChoice, computerChoice) {
    console.log('You lost!')
    computerScore++
    compScoreElement.innerHTML = computerScore
    const smallUserWord = '<sub>user</sub>'
    const smallCompWord = '<sub>comp</sub>'
    resultElement.innerHTML = `${convertToWord(userChoice)}${smallUserWord} loses to ${convertToWord(computerChoice)}${smallCompWord}. You lose!`
}


function draw(userChoice, computerChoice) {
    console.log('draw');
    const smallUserWord = '<sub>user</sub>'
    const smallCompWord = '<sub>comp</sub>'
    resultElement.innerHTML = `${convertToWord(userChoice)}${smallUserWord} equals ${convertToWord(computerChoice)}${smallCompWord}.It's a draw!`
}

function game(userChoice) {
    const computerChoice = getComputerChoice()
    console.log(userChoice + computerChoice);
    switch (userChoice + computerChoice) {
        case 'pr':
        case 'rs':
        case 'sp':
            win(userChoice, computerChoice);
            break;
        case 'ps':
        case 'rp':
        case 'sr':
            lose(userChoice, computerChoice);
            break;
        case 'pp':
        case 'rr':
        case 'ss':
            draw(userChoice, computerChoice);
            break;
        default:
    }
}
function main() {
    paperElement.onclick = () => {
        game('p')
    }


    rockElement.onclick = () => {
        game('r')
    }

    scissorsElement.onclick = () => {
        game('s')
    }
}

main();
