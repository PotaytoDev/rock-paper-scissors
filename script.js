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
        console.log(`Draw! You both chose ${playerSelection}`);
    }

    return roundResult;
}

function determineGameResult(playerScore, computerScore)
{
    let gameResult = "";

    if (playerScore > computerScore)
    {
        gameResult = `You win the game! Final score is ${playerScore} to ${computerScore}`;
    }
    else if (playerScore < computerScore)
    {
        gameResult = `You lose the game! Final score is ${playerScore} to ${computerScore}`;
    }
    else
    {
        gameResult = `The game ended in a draw! Final score is ${playerScore} to ${computerScore}`
    }

    return gameResult;
}

function playGame()
{
    let playerScore = 0;
    let computerScore = 0;

    for (let numberOfRounds = 1; numberOfRounds <= 5; numberOfRounds++)
    {
        console.log(`Round: ${numberOfRounds}`);
        let roundResult = playRound();

        if (roundResult === "win")
        {
            playerScore++;
        }
        else if (roundResult === "lose")
        {
            computerScore++;
        }

        console.log(`Player score: ${playerScore}\nComputer score: ${computerScore}`);
    }

    console.log(determineGameResult(playerScore, computerScore));
}

function game()
{
    do
    {
        playGame();
    } while (confirm("Play again?"));

    console.log("Game Over");
}

game();