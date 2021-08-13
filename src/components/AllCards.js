import React, { useState } from 'react';
import Card from './Card';
import gameData from '../gameData';
import helperFunctions from '../helperFunctions';

function AllCards() {
  const [counter, setCounter] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [round, setRound] = useState(0);

  const players = gameData.playersArray;

  const addCounter = () => {
    setCounter(counter + 1);
  };

  const checkBestScore = () => {
    if (counter > bestScore) {
      setBestScore(counter);
    }
  };

  const restartCounter = () => {
    setCounter(0);
  };

  const nextRound = () => {
    setRound(round + 1);
  };

  const restart = () => {
    checkBestScore();
    restartCounter();
    nextRound();
  };

  const cards = helperFunctions.shuffle(
    Object.keys(players).map((key) => (
      <Card key={key} player={players[key]} round={round} addCounter={addCounter} restart={restart} />
    ))
  );

  return (
    <div className="App">
      <h1>
        Football Legends <br />
        <span className="subtitle-main">Memory Game</span>
      </h1>
      <div className="board">
        <div className="score">Best Score: {bestScore}</div>
        <div className="counter">Counter: {counter}</div>
      </div>
      <div className="cards">{cards}</div>
    </div>
  );
}

export default AllCards;
