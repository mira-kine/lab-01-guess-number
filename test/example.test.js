// IMPORT MODULES under test here:
import { didUserWin } from "../utils.js";

const test = QUnit.test;

test('time to test a function', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = true;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('Testing for correct guess', (expect) => {
    const expected = true; 
    const actual = didUserWin(userGuess === randomNum);
    expect.equal(actual, expected);
});
test('Testing for number guess too low', (expect) => {
    const expected = false; 
    const actual = didUserWin(userGuess < randomNum);
    expect.equal(actual, expected);
});

test('Testing for number guess too high', (expect) => {
    const expected = false; 
    const actual = didUserWin( userGuess > randomNum);
    expect.equal(actual, expected);
});

