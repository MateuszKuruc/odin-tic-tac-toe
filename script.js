"use strict";

// let activePlayer = "X";
// let player1;
// let player2;
let winner;
let player1;
let player2;
let activePlayer = player1;


const createPlayers = (function() {
    const buttonX = document.querySelector('#playerX');
    const buttonO = document.querySelector('#playerO');
    const confirmButton = document.querySelector('#submit');
    const formBlock = document.querySelector('.form-block')
    let player1Name;
    let player2Name;
  
   
    const createPlayer1 = function() {
    confirmButton.addEventListener('click', function(event) {
        event.preventDefault();
        player1Name = document.querySelector('#name').value;
        player1 = FactoryPlayer(player1Name, 'X');
        console.log(player1);
        formBlock.classList.add('hidden');
    }) 
    }

    const createPlayer2 = function() {
        confirmButton.addEventListener('click', function(event) {
            event.preventDefault();
            player2Name = document.querySelector('#name').value;
            player2 = FactoryPlayer(player2Name, 'O');
            console.log(player2);
            formBlock.classList.add('hidden');
        })
    }

    buttonX.addEventListener('click', function() {
        formBlock.classList.remove('hidden');
        createPlayer1();
    })

    buttonO.addEventListener('click', function() {
        formBlock.classList.remove('hidden');
        createPlayer2();
    })
    return { player1, player2 }
})();

const gameBoard = (function () {
  let gameboard = ["", "", "", "", "", "", "", "", ""];
  const fieldElements = document.querySelectorAll(".field");
  const resultMessage = document.querySelector('#resultMessage');

  const updateGameboard = (function() {
    for (let i = 0; i < gameboard.length; i++) {
        const fieldElement = document.querySelector(`#n${i}`);
        const symbolInput = function() {
            // if (player1 === '' || player1 === undefined && player2 === '' || player2 === undefined) return;
            if (winner === player1 || winner === player2) return;
            // chat gpt
            if (this.innerHTML != '') return;
            // chat gpt
            if (activePlayer === player1 && this.innerHTML === '') {
                this.innerHTML = 'X';
                gameboard[i] = this.innerHTML;
                activePlayer = player2;
                checkWinner();
            }   if (activePlayer === player2 && this.innerHTML === '') {
                this.innerHTML = 'O';
                gameboard[i] = this.innerHTML;
                activePlayer = player1;
                checkWinner();
            }

    }
        fieldElement.addEventListener('click', symbolInput)
    }
  })();

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




const displayController = (function () {



})();

