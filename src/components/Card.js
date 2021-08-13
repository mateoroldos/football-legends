import React, { useState, useEffect } from 'react';

const Card = (props) => {
  const [clicked, setClicked] = useState(props.round);

  const clickHandler = () => {
    if (typeof clicked === 'number') {
      props.addCounter();
      setClicked('yes');
    } else if (clicked === 'yes') {
      props.restart();
      alert('You Lost!');
    }
  };

  useEffect(() => {
    setClicked(props.round);
  }, [props.round]);

  const imageFile = 'player_images/' + props.player.imageName + '.jpeg';

  return (
    <div className="card" onClick={clickHandler}>
      <img className="card-image" src={imageFile} alt={props.player} />
      <div className="fullname-container">
        <h2 className="player-name">{props.player.name + ' '}</h2>
        <h2 className="player-surname">{props.player.surname}</h2>
      </div>
    </div>
  );
};

export default Card;
