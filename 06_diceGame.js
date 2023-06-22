//* Variables
let score = 0;
    // default for the state of the turn
let dieRoll;
    // a variable to hold our roll value
let stateOfDie = 'not rolled';
    // the current state of our die (not rolled / rolled)
let numRolls = 0;
    // starting count for our rolls allowed (1-3)

//* Dictionary
// On the dice block : 1 = 100, 2-6 = x*10
let scoring = {
    "1": 100,
    "2": 20,
    "3": 30,
    "4": 40,
    "5": 50,
    "6": 60,
}

//* State Machine
// dieState | "not rolled", "roll", "score"
let dieState = {
    "not rolled": ["roll", "throw"],
    "roll": ["score", "roll", "throw"],
    "throw": ["score", "roll", "throw"],
    "score": ["not rolled"]
}


function scoreDice(dict, dieValue) {
    // This will update our score and provide us feedback.
    score += dict[dieValue];
    console.log(`Your score is: ${score}`);
}

function rollDie() {
    // We'll generate a random number and increase our roll count.
    dieRoll = Math.floor((Math.random() * 6) + 1); // assigning a random value to our global variable "dieRoll"
    numRolls++; // increasing our roll count (1-3)
}

function playState(task) {
    // pulling in our command and running our conditionals.
    let valid = dieState[stateOfDie];

    if(valid.includes(task)) {
        stateOfDie = task; // updating our stateOfDie to the "new" task

        if(stateOfDie === 'roll' || stateOfDie === "throw") {
            
            if(numRolls === 3) {
                console.log(`You've rolled ${numRolls} times and need to score! This roll doesn't count.`)
            } else {
                rollDie(); // starting our roll function to reassign dieRoll & increase numRolls value.
                console.log(`You rolled a ${dieRoll}. Would you like to roll again or finalize the score?`);
                scoreDice(scoring, dieRoll); // passing in our dictionary "scoring" and current value of global variable "dieRoll"
                console.log(`Number of rolls: ${numRolls}`);
            }
        }

        if(stateOfDie === 'score') {
            // resetting our variables.
            dieRoll = 'not rolled';
            numRolls = 0;
            console.log(`Final Score: ${score}!`);
            score = 0;
        }

    } else {
        console.error(`Invalid state for the die: ${stateOfDie} to ${task}`);
    }
}

playState('roll');
playState('throw');
playState('throw');
playState('throw');
playState('score');
