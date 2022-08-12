//Computer's choice is defined here.
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

const scoreP = document.querySelector('.scoreP');
const scoreC = document.querySelector('.scoreC');

//added a reset button.
const reset = document.querySelector('.resetButton');
reset.addEventListener('click', () => {
    scoreC.textContent = '0';
    scoreP.textContent = '0';
    playerScore = 0;
    compScore = 0;
    results.textContent = 'Choose rock, paper or scissors!';
    console.log('you hit reset');
});

let playerChoice;
let playerScore = 0;
let compScore = 0;

const rock = document.querySelector('.rock');
rock.addEventListener('click', function(e) {
    playerChoice = 'rock';
    fullGame();
});

const paper = document.querySelector('.paper');
paper.addEventListener('click', function(e) {
    playerChoice = 'paper';
    fullGame();
});

const scissors = document.querySelector('.scissors');
scissors.addEventListener('click', function(e) {
    playerChoice = 'scissors';
    fullGame();
});



//This is the round function.
function playRound(player, comp) {
    comp = getCompChoice();
    player = playerChoice;
    let counter;

    if (player === comp) {
        results.textContent = `You both picked ${comp}, it is a tie, please play again.`;
        counter = 'tie';
        return counter;
    }

    else if (player === 'rock' && comp === 'scissors') {
        results.textContent = `Rock breaks scissors, you win!`;
        counter = 'win';
        return counter;
    }

    else if (player === 'rock' && comp === 'paper') {
        results.textContent = `Paper covers rock, you lose!`;
        counter = 'loss';
        return counter;
    }

    else if (player === 'paper' && comp === 'scissors') {
        results.textContent = 'Scissors cut paper, you lose!'
        counter = 'loss';
        return counter;
    }

    else if (player === 'paper' && comp === 'rock') {
        results.textContent = 'Paper covers rock, you win!';
        counter = 'win';
        return counter;
    }

    else if (player === 'scissors' && comp === 'rock') {
        results.textContent ='Rock breaks scissors, you lose!';
        counter = 'loss';
        return counter;
    }

    else if (player === 'scissors' && comp === 'paper') {
        results.textContent = 'Scissors cut paper, you win!';
        counter = 'win';
        return counter;
    }

    else {
        results.textContent = 'There was an error, try again';
        counter = 'tie';
        return counter; //plays again just like the tie.
    }
}

//Begins and counts the rounds.
function fullGame() {

    while (playerScore < 5 || compScore < 5) {

        let counter = playRound();

        if (counter === 'tie') {
            console.log('tie confirmed\n '); //ties no longer count
        }

        else if (counter === 'win') {
            playerScore += 1;
            console.log(`The current score is ${playerScore} to ${compScore}\n`);
            scoreP.textContent = playerScore;
            
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
            scoreC.textContent = compScore;

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