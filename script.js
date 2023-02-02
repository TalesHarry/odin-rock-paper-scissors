const computerOptions = ["Rock", "Paper", "Scissors"];

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
                    return "It's a tie."

                case "Paper":
                    return "You lose! Paper beats Rock."
                
                case "Scissors":
                    return "You win! Rock beats Scissors."
            }
            break;
        
        case "Paper":
            switch (computerSelection){
                case "Rock":
                    return "You win! Paper beats Rock."

                case "Paper":
                    return "It's a tie."
                
                case "Scissors":
                    return "You lose! Scissors beats Paper."
            }
            break;
        
        case "Scissors":
            switch (computerSelection){
                case "Rock":
                    return "You lose! Rock beats Scissors."

                case "Paper":
                    return "You win! Scissors beats Paper."
                
                case "Scissors":
                    return "It's a tie."
            }
            break;
    }
}
