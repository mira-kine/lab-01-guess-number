// what DOM elements do I need
//    button
//    number remaining
const guessButton = document.getElementById('guess-button');
const userInput = document.getElementById('user-input');
const playButton = document.getElementById('play-button');
const resultText = document.getElementById('result-text');
const guessCount = document.getElementById('guess-count');
const resetButton = document.getElementById('reset-button');

// const shownPage = document.getElementById('shown-page-id');

let randomNum = Math.floor(Math.random() * (20)) + 1;
let numGuessesRemain = 4;

playButton.addEventListener ('click', () => {
    randomNum;
    document.getElementById('play-page-id').style.display = 'block';
    document.getElementById('shown-page-id').style.display = 'none';
    resetButton.classList.add('hidden');
});

guessButton.addEventListener ('click', () => {
    numGuessesRemain--;
    const userGuess = Number(userInput.value);
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
        guessButton.disabled = true;
        resetButton.classList.remove('hidden');
        
        // playerStatus = 'you lost!';
        
    }
    
    resultText.textContent = `${playerStatus}`;
    guessCount.textContent = Number(numGuessesRemain);
});

resetButton.addEventListener ('click', () => {
    
    randomNum = Math.floor(Math.random() * (20)) + 1;
    numGuessesRemain = 4;
    guessButton.disabled = false;
    
   
});

// shownPage ('shown', ()=> {

// }) 

//     resultText.textContent = `${playerStatus}`;
//     guessCount.textContent = Number(numGuessesRemain);
// });





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