import React, { useState, useEffect } from "react";

const Card = (props) => {
  const [clicked, setClicked] = useState(props.parentValue);

  const clickHandler = () => {
    if (typeof (clicked) === "number") {
      setClicked("yes");
      props.shuffle();
      props.addCounter();
    } 
    else if (clicked === "yes") {
      props.shuffle();
      props.restart();
      alert("perdiste")
    }
  }

  useEffect(() => {
    setClicked(props.parentValue)
  }, [props.parentValue]); 

  const imageFile = "player_images/" + props.player.imageName + ".jpeg"

  return (
    <div className="card" onClick={clickHandler}>
      <div>{clicked}</div>
      <img className="card-image" src={imageFile} alt={props.player}/>
      <div className="fullname-container">
        <h2 className="player-name">{props.player.name + " "}</h2>
        <h2 className="player-surname">{props.player.surname}</h2>
      </div>
    </div>
  )
}

export default Card