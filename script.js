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
