// Determines computer choice and randomizes selection
function getComputerChoice() {
  const options = ["rock", "paper", "scissors"];
  const randomChoice = options[Math.floor(Math.random() * options.length)];
  return randomChoice;
}

function game() {
  //initializes the variables of the game
  let playerScore = 0;
  let computerScore = 0;
  let gameWinner = "";

  // Add event listeners for all three buttons / run round on click/track and end game
  const buttons = document.querySelectorAll("button");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      playerSelection = button.className;
      const computerSelection = getComputerChoice();
      roundWinText.textContent = playRound(playerSelection, computerSelection);
      playerWinText.textContent = `Player Win totals: ${playerScore}`;
      computerWinText.textContent = `Computer Win Totals: ${computerScore}`;
      endGame();
      console.log(button);
    });
  });

  // Plays round to determine winner and increments score
  function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
      return `It's a Tie, You both picked ${playerSelection}`;
    } else if (playerSelection === "rock" && computerSelection === "paper") {
      computerScore++;
      return "The Computer Wins! Paper beats Rock";
    } else if (
      playerSelection === "paper" &&
      computerSelection === "scissors"
    ) {
      computerScore++;
      return "The Computer Wins! Scissors beats Paper";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
      computerScore++;
      return "The Computer Wins! Rock beats Scissors";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
      playerScore++;
      return "Nice! You Win! Rock beats Scissors";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
      playerScore++;
      return "Nice! You Win! Paper beats Rock";
    } else if (
      playerSelection === "scissors" &&
      computerSelection === "paper"
    ) {
      playerScore++;
      return "Nice! You Win! Scissors beats Paper";
    }
  }

  // create div DOM for all results
  const container = document.querySelector("#container");
  const resultDiv = document.createElement("div");
  resultDiv.style.marginTop = "20px";
  container.appendChild(resultDiv);

  //create player win tracking DOM
  const playerWinText = document.createElement("p");
  playerWinText.style.color = "white";
  playerWinText.textContent = `Player Win totals: ${playerScore}`;
  resultDiv.appendChild(playerWinText);

  // create computer win tracking DOM
  const computerWinText = document.createElement("p");
  computerWinText.style.color = "white";
  computerWinText.textContent = `Computer Win totals: ${computerScore}`;
  resultDiv.appendChild(computerWinText);

  //create round win text DOM
  const roundWinText = document.createElement("p");
  roundWinText.style.color = "orange";
  resultDiv.appendChild(roundWinText);

  //create game win text DOM
  const victoryText = document.createElement("p");
  victoryText.style.color = "orange";
  victoryText.textContent = gameWinner;
  resultDiv.appendChild(victoryText);

  // Determine who won to five points first
  function endGame() {
    if (playerScore == 5) {
      gameWinner = `YOU WIN! The score is ${playerScore} to ${computerScore}`;
      victoryText.textContent = gameWinner;

      //disable game buttons
      document.getElementById("1").disabled = true;
      document.getElementById("2").disabled = true;
      document.getElementById("3").disabled = true;

      //create new DOM button to replay
      const playAgainButton = document.createElement("button");
      playAgainButton.style.backgroundColor = "green";
      playAgainButton.style.color = "white";
      playAgainButton.style.fontSize = "20px";
      playAgainButton.textContent = "Play Again!";
      resultDiv.appendChild(playAgainButton);

      //if clicked, reload page
      playAgainButton.addEventListener("click", () => {
        location.reload();
      });
    } else if (computerScore == 5) {
      gameWinner = `COMPUTER WINS! The score is ${playerScore} to ${computerScore}`;
      victoryText.textContent = gameWinner;

      //disable game buttons
      document.getElementById("1").disabled = true;
      document.getElementById("2").disabled = true;
      document.getElementById("3").disabled = true;

      //create new DOM button to replay
      const playAgainButton = document.createElement("button");
      playAgainButton.style.backgroundColor = "green";
      playAgainButton.style.color = "white";
      playAgainButton.style.fontSize = "20px";
      playAgainButton.textContent = "Play Again!";
      resultDiv.appendChild(playAgainButton);

      //if clicked, reload page
      playAgainButton.addEventListener("click", () => {
        location.reload();
      });
    }
  }
}

game();
