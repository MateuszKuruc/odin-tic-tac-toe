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

  const createPlayer = function () {
    confirmButton.addEventListener("click", function (event) {
      event.preventDefault();
      player1Name = document.querySelector("#name").value;
      player2Name = document.querySelector("#name2").value;
      game.player1 = FactoryPlayer(player1Name, "X");
      game.player2 = FactoryPlayer(player2Name, "O");
      formBlock.classList.add("hidden");
      game.activePlayer = game.player1;
      gameBoard.resultMessage.innerHTML = 'In progress...'
    });
  };

  startGame.addEventListener("click", function () {
    formBlock.classList.remove("hidden");
    createPlayer();
  });

  return {
    activePlayer,
    player1,
    player2,
    winner,
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
      (gameboard[0] === "X" && gameboard[1] === "X" && gameboard[2] === "X") ||
      (gameboard[3] === "X" && gameboard[4] === "X" && gameboard[5] === "X") ||
      (gameboard[6] === "X" && gameboard[7] === "X" && gameboard[8] === "X") ||
      (gameboard[0] === "X" && gameboard[4] === "X" && gameboard[8] === "X") ||
      (gameboard[0] === "X" && gameboard[3] === "X" && gameboard[6] === "X") ||
      (gameboard[1] === "X" && gameboard[4] === "X" && gameboard[7] === "X") ||
      (gameboard[2] === "X" && gameboard[5] === "X" && gameboard[8] === "X") ||
      (gameboard[2] === "X" && gameboard[4] === "X" && gameboard[6] === "X")
    ) {
      console.log("Player1 is the winner!");
      resultMessage.innerHTML = `${game.player1.name} is the winner!`;
      winner = game.player1;
    } else if (
      (gameboard[0] === "O" && gameboard[1] === "O" && gameboard[2] === "O") ||
      (gameboard[3] === "O" && gameboard[4] === "O" && gameboard[5] === "O") ||
      (gameboard[6] === "O" && gameboard[7] === "O" && gameboard[8] === "O") ||
      (gameboard[0] === "O" && gameboard[4] === "O" && gameboard[8] === "O") ||
      (gameboard[0] === "O" && gameboard[3] === "O" && gameboard[6] === "O") ||
      (gameboard[1] === "O" && gameboard[4] === "O" && gameboard[7] === "O") ||
      (gameboard[2] === "O" && gameboard[5] === "O" && gameboard[8] === "O") ||
      (gameboard[2] === "O" && gameboard[4] === "O" && gameboard[6] === "O")
    ) {
      console.log("Player2 is the winner!");
      resultMessage.innerHTML = `${game.player2.name} is the winner!`;
      winner = game.player2;
    } else if (
      gameboard[0] != "" &&
      gameboard[1] != "" &&
      gameboard[2] != "" &&
      gameboard[3] != "" &&
      gameboard[4] != "" &&
      gameboard[5] != "" &&
      gameboard[6] != "" &&
      gameboard[7] != "" &&
      gameboard[8] != "" &&
      winner != "player1" &&
      winner != "player2"
    ) {
      console.log("It is a draw!");
      resultMessage.innerHTML = "It is a draw!";
    }
  };

  return {
    updateGameboard,
    gameboard,
    fieldElements,
    resultMessage
  };
})();

function FactoryPlayer(name, symbol) {
  return { name, symbol };
}

const restartGame = (function () {
  const restartButton = document.querySelector("#restart");

  const restartGame = function () {
    gameBoard.gameboard = ["", "", "", "", "", "", "", "", ""];
    resultMessage.innerHTML = "";
    game.winner = "";
    for (let i = 0; i < gameBoard.fieldElements.length; i++) {
      const fieldElement = document.querySelector(`#n${i}`);
      fieldElement.innerHTML = "";
    }
  };
  restartButton.addEventListener("click", restartGame);
})();
