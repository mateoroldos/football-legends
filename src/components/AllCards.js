import React, { useState } from 'react';
import Card from './Card';
import gameData from '../gameData';
import helperFunctions from '../helperFunctions';

function AllCards() {
  const [counter, setCounter] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [cardsClicked, setCardsClicked] = useState(0);

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

  const restart = () => {
    setCardsClicked(cardsClicked + 1);
    checkBestScore();
    restartCounter();
  };

  const shuffleCards = () => {
    setCards([...helperFunctions.shuffle(cards)]);
  };

  const playerElements = () => {
    const cards = Object.keys(players).map((key) => (
      <Card
        key={key}
        player={players[key]}
        addCounter={addCounter}
        parentValue={cardsClicked}
        shuffle={shuffleCards}
        restart={restart}
        counter={addCounter}
      />
    ));
    return cards;
  };

  const [cards, setCards] = useState(playerElements());

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
