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

let playerScore = 0
let computerScore = 0

function playRound(pl,pc) {
    
    console.log('Player chose : "' + pl)
    console.log('Computer chose : "' + pc)
    if (pc === pl) {
        return 'Round ended in a tie! The computer has picked ' + pc
    } else if (pc === 'rock' && pl === 'paper' ) {
        playerScore += 1
        return 'Player has won! The computer has picked ' + pc
    } else if (pc === 'rock' && pl === 'scissors' ) {
        computerScore += 1
        return 'Computer has won!  The computer has picked ' + pc
    } else if (pc === 'paper' && pl === 'scissors' ) {
        playerScore += 1
        return 'Player has won!  The computer has picked ' + pc
    } else if (pc === 'paper' && pl === 'rock' ) {
        computerScore += 1
        return 'Computer has won! The computer has picked ' + pc
    } else if (pc === 'scissors' && pl === 'paper' ) {
        computerScore += 1
        return 'Computer has won! The computer has picked ' + pc
    } else if (pc === 'scissors' && pl === 'rock' ) {
        playerScore += 1
        return 'Player has won! The computer has picked ' + pc
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
const result = document.querySelector('.result')
const score = document.querySelector('.score')

const rockButton = document.querySelector('.rock')
rockButton.addEventListener('click', () => {
    result.textContent = playRound('rock',getComputerChoice())
})
const paperButton = document.querySelector('.paper')
paperButton.addEventListener('click', () => {
    result.textContent = playRound('paper',getComputerChoice())
})
const scissorsButton = document.querySelector('.scissors')
scissorsButton.addEventListener('click', () => {
    result.textContent = playRound('scissors',getComputerChoice())
})
const buttonPress = document.querySelectorAll('button')

let toggle = 0
let winner = ''
buttonPress.forEach(button => {
    button.addEventListener('click', () => {
        score.textContent = `Score:  You ${playerScore} Computer ${computerScore}`
        if (toggle ===0 && (playerScore === 5 || computerScore === 5)){
            const bodySelect = document.querySelector('body')
            const newDiv = document.createElement('div')
            if (playerScore > computerScore){
                winner = 'Player'
            } else {winner = 'Computer'}
            newDiv.textContent = `Game Over. ${winner}, has won.`
            bodySelect.appendChild(newDiv)
            toggle =1
            
        } 
    })
})








// for (let i = 0; i < 1; i++) {
//     console.log('Current score : Player', playerScore, computerScore,' Computer')
//     winner = 0
//     if (winner === 'Player has won!'){
//         playerScore += 1
//     } else if (winner === 'Computer has won!'){
//         computerScore += 1
//     }
// }
// console.log('Final score :', playerScore, computerScore)
// if (playerScore > computerScore) {
//     console.log('Player has won the game!')
// } else if (computerScore > playerScore) {
//     console.log('Computer has won the game!')
// } else {
//     console.log('Game has ended in a tie!')
// }
