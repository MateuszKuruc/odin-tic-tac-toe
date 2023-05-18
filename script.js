"use strict";

const gameBoard = {
  gameboard: [],
};

function FactoryPlayer(name, symbol) {
  return { name, symbol };
}

const Player1 = FactoryPlayer("mati", "x");
const Player2 = FactoryPlayer("pami", "o");
console.log(Player1, Player2);
