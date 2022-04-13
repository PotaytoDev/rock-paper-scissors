/**
 * function computerPlay()
 *     Generate randomNumber in the range of 0-2;
 *     Use randomNumber to determine the selection of the computer;
 *     Return string containing either "rock", "paper", or "scissors";
 * 
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
 * function validatePlayerSelection(playerSelection)
 *     Return true only if playerSelection equals "rock", "paper", or "scissors";
 *     Return false for any other input;
 * 
 * function getPlayerSelection()
 *     do
 *         Prompt player for their selection and store in playerSelection;
 *         playerSelection must be case-insensitive;
 *             Use method .toLowerCase() on playerSelection to convert it to all lowercase
 *             letters;
 *         Validate input with validatePlayerSelection() and store in validSelection;
 *             if (!validSelection)
 *                 Output "Please enter a selection of either rock, paper, or scissors.";
 *     while (input is not valid);
 * 
 *     Return playerSelection with all lowercase letters;
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