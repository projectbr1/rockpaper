function getComputerChoice()
{
 let array = ["rock", "paper","scissor"]
 return array[Math.floor(Math.random() * 3)]
}
getComputerChoice()

let input = "Rock";
const computerSelection = getComputerChoice();
const playerSelection = input.toLowerCase()
function playRound(playerSelection, computerSelection)
{ 

 if (playerSelection === "rock" && computerSelection === "rock")
 {
    return "Both have rock, remis"
 }else if (playerSelection === "paper" && computerSelection === "paper")
 {
    return "Both have paper, remis"
 }else if (playerSelection === "scissor" && computerSelection === "scissor")
 {
    return "Both have scissor, remis"
 }else if (playerSelection === "rock" && computerSelection === "scissor")
 {
    return "You have won! Rock beats scissor"
 }else if (playerSelection === "paper" && computerSelection === "rock")
 {
    return "You have won! Paper beats Rock"
 }else if (playerSelection === "scissor" && computerSelection === "paper")
 {
    return "You have won! Scissor beats Paper"
 }else if(playerSelection === "scissor" && computerSelection === "rock")
 {
    return "The computer has won! Rock beats Scissor"
 }else if(playerSelection === "rock" && computerSelection === "paper")
 {
    return "The computer has won! Paper beats Rock"
 }else if(playerSelection === "paper" && computerSelection === "scissor")
 {
    return "The computer has won! Scissor beats Paper"
 }
 

}
console.log(playRound(playerSelection,computerSelection))
