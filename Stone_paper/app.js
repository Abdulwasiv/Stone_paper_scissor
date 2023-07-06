const p1 = document.querySelector("#p1")
const p2 = document.querySelector("#p2")
const p3 = document.querySelector("#p3")
const btn_op = document.querySelector(".btn_op")
let player
let computer
let result

btn_op.forEach(button => button.addEventListener("click" ,()=>
{
 player = button.textContent;
 comp();
 p1.textContent = `player : ${player} `
 p2.textContent = `computer : ${computer} `
 p3.textContent = Win()
}
)
)

function comp()
{
const re = Math.floor(Math.random() * 3 )+ 1 

switch(re)
{
 case 1:
  computer ="ROCK"
  break
 case 2:
  computer ="PAPER" 
   break
 case 3:
  computer ="SCISSOR" 
   break
}
}


function win()
{
 if(player == computer)
 {
  return "draw"
 }
 else if (computer =="ROCK")
 {
  return (player == "PAPER") ? "YOU WIN":"YOU LOSE"
 }
 else if (computer =="PAPER")
 {
  return (player == "SCISSOR" ? "YOU WIN":"YOU LOSE")
 }
 else if (computer =="SCISSOR")
 {
  return (player == "ROCK" ? "YOU WIN":"YOU LOSE")
 }
 
}
