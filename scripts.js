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
        return 'nothing'
    }
}

function playRound(pl,pc) {
    console.log('Player chose : "' + pl)
    console.log('Computer chose : "' + pc)
    if (pc === pl) {
        return 'Round ended in a tie!'
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
        return 'Round did not happen'
    }
} 

function playGame(){
    console.log('Game starts!')
    let playerScore = 0, computerScore = 0
    for (let i = 0; i < 5; i++) {
        console.log('Current score : Player', playerScore, computerScore,' Computer')
        winner = playRound(getPlayerSelection(),getComputerChoice())
        console.log(winner)
        if (winner === 'Player has won!'){
            playerScore += 1
        } else if (winner === 'Computer has won!'){
            computerScore += 1
        }
    }
    console.log('Final score :', playerScore, computerScore)
    if (playerScore > computerScore) {
        console.log('Player has won the game!')
    } else if (computerScore > playerScore) {
        console.log('Computer has won the game!')
    } else {
        console.log('Game has ended in a tie!')
    }
}

playGame()
