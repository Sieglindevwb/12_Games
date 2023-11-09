const playButton = document.querySelector(".playBtn"); 
// const playerText = document.querySelector("#playerText");
// const computerText = document.querySelector("#computerText");
// const resultText = document.querySelector("#resultText");
// let player;
// let computer;
// let result;

const choices = document.querySelectorAll(".choiceBtn");

function determineWinner(playerChoice, computerChoice) {
    const resultMessage = document.querySelector(".result-message");
    if (playerChoice === computerChoice) {
        resultMessage.innerHTML = "It's a draw!";
    } else if
    ((playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")) {
    // Player wins
    // Update the result message
    resultMessage.innerHTML = "You win!";
    } else {
    // Computer wins
    // Update the result message
    resultMessage.innerHTML = "Computer wins!";
    }
}

// Function to handle player choice and determine winner
function handlePlayerChoice(event) {
    const playerChoice = event.target.dataset.choice;
    const randomIndex = Math.floor(Math.random() * choices.length);
    const computerChoice = choices[randomIndex].dataset.choice;

    console.log(computerChoice);

     // Remove existing event listeners for player choices
     choices.forEach(choice => {
        choice.removeEventListener("click", handlePlayerChoice);
    });

    determineWinner(playerChoice, computerChoice);

    // Reattach event listeners after determining the winner
    choices.forEach(choice => {
        choice.addEventListener("click", handlePlayerChoice);
    });
}

function resetGame() {
    const resultMessage = document.querySelector(".result-message");
    resultMessage.innerHTML = "";
}

// add restart button
const replayButton = document.getElementById("replayBtn");
// add event listener to restart button
replayButton.addEventListener("click", () => {
    resetGame();
})

playButton.addEventListener("click", (event) =>{
    // Call handlePlayerChoice directly when the play button is clicked
    handlePlayerChoice(event);
});





// Have three buttons that the player can press to pick their weapon of choice (feel free to use emoji's for this)
// Have a play button to have the computer pick one randomly
// Announce the winner
//     - No alert box, add a message to your html
//     - Possible outcomes: draw (when both chose the same thing) or player won/lost
// Figure out a way to know when the "play" button was clicked (tip: you'll need `events` in JavaScript for that, and you'll need to `handle` those)
//      4. Next up, we want to determine the computer's choice
//         - How many choices does the computer have? What can be a suitable datatype to store multiple things?
//         - How can you select a random element from these choices? The math options in JavaScript might help you here
// Add replaybutton to the page 
// TODO: When game ends the replay button should appear