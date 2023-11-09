const choices = document.querySelectorAll(".choiceBtn");
const playButton = document.querySelector(".playBtn");
const replayButton = document.getElementById("replayBtn");
replayButton.style.display = "none";
const resultMessage = document.querySelector(".result-message");

let hasPlayerChosen = false;
let playerChoice = null;

function determineWinner(playerChoice, computerChoice) {
    if (!hasPlayerChosen) {
        resultMessage.innerHTML = "Please select an icon first.";
        return;
    }

    if (playerChoice === computerChoice) {
        resultMessage.innerHTML = "It's a draw!";
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        resultMessage.innerHTML = "You win!";
    } else {
        resultMessage.innerHTML = "Computer wins!";
    }

    replayButton.style.display = "block";
}

function handlePlayerChoice(event) {
    playerChoice = event.target.dataset.choice;
    hasPlayerChosen = true;
}

function resetGame() {
    hasPlayerChosen = false;
    playerChoice = null;
    resultMessage.innerHTML = "";
    replayButton.style.display = "none";
}

function initializeGame() {
    // Attach event listeners for player choices
    choices.forEach(choice => {
        choice.addEventListener("click", handlePlayerChoice);
    });

    // Attach event listener for replay button
    replayButton.addEventListener("click", resetGame);

    // Attach event listener for play button
    playButton.addEventListener("click", () => {
        // Ensure the player has made a choice before clicking play
        if (hasPlayerChosen && playerChoice !== null) {
            const randomIndex = Math.floor(Math.random() * choices.length);
            const computerChoice = choices[randomIndex].dataset.choice;
            determineWinner(playerChoice, computerChoice);
        } else {
            // Show a message to prompt the player to make a choice
            resultMessage.innerHTML = "Please select an icon first.";
        }
    });
}

// Call initializeGame function to set up the initial game state
initializeGame();

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
// When game ends the replay button should appear

