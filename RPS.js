var playerScore = 0;
var computerScore = 0;


//query selector returns an array. it accesses the first object in 
	//the arrary to get your buttons.
//query selector returns an array of all matches, knowing only one match is going to exists, 
	//we use [0] to get the one element located at index 0.


const Rock = document.querySelectorAll("#Rock")[0];
const Paper = document.querySelectorAll("#Paper")[0];
const Scissors = document.querySelectorAll("#Scissors")[0];

// Rock.addEventListener("click", function(){
// alert("Rock");
// });

// Paper.addEventListener("click", function(){
// alert("Paper");
// });

// Scissors.addEventListener("click", function(){
// alert("Scissors");
// });
const message = document.querySelector('.message');
const score = document.querySelector('.score');
const winnerScores = [0,0];
var buttons = document.querySelectorAll('button');
console.log("it worked") //put here?

//add event listeners to buttons
for ( let i = 0 ; i < buttons.length ; i++){
    buttons[i].addEventListener('click', playGame);
}
function playGame(e){
    //setup player's selection
    let playerSelection = e.target.innerText;
    
    //setup a random number to select for computer
    //selects a number between 0 and 1 (1 not-inclusive)
    let computerSelection = Math.random();

    //if computerSelection is less than .34, computer selects Rock
    if (computerSelection < .34){
        computerSelection = 'Rock';
    } else if (computerSelection <= .67){
        computerSelection = 'Paper';
    } else {
        computerSelection = 'Scissors';
    }
    
    //setup a function to compare winners and return result
    let result = checkWinner(playerSelection, computerSelection);

    //output scores to the DOM
    if (result === 'Player'){
        result += ' wins!';
        //update score
        winnerScores[0]++;
    }

    if (result === 'Computer'){
        result += ' wins!';
        winnerScores[1]++;
    }

    if (result === 'Draw'){
        result += '. It\'s a tie!'
    }

    //output score into Score DIV
    score.innerHTML = 'Player: [ ' + winnerScores[0]+ ' ] Computer: [ ' + winnerScores[1] + ' ]';

    //output player and computer's selections
    messenger('Player: <strong>' + playerSelection + '</strong> Computer: <strong>' + computerSelection + '</strong><br>' + result);
}

function messenger(selectionMessage){
    message.innerHTML = selectionMessage;
}

function checkWinner(player, computer){
    if (player === computer){
        return 'Draw';
    }

    if (player === 'Rock'){
        if(computer === 'Paper'){
            return 'Computer';
        } else {
            return 'Player';
        }
    }

    if (player === 'Paper'){
        if (computer === 'Scissors'){
            return 'Computer';
        } else {
            return 'Player';
        }
    }

    if (player === 'Scissors'){
        if (computer === 'Rock'){
            return 'Computer';
        } else {
            return 'Player';
        }
   }
}