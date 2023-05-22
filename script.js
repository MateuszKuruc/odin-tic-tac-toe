"use strict";

const game = (function () {
  const startGame = document.querySelector("#startGame");
  const confirmButton = document.querySelector("#submit");
  const formBlock = document.querySelector(".form-block");
  let player1Name;
  let player2Name;
  let activePlayer;
  let player1;
  let player2;
  let winner;

  const resetGame = function () {
    gameBoard.gameboard = ["", "", "", "", "", "", "", "", ""];
    game.winner = '';
    gameBoard.resultMessage.innerHTML = "Ready to play again?";
    game.activePlayer = game.player1;
  };

  const createPlayer = function () {
    confirmButton.addEventListener("click", function (event) {
      event.preventDefault();
      player1Name = document.querySelector("#name").value;
      player2Name = document.querySelector("#name2").value;
      game.player1 = FactoryPlayer(player1Name, "X");
      game.player2 = FactoryPlayer(player2Name, "O");
      formBlock.classList.add("hidden");
      game.activePlayer = game.player1;
      gameBoard.resultMessage.innerHTML = "In progress...";
    });
  };

  startGame.addEventListener("click", function () {
    formBlock.classList.remove("hidden");
    createPlayer();
  });

  document.addEventListener("click", function (event) {
    if (
      !formBlock.contains(event.target) &&
      !startGame.contains(event.target)
    ) {
      formBlock.classList.add("hidden");
      document.querySelector("#name").value = "";
      document.querySelector("#name2").value = "";
    }
  });

  return {
    activePlayer,
    createPlayer,
    player1,
    player2,
    winner,
    resetGame,
  };
})();

const gameBoard = (function () {
  let gameboard = ["", "", "", "", "", "", "", "", ""];
  const fieldElements = document.querySelectorAll(".field");
  const resultMessage = document.querySelector("#resultMessage");

  const updateGameboard = (function () {
    for (let i = 0; i < gameboard.length; i++) {
      const fieldElement = document.querySelector(`#n${i}`);
      const symbolInput = function () {
        if (game.winner === game.player1 || game.winner === game.player2)
          return;
        if (this.innerHTML != "") return;
        if (game.activePlayer === game.player1 && this.innerHTML === "") {
          this.innerHTML = "X";
          gameboard[i] = this.innerHTML;
          game.activePlayer = game.player2;
        }
        if (game.activePlayer === game.player2 && this.innerHTML === "") {
          this.innerHTML = "O";
          gameboard[i] = this.innerHTML;
          game.activePlayer = game.player1;
        }
        checkWinner();
      };
      fieldElement.addEventListener("click", symbolInput);
    }
  })();

  const checkWinner = function () {
    if (
      (gameBoard.gameboard[0] === "X" &&
        gameBoard.gameboard[1] === "X" &&
        gameBoard.gameboard[2] === "X") ||
      (gameBoard.gameboard[3] === "X" &&
        gameBoard.gameboard[4] === "X" &&
        gameBoard.gameboard[5] === "X") ||
      (gameBoard.gameboard[6] === "X" &&
        gameBoard.gameboard[7] === "X" &&
        gameBoard.gameboard[8] === "X") ||
      (gameBoard.gameboard[0] === "X" &&
        gameBoard.gameboard[4] === "X" &&
        gameBoard.gameboard[8] === "X") ||
      (gameBoard.gameboard[0] === "X" &&
        gameBoard.gameboard[3] === "X" &&
        gameBoard.gameboard[6] === "X") ||
      (gameBoard.gameboard[1] === "X" &&
        gameBoard.gameboard[4] === "X" &&
        gameBoard.gameboard[7] === "X") ||
      (gameBoard.gameboard[2] === "X" &&
        gameBoard.gameboard[5] === "X" &&
        gameBoard.gameboard[8] === "X") ||
      (gameBoard.gameboard[2] === "X" &&
        gameBoard.gameboard[4] === "X" &&
        gameBoard.gameboard[6] === "X")
    ) {
      console.log("Player1 is the winner!");
      resultMessage.innerHTML = `${game.player1.name} is the winner!`;
      game.winner = game.player1;
    } else if (
      (gameBoard.gameboard[0] === "O" &&
        gameBoard.gameboard[1] === "O" &&
        gameBoard.gameboard[2] === "O") ||
      (gameBoard.gameboard[3] === "O" &&
        gameBoard.gameboard[4] === "O" &&
        gameBoard.gameboard[5] === "O") ||
      (gameBoard.gameboard[6] === "O" &&
        gameBoard.gameboard[7] === "O" &&
        gameBoard.gameboard[8] === "O") ||
      (gameBoard.gameboard[0] === "O" &&
        gameBoard.gameboard[4] === "O" &&
        gameBoard.gameboard[8] === "O") ||
      (gameBoard.gameboard[0] === "O" &&
        gameBoard.gameboard[3] === "O" &&
        gameBoard.gameboard[6] === "O") ||
      (gameBoard.gameboard[1] === "O" &&
        gameBoard.gameboard[4] === "O" &&
        gameBoard.gameboard[7] === "O") ||
      (gameBoard.gameboard[2] === "O" &&
        gameBoard.gameboard[5] === "O" &&
        gameBoard.gameboard[8] === "O") ||
      (gameBoard.gameboard[2] === "O" &&
        gameBoard.gameboard[4] === "O" &&
        gameBoard.gameboard[6] === "O")
    ) {
      console.log("Player2 is the winner!");
      resultMessage.innerHTML = `${game.player2.name} is the winner!`;
      game.winner = game.player2;
    } else if (
      gameBoard.gameboard[0] != "" &&
      gameBoard.gameboard[1] != "" &&
      gameBoard.gameboard[2] != "" &&
      gameBoard.gameboard[3] != "" &&
      gameBoard.gameboard[4] != "" &&
      gameBoard.gameboard[5] != "" &&
      gameBoard.gameboard[6] != "" &&
      gameBoard.gameboard[7] != "" &&
      gameBoard.gameboard[8] != "" &&
      game.winner != game.player1 &&
      game.winner != game.player2
    ) {
      console.log("It is a draw!");
      resultMessage.innerHTML = "It is a draw!";
    }
  };

  return {
    updateGameboard,
    gameboard,
    fieldElements,
    resultMessage,
  };
})();

function FactoryPlayer(name, symbol) {
  return { name, symbol };
}

const restartAll = (function () {
  const restartButton = document.querySelector("#restart");

  const restartGame = function () {
    game.resetGame();
    
    for (let i = 0; i < gameBoard.gameboard.length; i++) {
      const fieldElement = document.querySelector(`#n${i}`);
      fieldElement.innerHTML = "";
    }
  };
  restartButton.addEventListener("click", restartGame);
})();
