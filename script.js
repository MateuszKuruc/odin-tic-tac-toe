"use strict";



const gameBoard = (function() {
    // create board grid
    const displayGrid = function() {
        const boardRows = 3;
    const boardColumns = 3;
    const container = document.querySelector('.gameboard');
    for (let i = 0; i < boardRows; i++) {
        const rowCell = document.createElement('div');
        rowCell.classList.add('boardCell');
        container.appendChild(rowCell);
        for (let j = 0; j < boardColumns -1; j++) {
            const columnCell = document.createElement('div');
            columnCell.classList.add('boardCell');
            container.appendChild(columnCell);
        }
    }
    }
    // gameboard array with choices
    let gameboard = ['x', 'x', 'o', 'x', 'o'];
    return {
        gameboard,
        displayGrid: function() {
        displayGrid();
    }
}
})();

function FactoryPlayer(name, symbol) {
  return { name, symbol };
}

const gameFlow = (function() {
    
})();

const displayController = (function() {
    gameBoard.displayGrid();
})();

const Player1 = FactoryPlayer("mati", "x");
const Player2 = FactoryPlayer("pami", "o");
console.log(Player1, Player2);

