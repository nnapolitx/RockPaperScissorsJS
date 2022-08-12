//Computer's choice is defined here. Equal chance of picking Rock, paper or Scissors; 1:3.
function getCompChoice(cChoice) {
    cChoice = Math.floor(Math.random() * 9) + 1;

    if (cChoice % 3 === 0) {
        cChoice = 'rock';
    }
    else if (cChoice % 2 === 0) {
        cChoice = 'paper';
    }
    else {
        cChoice = 'scissors';
    }
    return cChoice;
}

//selecting the div to display the round results
const results = document.querySelector('.results');

//getting the player choice and calling the playRound() function, but still need to put this in a loop to play full game... possibly, not sure yet
let playerChoice;
let playerScore = 0;
let compScore = 0;

const rock = document.querySelector('.rock');
rock.addEventListener('click', function(e) {
    console.log("You picked rock");
    playerChoice = 'rock';
    console.log(playerChoice);
    fullGame();
});

const paper = document.querySelector('.paper');
paper.addEventListener('click', function(e) {
    console.log("you picked paper");
    playerChoice = 'paper';
    console.log(playerChoice);
    fullGame();
});

const scissors = document.querySelector('.scissors');
scissors.addEventListener('click', function(e) {
    console.log("You picked scissors");
    playerChoice = 'scissors';
    console.log(playerChoice);
    fullGame();
});

//This is the round function.
function playRound(player, comp) {
    comp = getCompChoice();
    player = playerChoice;
    let counter;
    
    console.log(`You chose ${player}, and the computer chose ${comp}`);

    if (player === comp) {
        console.log(`You both picked ${comp}, it is a tie, please play again.\n `);
        //changing the textContent of the results div here
        results.textContent = `You both picked ${comp}, it is a tie, please play again.`;
        counter = 'tie';
        return counter;
    }

    else if (player === 'rock' && comp === 'scissors') {
        console.log("Rock beats scissors, you win!\n ");
        //changing the textContent of the results div here
        results.textContent = `Rock breaks scissors, you win!`;
        counter = 'win';
        return counter;
    }

    else if (player === 'rock' && comp === 'paper') {
        console.log("Paper covers rock, you lose!\n ");
        //changing the textContent of the results div here
        results.textContent = `Paper covers rock, you lose!`;
        counter = 'loss';
        return counter;
    }

    else if (player === 'paper' && comp === 'scissors') {
        console.log("Scissors cut paper, you lose!\n ");
        //changing the textContent of the results div here
        results.textContent = 'Scissors cut paper, you lose!'
        counter = 'loss';
        return counter;
    }

    else if (player === 'paper' && comp === 'rock') {
        console.log("Paper covers rock, you win!\n ");
        //changing the textContent of the results div here
        results.textContent = 'Paper covers rock, you win!';
        counter = 'win';
        return counter;
    }

    else if (player === 'scissors' && comp === 'rock') {
        console.log("Rock beats scissors, you lose!\n ");
        //changing the textContent of the results div here
        results.textContent ='Rock breaks scissors, you lose!';
        counter = 'loss';
        return counter;
    }

    else if (player === 'scissors' && comp === 'paper') {
        console.log("Scissors cut paper, you win!\n ");
        //changing the textContent of the results div here
        results.textContent = 'Scissors cut paper, you win!';
        counter = 'win';
        return counter;
    }

    else {
        console.log('I am error\n ');
        //changing the textContent of the results div here
        results.textContent = 'There was an error, try again';
        counter = 'tie';
        return counter; //plays again just like the tie.
    }
}

//This function will run the game for five rounds, and should total up the wins and losses in order to declare a winner and loser 
function fullGame() {

    while (playerScore < 5 || compScore < 5) {

        let counter = playRound();

        if (counter === 'tie') {
            console.log('tie confirmed\n '); //ties no longer count
        }

        else if (counter === 'win') {
            playerScore += 1;
            console.log(`The current score is ${playerScore} to ${compScore}\n`);
            
            if (playerScore > 4 && playerScore > compScore) {
                alert(`YOU'VE WON THIS GAME!\n Your final score is ${playerScore}`);
            } 
            else if (compScore > 4 && compScore > playerScore) {
                alert(`YOU HAVE LOST!\n Your final score is ${playerScore}`);
            }
        }

        else if (counter === 'loss') {
            compScore += 1;
            console.log(`The current score is ${playerScore} to ${compScore}\n`);

            if (playerScore > 4 && playerScore > compScore) {
                alert(`YOU'VE WON THIS GAME!\n Your final score is ${playerScore}`);
            } 
            else if (compScore > 4 && compScore > playerScore) {
                alert(`YOU HAVE LOST!\n Your final score is ${playerScore}`);
            }
        }
        break;
    }
    
}