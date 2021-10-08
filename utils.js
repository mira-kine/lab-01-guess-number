export function didUserWin(userGuess, randomNum){
    if (userGuess === randomNum){
        return true;
    }

    else if (userGuess < randomNum){
        return false;
    }
    else if (userGuess > randomNum){
        return false;
    }

    
}
