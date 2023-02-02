const computerOptions = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
    position = Math.floor(Math.random() * 3);
    return computerOptions[position]
}
