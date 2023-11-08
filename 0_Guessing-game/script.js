/* 
Number Guessing Game 
Computer = 1 to 24
User has to guess the number 
The user gets 3 chances to do so
*/
let secretNumber;

while (!secretNumber || secretNumber < 1 || secretNumber > 24) {
    secretNumber = Math.floor(Math.random() * 24) + 1;
}

console.log(secretNumber);

const guessNumber = document.querySelector("form")

guessNumber.addEventListener('submit', (event) => {
    event.preventDefault();
    const userGuess = parseInt(event.target.number.value);

    if (userGuess === secretNumber) {
    alert(`Awesome! You number ${userGuess} was correct. You can be named many things, hungry not being one of them.`);
    } else {
    alert(`Bummer... You guessed ${userGuess} and the secret number was ${secretNumber}.`);}
});
// console.log();



// A secret number will be generated -> should be between 1 and 24 -> With the while loop
// TODO: A user can enter a guess (add HTML element)
// TODO: When he or she pushes the play button, the number will be compared to the secret number -> if... else condition
// TODO: POPS UP a alert message ->
//      - Awesome! You number (actual number) was correct. You can be named many things, hungry not being one of them.
//      - Bummer... You guessed (guess) and the secret number was (secret number).