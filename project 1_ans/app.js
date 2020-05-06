const prompt = require('prompt-sync')({sigint: true});
//Before using prompt, make sure you have installed the package from npm.

let randomNumber = Math.floor(Math.random() * 100) + 1; // Create a random number from 1 - 100
let guessCount = 1;// Count the guess times
let foundCorrectNumber = false;

console.log('Welcome to number guessing game!');
console.log('We have selected a random number between 1 and 100.');
console.log('See if you can guess it in 10 turns or fewer.');
console.log("We'll tell you if your guess was too high or too low.");

function guess(){
  // Write your code here.
  while(true){
    let userGuess = Number(prompt('Enter a number: '));
    if(userGuess == randomNumber){
      console.log('Congratulations! You got it right!');
      break;
    }
    else if (guessCount === 10){
      console.log('!!!GAME OVER!!!');
      break;
    }
    else if(userGuess < randomNumber) console.log('Last guess was too low!');
    else console.log('Last guess was too high!');
    guessCount++;
  }
}

guess();

// ====== Here are some tools you may need ======
// The prompt() functions returns the user feedback, all user input will be read as a String.
// e.g. let input = prompt('your question');

// In order to treat user input as numbers, you'll need to convert the input:
// e.g. let num = Number(input);

// To out put some message, use console.log().
// e.g. console.log('Some message');