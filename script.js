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

function displaySelections(playerSelection, computerSelection)
{
    document.querySelector('#player-selection').textContent = playerSelection;
    document.querySelector('#computer-selection').textContent = computerSelection;
}

function playRound(playerSelection)
{
    const computerSelection = computerPlay();
    const playerScore = document.querySelector('#player-score');
    const computerScore = document.querySelector('#computer-score');
    const results = document.querySelector('#results');
    const gameResult = document.querySelector('#game-results');

    displaySelections(playerSelection, computerSelection);

    const roundResult = compareSelections(playerSelection, computerSelection);

    if (roundResult === "win")
    {
        results.textContent = `You win! ${playerSelection.charAt(0).toUpperCase() +
                playerSelection.substring(1)} beats ${computerSelection}`
        
        playerScore.textContent = Number(playerScore.textContent) + 1;
    }
    else if (roundResult === "lose")
    {
        results.textContent = `You lose! ${computerSelection.charAt(0).toUpperCase() + 
                computerSelection.substring(1)} beats ${playerSelection}`;

        computerScore.textContent = Number(computerScore.textContent) + 1;
    }
    else
    {
        results.textContent = `Draw! You both chose ${playerSelection}`;
    }

    if (Number(playerScore.textContent) >= 5 || Number(computerScore.textContent) >= 5)
    {
        const buttons = document.querySelectorAll('.selections');
        buttons.forEach(button => button.disabled = true);

        gameResult.textContent = determineGameResult(Number(playerScore.textContent), 
            Number(computerScore.textContent));
    }
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
    AddBehaviorToButtons();
}

function AddBehaviorToButtons()
{
    const buttons = document.querySelectorAll('.selections');

    buttons.forEach((button) => button.addEventListener('click', () => {
        playRound(button.textContent.toLowerCase());
    }))
}

playGame();