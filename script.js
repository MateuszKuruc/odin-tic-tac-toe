"use strict";

// let activePlayer = "X";
// let player1;
// let player2;
let winner;

const gameBoard = (function () {
  let gameboard = ["", "", "", "", "", "", "", "", ""];
  let activePlayer = 'X';
  const fieldElements = document.querySelectorAll(".field");
  const resultMessage = document.querySelector('#resultMessage');

  const updateGameboard = (function () {
    for (let i = 0; i < gameboard.length; i++) {
        const fieldElement = document.querySelector(`#n${i}`);
        const symbolInput = function() {
            if (winner === 'player1' || winner === 'player2') return;
            else if (activePlayer === 'X' && this.innerHTML === '') {
                this.innerHTML = 'X';
                gameboard[i] = this.innerHTML;
                activePlayer = 'O';
                checkWinner();
            }   else if (activePlayer === 'O' && this.innerHTML === '') {
                this.innerHTML = 'O';
                gameboard[i] = this.innerHTML;
                activePlayer = 'X';
                checkWinner();
            }
        }
        fieldElement.addEventListener('click', symbolInput)
    }
  })()

  const checkWinner = function() {
    
    if (
        (gameboard[0] === 'X' && gameboard[1] === 'X' && gameboard[2] === 'X') || 
        (gameboard[3] === 'X' && gameboard[4] === 'X' && gameboard[5] === 'X') || 
        (gameboard[6] === 'X' && gameboard[7] === 'X' && gameboard[8] === 'X') ||
        (gameboard[0] === 'X' && gameboard[4] === 'X' && gameboard[8] === 'X') ||
        (gameboard[2] === 'X' && gameboard[4] === 'X' && gameboard[6] === 'X')
    ) {
        console.log('Player1 is the winner!');
        resultMessage.innerHTML = ('Player1 is the winner!');
        winner = 'player1';
    }
    else if (
        (gameboard[0] === 'O' && gameboard[1] === 'O' && gameboard[2] === 'O') || 
        (gameboard[3] === 'O' && gameboard[4] === 'O' && gameboard[5] === 'O') || 
        (gameboard[6] === 'O' && gameboard[7] === 'O' && gameboard[8] === 'O') ||
        (gameboard[0] === 'O' && gameboard[4] === 'O' && gameboard[8] === 'O') ||
        (gameboard[2] === 'O' && gameboard[4] === 'O' && gameboard[6] === 'O')
    ) {
        console.log('Player2 is the winner!');
        resultMessage.innerHTML = ('Player2 is the winner!');
        winner = 'player2';
    }   else if ((gameboard[0] != '' && gameboard[1] != '' && gameboard[2] != '' && gameboard[3] != '' &&
        gameboard[4] != '' && gameboard[5] != '' && gameboard[6] != '' && gameboard[7] != '' &&
        gameboard[8] != '') && (winner != 'player1' && winner != 'player2')) {
        console.log('It is a draw!');
        resultMessage.innerHTML = ('It is a draw!')
    }
  }

  return {
    updateGameboard,
    gameboard,
    fieldElements,
    // checkWinner
  }
})();


function FactoryPlayer(name, symbol) {
  return { name, symbol };
}

const gameFlow = (function() {
   const restartButton = document.querySelector('#restart');
    const resultMessage = document.querySelector('#resultMessage');
    
    const restartGame = function() {
        gameBoard.gameboard = ['', '', '', '', '', '', '', '', ''];
        resultMessage.innerHTML = '';
        winner = '';
        for (let i = 0; i < gameBoard.fieldElements.length; i++) {
            const fieldElement = document.querySelector(`#n${i}`);
            fieldElement.innerHTML = '';
        }
    }
    restartButton.addEventListener('click', restartGame);
})();

const createPlayers = (function() {
    const buttonX = document.querySelector('#playerX');
    const buttonO = document.querySelector('#playerO');
    // const player1Name = prompt('choose your name');
    // const player1 = FactoryPlayer(player1Name, 'X');
    // console.log(player1);
})();


const displayController = (function () {



})();

