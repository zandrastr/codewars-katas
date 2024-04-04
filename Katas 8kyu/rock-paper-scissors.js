// --------------------------------------------------------------
// DESCRIPTION:
// Rock Paper Scissors
// Let's play! You have to return which player won! In case of a draw return Draw!.

// Examples(Input1, Input2 --> Output):

// "scissors", "paper" --> "Player 1 won!"
// "scissors", "rock" --> "Player 2 won!"
// "paper", "paper" --> "Draw!"

// --------------------------------------------------------------
// MY SOLUTION :

const rps = (p1, p2) => {
  const msgDraw = "Draw!";
  const msgPlayerOneWon = "Player 1 won!";
  const msgPlayerTwoWon = "Player 2 won!";

  if (p1 === p2) {
    return msgDraw;
  } else if (p1 === "scissors" && p2 === "paper") {
    return msgPlayerOneWon;
  } else if (p1 === "scissors" && p2 === "rock") {
    return msgPlayerTwoWon;
  } else if (p1 === "paper" && p2 === "rock") {
    return msgPlayerOneWon;
  } else if (p1 === "paper" && p2 === "scissors") {
    return msgPlayerTwoWon;
  } else if (p1 === "rock" && p2 === "paper") {
    return msgPlayerTwoWon;
  } else if (p1 === "rock" && p2 === "scissors") {
    return msgPlayerOneWon;
  }
};
