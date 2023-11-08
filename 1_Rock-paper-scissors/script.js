const playButton = document.querySelector(".playBtn"); 
// const playerText = document.querySelector("#playerText");
// const computerText = document.querySelector("#computerText");
// const resultText = document.querySelector("#resultText");
// let player;
// let computer;
// let result;

playButton.addEventListener("click", (event) =>{
    const choices = document.querySelectorAll(".choiceBtn")

    const randomIndex = Math.floor(Math.random() * choices.length);
    const computerChoice = choices[randomIndex].dataset.choice;

    console.log(computerChoice);

    const resultMessage = document.querySelector(".result-message");

    choices.forEach (choice => {
        choice.addEventListener("click", (event) =>{
            const playerChoice = event.target.dataset.choice;
            determineWinner(playerChoice);

            function determineWinner(playerChoice) {
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
        } )
    })
    
});

// add restart button
const replayButton = document.getElementById("replayBtn");
// add event listener to restart button
replayButton.addEventListener("click", () => {
    // Reset game variables
    function replay () {
        const choices = document.querySelectorAll(".choiceBtn")

        const randomIndex = Math.floor(Math.random() * choices.length);
        const computerChoice = choices[randomIndex].dataset.choice;

        console.log(computerChoice);

        const resultMessage = document.querySelector(".result-message");

        choices.forEach (choice => {
            choice.addEventListener("click", (event) =>{
                const playerChoice = event.target.dataset.choice;
                determineWinner(playerChoice);

                function determineWinner(playerChoice) {
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
            } )
        })
    }
    console.log("replay");

})

// TODO: Have three buttons that the player can press to pick their weapon of choice (feel free to use emoji's for this)
// TODO: Have a play button to have the computer pick one randomly
// TODO: Announce the winner
//     - No alert box, add a message to your html
//     - Possible outcomes: draw (when both chose the same thing) or player won/lost
// TODO: Figure out a way to know when the "play" button was clicked (tip: you'll need `events` in JavaScript for that, and you'll need to `handle` those)
//      4. Next up, we want to determine the computer's choice
//         - How many choices does the computer have? What can be a suitable datatype to store multiple things?
//         - How can you select a random element from these choices? The math options in JavaScript might help you here