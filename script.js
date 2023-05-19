"use strict";

const gameBoard = (function() {
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
})();

function FactoryPlayer(name, symbol) {
  return { name, symbol };
}

const Player1 = FactoryPlayer("mati", "x");
const Player2 = FactoryPlayer("pami", "o");
console.log(Player1, Player2);
