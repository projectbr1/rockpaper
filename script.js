function getComputerChoice()
{
 let array = ["Rock", "Paper","Scissors"]
 return array[Math.floor(Math.random() * 3)];
}
console.log(getComputerChoice())