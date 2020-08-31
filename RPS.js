
//query selector returns an array. it accesses the first object in 
	//the arrary to get your buttons.
//query selector returns an array of all matches, knowing only one match is going to exists, 
	//we use [0] to get the one element located at index 0.
// Rock.addEventListener("click", function(){
// alert("Rock");
// });

// Paper.addEventListener("click", function(){
// alert("Paper");
// });

// Scissors.addEventListener("click", function(){
// alert("Scissors");
// });


// ---------------------------
// https://www.youtube.com/watch?v=qWPtKtYEsN4&t=1234s
// ---------------------------

var playerScore = 0;
var computerScore= 0;
const winnerScores = [0,0];

const Rock = document.querySelectorAll("#Rock")[0];
const Paper = document.querySelectorAll("#Paper")[0];
const Scissors = document.querySelectorAll("#Scissors")[0];

const message = document.querySelector(".message");
const scoreDiv = document.querySelector(".score");
const status = document.querySelector(".status");



var buttons = document.querySelectorAll("button");


//add event listeners to buttons
for (let i = 0 ; i < buttons.length ; i++){
    buttons[i].addEventListener('click', playGame);
}

//Start the Game
function playGame(e){
    //setup player's selection

    let player = e.target.innerText.trim();

    //setup a random number to select for computer
    //selects a number between 0 and 1 (1 not-inclusive)
    let computer = Math.random();
    
    //if computerSelection is less than .34, computer selects Rock
    if (computer < .34){
        computer = "Rock";
    } 
    else if (computer <= .67){
        computer = "Paper";
    } 
    else {
        computer = "Scissors";
    }
    

    //setup a function to compare winners and return result
    let score = checkWinner(player, computer);
  
    //output scores to the DOM
    if (score === "Player"){
        score += " Wins!";
        //update score
        winnerScores[0]++;
    }

    if (score === "Computer"){
        score += " Wins!";
        winnerScores[1]++;
    }

    if (score === "Draw"){
        score += ". It\'s a tie!"
    }

    //output score into Score DIV
    scoreDiv.innerHTML = "Player: [ " + winnerScores[0]+ " ] Computer: [ " + winnerScores[1] + " ]";

    //output player and computer's selections
    messenger("Player: <strong>" + player + "</strong> Computer: <strong>" + computer + "</strong><br>" + score);

    //displays the end result status
    document.getElementById('status').innerHTML = "<p>You played <strong>" + player + "</strong>. The computer played <strong>" + computer + "</strong>.</p>";
}

function messenger(selectionMessage){
    message.innerHTML = selectionMessage;
}

function checkWinner(player, computer){

    //Checking for a tie
    if (player === computer){
        return "Draw";
    }

    //Check for Rock
    if (player === "Rock"){
        if (computer === "Paper"){
            return "Computer";
        } 
        else {
            return "Player";
        }
    }

    //Check for Paper
    if (player === "Paper"){
        if (computer === "Scissors"){
            return "Computer";
        } 
        else {
            return "Player";
        }
    }

    //Check for Scissors
    if (player === "Scissors"){
        if (computer === "Rock"){
            return "Computer";
        } 
        else {
            return "Player";
        }
    }
   document.getElementById('playerScore').innerHTML = playerScore;
   document.getElementById('computerScore').innerHTML = computerScore;
}
