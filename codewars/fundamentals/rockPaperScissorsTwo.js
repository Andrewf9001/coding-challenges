const rps = (p1, p2) => {  
  const winner = (n) => `Player ${n} won!`;
  
  if (p1 === p2) {
    return "Draw!"
  }
  
  switch (p1) {
      case "rock":
        return p2 === "scissors" ? winner(1) : winner(2);
      case "paper":
        return p2 === "rock" ? winner(1) : winner(2);
      case "scissors":
        return p2 === "paper" ? winner(1) : winner(2);
      default:
        break;
  }
};


// Submission:
// const rockPaperScissors = (p1, p2) => {
//   if (p1 === p2) return "Draw!";

//   const rules = {rock: "scissors", paper: "rock", scissors: "paper"};

//   if (p2 === rules[p1]) {
//     return "Player 1 won!";
//   } else {
//     return "Player 2 won!";
//   }
// };