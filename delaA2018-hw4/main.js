// Arrays for each choice to 'shuffle'
var compSelectedRock = ['rock.PNG', 'scissors.PNG', 'paper.PNG', 'rock.PNG', 'paper.PNG', 'scissors.PNG', 'paper.PNG', 'rock.PNG', 'scissors.PNG', 'rock.PNG'];
var compSelectedPaper = ['paper.PNG', 'rock.PNG', 'scissors.PNG', 'paper.PNG', 'scissors.PNG', 'rock.PNG', 'scissors.PNG', 'paper.PNG', 'rock.PNG', 'paper.PNG'];
var compSelectedScissors = ['scissors.PNG', 'paper.PNG', 'rock.PNG', 'scissors.PNG', 'rock.PNG', 'paper.PNG', 'rock.PNG', 'scissors.PNG', 'paper.PNG', 'scissors.PNG'];

// Global variables for scores
var computerScore = 0;
var playerScore = 0;

const rockImage = document.getElementById("optionRock");
const paperImage = document.getElementById("optionPaper");
const scissorsImage = document.getElementById("optionScissors");

// Add console log for debugging
function rockPlayed() {
    play(1);
}
function paperPlayed() {
    play(2);
}
function scissorsPlayed() {
    play(3);
}

function play(playerChoice){
    if(playerChoice == 1){
        console.log("U have selected 1");
        rockImage.style = 'border: 5px solid black';
        paperImage.style = 'border: 1px solid grey;';
        scissorsImage.style = 'border: 1px solid grey;';

        computerOption(playerChoice);
        //rockImage.classList.add('player-choice');
    }else if (playerChoice == 2){
        paperImage.style = 'border: 5px solid black';
        rockImage.style = 'border: 1px solid grey;';
        scissorsImage.style = 'border: 1px solid grey;';

        computerOption(playerChoice);

    }else if(playerChoice == 3){
        scissorsImage.style = 'border: 5px solid black';
        paperImage.style = 'border: 1px solid grey;';
        rockImage.style = 'border: 1px solid grey;';
        
        computerOption(playerChoice);

    }
}

rockImage.addEventListener('click', rockPlayed);
paperImage.addEventListener('click', paperPlayed);
scissorsImage.addEventListener('click', scissorsPlayed);

function computerOption(playerChoice) {
    // Arrays for each choice
    var choices = [compSelectedRock, compSelectedPaper, compSelectedScissors];

    // Randomly select one of the arrays
    var randomIndex = Math.floor(Math.random() * choices.length);
    var selectedChoice = choices[randomIndex];

    var counter = 0;

    // Set interval to display images every 0.5 seconds
    var interval = setInterval(function() {
        // Display the image at the current index
        document.getElementById("optionComputer").src = "Images/" + selectedChoice[counter];
        counter++;

        // Check if reached the end of the array
        if (counter === selectedChoice.length) {
            clearInterval(interval);
            setTimeout(function() {
                document.getElementById("optionComputer").src = "Images/" + selectedChoice[selectedChoice.length - 1];
                
                // Call result function after the animation ends
                result(selectedChoice[selectedChoice.length - 1], playerChoice);
            }, 250);
        }
    }, 250);
}

function result(selectedChoice, playerChoice) {
    if (
        // when the computer wins
        (selectedChoice === 'rock.PNG' && playerChoice === 3) || // Computer rock beats scissors
        (selectedChoice === 'paper.PNG' && playerChoice === 1) || // Computer paper beats rock
        (selectedChoice === 'scissors.PNG' && playerChoice === 2) // Computer scissors beats paper
    ) {
        document.getElementById('result-tag').textContent = "Results: You Lose!"
        computerScore++;
    } else if (
        // When the player wins
        (selectedChoice === 'rock.PNG' && playerChoice === 2) || // Player rock loses to paper
        (selectedChoice === 'paper.PNG' && playerChoice === 3) || // Player paper loses to scissors
        (selectedChoice === 'scissors.PNG' && playerChoice === 1) // Player scissors loses to rock
    ) {
        document.getElementById('result-tag').textContent = "Results: You Win!"
        playerScore++;
    } else {
        document.getElementById('result-tag').textContent = "Results: Tie!"
    }
    
}

// Reset Button Event Listener
document.getElementById("resetBtn").addEventListener('click', resetGame);

// Function to reset display and scores
function resetGame() {
    playerScore = 0;
    computerScore = 0;
    //updateScores();
    
    // reverts css display
    rockImage.style = 'border: 1px solid grey';
    paperImage.style = 'border: 1px solid grey;';
    scissorsImage.style = 'border: 1px solid grey;';
    document.getElementById('optionComputer').src = "Images/question-mark.PNG";
    
    document.getElementById('result-tag').textContent = "Results:"

}