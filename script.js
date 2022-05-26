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

function displaySelections(playerSelection, computerSelection, playerSelectionElement, computerSelectionElement)
{
    // Remove any of the classes, if present
    playerSelectionElement.classList.remove('win');
    computerSelectionElement.classList.remove('win');
    playerSelectionElement.classList.remove('lose');
    computerSelectionElement.classList.remove('lose');
    playerSelectionElement.classList.remove('draw');
    computerSelectionElement.classList.remove('draw');

    playerSelectionElement.textContent = 
            playerSelection.charAt(0).toUpperCase() + playerSelection.substring(1)
    computerSelectionElement.textContent = 
            computerSelection.charAt(0).toUpperCase() + computerSelection.substring(1)
}

function playRound(playerSelection)
{
    const computerSelection = computerPlay();
    const playerScore = document.querySelector('#player-score');
    const computerScore = document.querySelector('#computer-score');
    const results = document.querySelector('#results');
    const gameResult = document.querySelector('#game-results');
    const playerSelectionElement = document.querySelector('#player-selection');
    const computerSelectionElement = document.querySelector('#computer-selection');

    displaySelections(playerSelection, computerSelection, playerSelectionElement, computerSelectionElement);

    const roundResult = compareSelections(playerSelection, computerSelection);

    if (roundResult === "win")
    {
        results.textContent = `You win! ${playerSelection.charAt(0).toUpperCase() +
                playerSelection.substring(1)} beats ${computerSelection}`
        
        playerScore.textContent = Number(playerScore.textContent) + 1;

        playerSelectionElement.classList.toggle('win');
        computerSelectionElement.classList.toggle('lose');
    }
    else if (roundResult === "lose")
    {
        results.textContent = `You lose! ${computerSelection.charAt(0).toUpperCase() + 
                computerSelection.substring(1)} beats ${playerSelection}`;

        computerScore.textContent = Number(computerScore.textContent) + 1;

        playerSelectionElement.classList.toggle('lose');
        computerSelectionElement.classList.toggle('win');
    }
    else
    {
        results.textContent = `Draw! You both chose ${playerSelection}`;
        playerSelectionElement.classList.toggle('draw');
        computerSelectionElement.classList.toggle('draw');
    }

    // End the game and disable buttons after a player reaches 5 points
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
        document.querySelector('#game-results').classList.toggle('win');
    }
    else
    {
        gameResult = `You lose the game! Final score is ${playerScore} to ${computerScore}`;
        document.querySelector('#game-results').classList.toggle('lose');
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