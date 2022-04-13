/**
 * function playRound(playerSelection, computerSelection, playerScore, computerScore)
 *     Call compareSelections() to determine the winner and store in roundResult;
 *     if (roundResult === "win")
 *         result = `You win! ${playerSelection} beats ${computerSelection}`;
 *         playerScore++;
 *     else if (roundResult === "lose")
 *         result = `You lose! ${computerSelection} beats ${playerSelection}`;
 *         computerScore++;
 *     else
 *         result = "Draw!";
 *     Return string that declares winner of the round;
 * 
 * function game()
 *     Loop until either player or computer win 3 rounds or only a total of 5 times;
 *         console.log(`Round: ${gameRound}`);
 *         const playerSelection = getPlayerSelection();
 *         const computerSelection = computerPlay();
 *         Call playRound(playerSelection, computerSelection, playerScore, computerScore);
 *     Call determineGameResult(playerScore, computerScore) and output to console;
 * 
 * function compareSelections(playerSelection, computerSelection)
 *     Declare roundResult = "";
 *     Compare playerSelection to computerSelection;
 *         switch (playerSelection)
 *             case "rock":
 *                 if (computerSelection === "scissors")
 *                     roundResult = "win";
 *                 else if (computerSelection === "paper")
 *                     roundResult = "lose";
 *                 else
 *                     roundResult = "draw";
 *             Repeat same logic for the cases with the other selections;
 *     Return "win", "lose", or "draw" based on whether player beat computer;
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