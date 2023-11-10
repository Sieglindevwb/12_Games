const suits = ["Spades", "Hearts", "Diamonds", "Clubs"]
const values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"]

const drawCard = document.querySelector(".draw-card");
const messageBtn = document.querySelector(".message-btn");

function handleDrawCard () {
     // Use the confirm function to ask the user if they want to draw a card
     const userResponse = confirm("Do you want to draw a card?");

     // Check the user's response
     if (userResponse) {
         // The user wants to draw a card, so call a function to draw the card
         drawCardFunction();
     } else {
         // The user doesn't want to draw a card, so you can handle this case as needed
         // For example, display a message or end the game
         displayMessage("Okay, maybe next time!");
     }
 }
//ask a player to draw a card by pushing this button
 drawCard.addEventListener("click", (handleDrawCard));
 
 // Add an event listener to your button to call the handleDrawCard function

// Include a button or some element that the user can click to draw a card.
// When the user clicks the button, you'll want to ask them if they want to draw a card.
// TODO: If the user wants to draw a card, you'll need a mechanism to draw a card.
// TODO: If they don't want to draw a card, you can end the game or perform some other action.