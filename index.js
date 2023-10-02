// console.log('Hi');

function getComputerChoice() {
    let randomValue = Math.floor(Math.random() * 3);
    if (randomValue === 1) {
        return "rock";
    } else if (randomValue === 2) {
        return "paper"
    } else {
        return "scissors";
    }
}

function checkWinner(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "Tie";
    }
    else if (playerSelection == "rock" && computerSelection == "scissors" || playerSelection == "scissors" && computerSelection == "paper" || playerSelection == "paper" && computerSelection == "rock" ) {
        return "Player"
    } else {
        return "Computer"
    }
}  

function playRound(playerSelection,computerSelection) {
    const result = checkWinner(playerSelection,computerSelection);
    if (result == "Tie")  {
        return "It's a tie!"
    } else if (result == "Player") {
        return `You Win ! ${playerSelection} beats ${computerSelection}`;
    } else {
        return `You Lose ! ${computerSelection} beats ${playerSelection}`;
    }
}

function getPlayerChoice() {
    let initialChoice = prompt("Choose your weapon!");
    let finalChoice = initialChoice.toLowerCase();
    return finalChoice;
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    let round = 0;
    // console.log("Welcome!");
    for (let i = 0; i < 5; i++) {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        round++;
        console.log(`--------------Round#${round} | Computer Score = ${computerScore} | Player Score = ${playerScore}`);
        console.log(playRound(playerSelection,computerSelection));
        if (checkWinner(playerSelection,computerSelection) == 'Player') {
            playerScore++;
        } else if (checkWinner(playerSelection,computerSelection) == 'Computer') {
            computerScore++;
        }
    }
    console.log("Game Over !");
    if (playerScore > computerScore) {
        console.log("Player was the winner")
    } else if (playerScore < computerScore) {
        console.log("Computer was the winner !");
    } else {
        console.log("We have a TIE!");
    }

}

game();

// const playerSelection = "rock";
// const computerSelection = getComputerChoice();
// console.log(computerSelection);
// console.log(playRound(playerSelection,computerSelection));

// console.log(getComputerChoice());

// // console.log('Hi');


// function getComputerChoice() {
//     let randomValue = Math.floor(Math.random() * 3);
//     if (randomValue === 1) {
//         return "rock";
//     } else if (randomValue === 2) {
//         return "paper"
//     } else {
//         return "scissors";
//     }
// }

// function checkWinner(playerSelection, computerSelection) {
//     if (playerSelection == computerSelection) {
//         return "Tie";
//     }
//     else if (playerSelection == "rock" && computerSelection == "scissors" || playerSelection == "scissors" && computerSelection == "paper" || playerSelection == "paper" && computerSelection == "rock" ) {
//         return "Player"
//     } else {
//         return "Computer"
//     }
// }  

// function playRound(playerSelection,computerSelection) {
//     const result = checkWinner(playerSelection,computerSelection);
//     if (result == "Tie")  {
//         return "It's a tie!"
//     } else if (result == "Player") {
//         return `You Win ! ${playerSelection} beats ${computerSelection}`;
//     } else {
//         return `You Lose ! ${computerSelection} beats ${playerSelection}`;
//     }
// }

// function getPlayerChoice() {
//     let initialChoice = prompt("Choose your weapon!");
//     let finalChoice = initialChoice.toLowerCase();
//     return finalChoice;
// }

// function game() {
//     let playerScore = 0;
//     let computerScore = 0;
//     console.log("Welcome!");
//     for (let i = 0; i < 5; i++) {
//         const playerSelection = getPlayerChoice();
//         const computerSelection = getComputerChoice();
//         console.log(playRound(playerSelection,computerSelection));
//         console.log("--------------------------------------------");
//         if (checkWinner(playerSelection,computerSelection) == 'Player') {
//             playerScore++;
//         } else if (checkWinner(playerSelection,computerSelection) == 'Computer') {
//             computerScore++;
//         }
//     }
//     console.log("Game Over !");
//     if (playerScore > computerScore) {
//         console.log("Player was the winner")
//     } else if (playerScore < computerScore) {
//         console.log("Computer was the winner !");
//     } else {
//         console.log("We have a TIE!");
//     }

// }

// game();

// // const playerSelection = "rock";
// // const computerSelection = getComputerChoice();
// // console.log(computerSelection);
// // console.log(playRound(playerSelection,computerSelection));

// // console.log(getComputerChoice());