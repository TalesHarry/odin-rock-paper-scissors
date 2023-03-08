const computerOptions = ["Rock", "Paper", "Scissors"];
let playerWins = 0
let computerWins = 0

function getComputerChoice() {
    let position = Math.floor(Math.random() * 3);
    return computerOptions[position]
}

function getPlayerChoice() {
    let playerSelection = prompt("Rock, paper or scissors?").toLowerCase();

    while (playerSelection != "rock" && playerSelection != "paper" && playerSelection != "scissors") {
        playerSelection = prompt("Please enter a valid option.").toLowerCase()
    }

    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)
    return playerSelection
}

function playRound(playerSelection, computerSelection) {
    switch (playerSelection) {
        case "Rock":
            switch (computerSelection){
                case "Rock":
                    console.log("It's a tie.");
                    break; 

                case "Paper":
                    console.log("You lose! Paper beats Rock.");
                    computerWins++
                    break; 
                
                case "Scissors":
                    console.log("You win! Rock beats Scissors.");
                    playerWins++
                    break; 
            }
            break;
        
        case "Paper":
            switch (computerSelection){
                case "Rock":
                    console.log("You win! Paper beats Rock.");
                    playerWins++
                    break; 

                case "Paper":
                    console.log("It's a tie.");
                    break; 
                
                case "Scissors":
                    console.log("You lose! Scissors beats Paper.");
                    computerWins++
                    break; 
            }
            break;
        
        case "Scissors":
            switch (computerSelection){
                case "Rock":
                    console.log("You lose! Rock beats Scissors.");
                    computerWins++
                    break; 

                case "Paper":
                    console.log("You win! Scissors beats Paper.");
                    playerWins++
                    break; 
                
                case "Scissors":
                    console.log("It's a tie.");
                    break; 
            }
            break;
    }
}

function game() {
    
    for (let i = 0; i < 5; i++) {
        playRound(getPlayerChoice(),getComputerChoice())
        console.log(`Round ${i+1} - The current score is: Player ${playerWins} x ${computerWins} Computer`)
     }
    
     if (playerWins > computerWins) {
        console.log("Congrats! You won!")
     } else if (playerWins === computerWins) {
        console.log("It's a tie.")
     } else {
        console.log("Too bad, You lost!")
     }
     
}
//game()