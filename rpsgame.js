//rock paper scissors


const choices = ["rock", "paper", "scissors"];
const playerdisplay = document.getElementById("playerdisplay");
const computerdisplay = document.getElementById("computerdisplay");
const resultdisplay = document.getElementById("resultdisplay");
const playerscoredisplay = document.getElementById("playerscoredisplay");
const computerscoredisplay = document.getElementById("computerscoredisplay");
let playerscore = 0;
let computerscore = 0;
function playgame(playerchoice){
    const computerchoice = choices[Math.floor(Math.random()*3)];
    let result = "";
    console.log(computerchoice);

    if(playerchoice === computerchoice){
        result = "It's a tie!";
    }
    else{
        switch(playerchoice){
            case "rock":
                result = (computerchoice === "scissors") ? "You Win!" : "You Lose!";
                break;
            
            case "paper":
                result = (computerchoice === "rock") ? "You Win!" : "You Lose!";
                break;
            case "scissors":
                result = (computerchoice === "paper") ? "You Win!" : "You Lose!";
                break;
            
        }

    }
    playerdisplay.textContent = `player: ${playerchoice}`
    computerdisplay.textContent = `computer: ${computerchoice}`
    resultdisplay.textContent = result;
    resultdisplay.classList.remove("greentext", "redtext");
    switch(result){
        case "You Win!":
            resultdisplay.classList.add("greentext");
            playerscore++;
            playerscoredisplay.textContent = playerscore;
            break;
        case "You Lose!":
            resultdisplay.classList.add("redtext");
            computerscore++;
            computerscoredisplay.textContent = computerscore;
            break;

    }

}
