function getComputerChoice(){
    n = String(Math.random()*1000%3)[0]
    if (n == 2) {
        return 'rock'
    } else if (n == 1) {
        return 'paper'
    } else if (n == 0) {
        return 'scissors'
    } else {
        return 'computer brain broke'
    }
}

function getPlayerSelection() {
    choice = prompt('Rock Paper Scissors?')
    t = choice.toLowerCase()
    if (t == 'rock' || t == 'paper' || t == 'scissors'){
        return t
    }
    else {
        alert('Wrong input')
        return 'nothing'
    }
}

function playRound(pl,pc) {
    console.log('Player chose : "' + pl)
    console.log('Computer chose : "' + pc)
    if (pc === pl) {
        return 'Its a tie!'
    } else if (pc === 'rock' && pl === 'paper' ) {
        return 'Player has won!'
    } else if (pc === 'rock' && pl === 'scissors' ) {
        return 'Computer has won!'
    } else if (pc === 'paper' && pl === 'scissors' ) {
        return 'Player has won!'
    } else if (pc === 'paper' && pl === 'rock' ) {
        return 'Computer has won!'
    } else if (pc === 'scissors' && pl === 'paper' ) {
        return 'Computer has won!'
    } else if (pc === 'scissors' && pl === 'rock' ) {
        return 'Player has won!'
    } else {
        return 'Game did not happen'
    }
} 

const playerSelection = getPlayerSelection();
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection))
