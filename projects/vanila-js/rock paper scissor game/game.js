const paperElement = document.querySelector('#paper')
const rockElement = document.querySelector('#rock')
const scissorsElement = document.querySelector('#scissors')
const userScoreSpan = document.querySelector('.user-score')
const computerScoreSpan = document.querySelector('.computer-score')
const titleScoreH1 = document.querySelector('.body-wrapper > h1')
let userScore = 0;
let computerScore = 0;


console.log(titleScoreH1)

function convertToWord(letter) {
    if (letter === 'r') return 'Rock';
    if (letter === 'p') return 'Paper';
    return 'Scissors';
}

function win(userChoice, computerChoice) {
    userScore++;
    userScoreSpan.innerHTML = userScore
    computerScoreSpan.innerHTML = computerScore;
    const smallUserWord = `<sub>user</sub>`
    const smallCompWord = `<sub>comp</sub>`
    titleScoreH1.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(computerChoice)}${smallCompWord}. You won!`
}

function lose(userChoice, computerChoice) {
    computerScore++;
    userScoreSpan.innerHTML = userScore
    computerScoreSpan.innerHTML = computerScore;
    const smallUserWord = `<sub>user</sub>`
    const smallCompWord = `<sub>comp</sub>`
    titleScoreH1.innerHTML = `${convertToWord(userChoice)}${smallUserWord} loses to ${convertToWord(computerChoice)}${smallCompWord}. You lost!`
}

function draw(userChoice, computerChoice) {
    const smallUserWord = `<sub>user</sub>`
    const smallCompWord = `<sub>comp</sub>`
    titleScoreH1.innerHTML = `${convertToWord(userChoice)}${smallUserWord} equals ${convertToWord(computerChoice)}${smallCompWord}. It's a draw!`
}


function game(userChoice) {
    const computerChoice = getComputerChoice()
    switch (userChoice + computerChoice) {
        case 'pr':
        case 'rs':
        case 'sp':
            win(userChoice, computerChoice)
            break;
        case 'ps':
        case 'rp':
        case 'sr':
            lose(userChoice, computerChoice)
            break;
        case 'pp':
        case 'rr':
        case 'ss':
            draw(userChoice, computerChoice)
            break;
        default:
    }

}

function getComputerChoice() {
    const choices = ['p', 's', 'r']
    const randomIndex = Math.floor(Math.random() * choices.length)
    const randomChoice = choices[randomIndex]
    return randomChoice
}

main();

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