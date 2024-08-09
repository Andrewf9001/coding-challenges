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