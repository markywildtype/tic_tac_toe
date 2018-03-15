import React from 'react';

const Button = (props) => {

  return (
    <button className="new-game" onClick={props.refreshGame}>New Game</button>
  )

}

export default Button;
