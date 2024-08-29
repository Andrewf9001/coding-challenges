const rps = (p1, p2) => {
  let results = "";

  if (p1 === p2) {
    return "Draw!";
  }

  if (p1 === "rock" && p2 === "scissors") {
    results = "Player 1 won!";
  } else if (p2 === "rock" && p1 === "scissors") {
    results = "Player 2 won!";
  }

  if (p1 === "paper" && p2 === "rock") {
    results = "Player 1 won!";
  } else if (p2 === "paper" && p1 === "rock") {
    results = "Player 2 won!";
  }

  if (p1 === "scissors" && p2 === "paper") {
    results = "Player 1 won!";
  } else if (p2 === "scissors" && p1 === "paper") {
    results = "Player 2 won!";
  }

  return results;
};

// Instructions:
// Let's play! You have to return which player won! In case of a draw return Draw!.

// Examples(Input1, Input2 --> Output):

// "scissors", "paper" --> "Player 1 won!"
// "scissors", "rock" --> "Player 2 won!"
// "paper", "paper" --> "Draw!"

// Tests:
// const Test = require('@codewars/test-compat');

// describe('rock paper scissors', function() {
//   const getMsg = (n) => `Player ${n} won!`;

//   it('player 1 win', function() {
//     Test.assertEquals(rps('rock', 'scissors'), getMsg(1));
//     Test.assertEquals(rps('scissors', 'paper'), getMsg(1));
//     Test.assertEquals(rps('paper', 'rock'), getMsg(1));
//   });

//   it('player 2 win', function() {
//     Test.assertEquals(rps('scissors', 'rock'), getMsg(2));
//     Test.assertEquals(rps('paper', 'scissors'), getMsg(2));
//     Test.assertEquals(rps('rock', 'paper'), getMsg(2));
//   });

//   it('draw', function() {
//     Test.assertEquals(rps('rock', 'rock'), 'Draw!');
//     Test.assertEquals(rps('scissors', 'scissors'), 'Draw!');
//     Test.assertEquals(rps('paper', 'paper'), 'Draw!');
//   });
// });
