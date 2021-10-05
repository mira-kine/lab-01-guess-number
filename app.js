// what DOM elements do I need
//    button
//    number remaining
const guessButton = document.getElementById('guess-button');
// const numGuesses = document.getElementById('num-guesses'); //numRemaining is numGuesses===4
const userInput = document.getElementById('user-input');
const playButton = document.getElementById('play-button');
// const playPage = document.getElementById('play-page-id');
// const shownPage = document.getElementById('shown-page-id');
const resultText = document.getElementById('result-text');
const guessCount = document.getElementById('guess-count');
const resetButton = document.getElementById('reset-button');

let randomNum = Math.floor(Math.random() * (20 - 1 + 1)) + 1;
let numGuessesRemain = 4;

playButton.addEventListener ('click', () => {
    randomNum;
    document.getElementById('play-page-id').style.display = 'block';
    document.getElementById('shown-page-id').style.display = 'none';
    document.getElementById('lose-page-id').style.display = 'none';
});

guessButton.addEventListener ('click', () => {
    numGuessesRemain--;
    const userGuess = Number(userInput.value);
  // console.log(Number(userInput.value));
    let playerStatus;
    if (userGuess === randomNum) {
        playerStatus = "that's correct!";
    }
    else if (userGuess > randomNum) {
        playerStatus = 'too high!';
    }
    else if (userGuess < randomNum) {
        playerStatus = 'too low!';
    }
  
    if (numGuessesRemain <= 0) {
        guessButton.style.display = 'none';
        document.getElementById('play-page-id').style.display = 'block';
        playerStatus = 'you lost!';
        document.getElementById('lose-page-id').style.display = 'block';
    }

    resetButton.addEventListener ('click', () => {
        document.getElementById('shown-page-id').style.display = 'block';
        document.getElementById('play-page-id').style.display = 'none';
        document.getElementById('lose-page-id').style.display = 'none';
    });

    resultText.textContent = `${playerStatus}`;
    guessCount.textContent = Number(numGuessesRemain);
});





// import functions and grab DOM elements

// initialize global state

// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state

  // what state do i need 
// what events am I listening for
//    button Click
//      Number must be between 1-20 else display "must be 1-20"
//      decrement the amount of tries by 1
//      compare the number guessed to the correct guess
//          if numberGuess < correct guess set to 'too low!'
//          if numberGuess > correct guess set to 'too high!'
//          if number Guess = correct guess, go to ending result page "you win"
//          if number of tries = 0, go to ending result page with "you lose"