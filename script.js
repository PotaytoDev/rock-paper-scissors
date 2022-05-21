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

function playRound(playerSelection)
{
    let computerSelection = computerPlay();
    let playerScore = Number(document.querySelector('#player-score').textContent);
    let computerScore = Number(document.querySelector('#computer-score').textContent);

    console.log(`You chose: ${playerSelection}`);
    console.log(`Computer chose: ${computerSelection}`);

    let roundResult = compareSelections(playerSelection, computerSelection);

    if (roundResult === "win")
    {
        console.log(`You win! ${playerSelection.charAt(0).toUpperCase() + 
            playerSelection.substring(1)} beats ${computerSelection}`);
        
        document.querySelector('#player-score').textContent = ++playerScore;
    }
    else if (roundResult === "lose")
    {
        console.log(`You lose! ${computerSelection.charAt(0).toUpperCase() + 
            computerSelection.substring(1)} beats ${playerSelection}`);

        document.querySelector('#computer-score').textContent = ++computerScore;
    }
    else
    {
        console.log(`Draw! You both chose ${playerSelection}`);
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