# Alchemy Bootstrap Template

## Making a plan

### HTML Elements (View - what is static and what is dynamic?)
* Header: static
* Explain rules: static
* user input: static
* Submit button: static
* User message -- 
    - Display of number of tries remaining: d
    - Display of guess too high or too low: d
    - Display of lose and win result: d

### State:
    * Initial states:
        - Number of tries remaining: 4
        - random target number (dynamic)
    * RandomNum -- generated at the start of every game.
        - Input number type: Between 1-20 (including both)/ Use compareNumbers to compare guessed number to actual number
    * numGuesses -- number of guesses -- decremented every time the user clicks the button (or incremented everytime user clicks button) 
    * userMessage:
        - 'You're correct' : userGuess === randomNum
        - 'Guess too high' : userGuess > randomNum
        - 'Guess too low' : userGuess < randomNum
        - 'No more guesses' : numGuesses > 4
        - 'Invalid guess' : if input is >20 or not a number (stretch)

### PsuedoCode for Event
```javascript
// What events am I listening for
// on button click do the following:
//     decrement the guess count
//     get the value of the user guess from the input
//          CONVER THE INPUT TO A NUMBER
//      compare the userGuess to the randomNumber
//      if(userGuess) === randomNum -- display 'You won!'
//      else if ( numGuesses === 4 ) -- display you lost, out of guesses
//      else if (userGuess > randomNum) -- display 'guess too high'
//      else if (userGuess < randomNum) -- display 'guess too low'
```

(bolded steps are mandatory, unbolded are for more advanced projects)

1) **Make a drawing of your app. Simple "wireframes"**
2) **Once you have a drawing, name the HTML elements you'll need to realize your vision**
3) **For each HTML element ask: Why do I need this?**
4) Ask which of out HTML elements are hard coded, and which are dynamically generated?
5) **Once we know _why_ we need each element, think about how to implement the "Why" as a "How"**
6) Is there some state we need to initialize?
7) **Find all the 'events' (user clicks, form submit, on load etc) in your app. Ask one by one, "What happens when" for each of these events. Does any state change?**
8) **Think about how to validate each of your steps**
9) Ask: should any of this work be abstracted into functions? (i.e., is the work complicated? can it be resused?)
10) Consider your data model. What objects will you be using? What are the key/value pairs? What arrays do you need? What needs to live in local storage?
11) **Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.**


## To Run Cypress Tests
* `npm install`
* `npm test`
* Cypress will open -- you should then click "run <#> integration spec(s)"
    ![](cypress.png)
* Make sure all tests pass