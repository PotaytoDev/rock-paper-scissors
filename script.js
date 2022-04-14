/**
 * function game()
 *     Loop until either player or computer win 3 rounds or only a total of 5 times;
 *         console.log(`Round: ${gameRound}`);
 *         const playerSelection = getPlayerSelection();
 *         const computerSelection = computerPlay();
 *         Call playRound(playerSelection, computerSelection, playerScore, computerScore);
 *     Call determineGameResult(playerScore, computerScore) and output to console;
 * 
 * function determineGameResult(playerScore, computerScore)
 *     if (playerScore > computerScore)
 *         gameResult = "You win the game!";
 *     else if (playerScore < computerScore)
 *         gameResult = "You lose the game!";
 *     else
 *         gameResult = "The game ended in a draw!";
 *     Return gameResult;
 *     
 * do
 *     game();
 * while (confirm("Play again?"));
*/




function computerPlay()
{
    let randomNumber = Math.floor(Math.random() * 3);
    let computerSelection = "";

    if (randomNumber === 0)
    {
        computerSelection = "rock";
    }
    else if (randomNumber === 1)
    {
        computerSelection = "paper";
    }
    else
    {
        computerSelection = "scissors";
    }

    return computerSelection;
}

function getPlayerSelection()
{
    let validSelection = false;
    let playerSelection = "";

    do
    {
        playerSelection = prompt("Rock, paper, or scissors?");
        playerSelection = playerSelection.toLowerCase();
        validSelection = validatePlayerSelection(playerSelection);
        if (!validSelection)
        {
            alert("That is not a valid selection. Please choose either rock, paper, or scissors");
        }
    }
    while (!validSelection);

    return playerSelection;
}

function validatePlayerSelection(playerSelection)
{
    return (playerSelection === "rock" || playerSelection === "paper" ||
    playerSelection === "scissors");
}

function compareSelections(playerSelection, computerSelection)
{
    let roundResult = "";

    switch (playerSelection)
    {
        case "rock":
            if (computerSelection === "scissors")
                roundResult = "win";
            else if (computerSelection === "paper")
                roundResult = "lose";
            else
                roundResult = "draw";
            break;
        case "paper":
            if (computerSelection === "rock")
                roundResult = "win";
            else if (computerSelection === "scissors")
                roundResult = "lose";
            else
                roundResult = "draw";
            break;
        case "scissors":
            if (computerSelection === "paper")
                roundResult = "win";
            else if (computerSelection === "rock")
                roundResult = "lose";
            else
                roundResult = "draw";
            break;
        default:
            roundResult = "Oops! Something went wrong!";
    }

    return roundResult;
}

function playRound()
{
    let computerSelection = computerPlay();
    let playerSelection = getPlayerSelection();

    console.log(`You chose: ${playerSelection}`);
    console.log(`Computer chose: ${computerSelection}`);

    let roundResult = compareSelections(playerSelection, computerSelection);

    if (roundResult === "win")
    {
        console.log(`You win! ${playerSelection.charAt(0).toUpperCase() + 
            playerSelection.substring(1)} beats ${computerSelection}`);
    }
    else if (roundResult === "lose")
    {
        console.log(`You lose! ${computerSelection.charAt(0).toUpperCase() + 
            computerSelection.substring(1)} beats ${playerSelection}`);
    }
    else
    {
        console.log("It's a draw!");
    }

    return roundResult;
}