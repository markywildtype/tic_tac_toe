import React from 'react';

const Square = (props) => {
    return(
      <div className="square" onClick={props.handleSquareClick}>
        <h1 >{props.squareValue}</h1>
      </div>
    )
}

export default Square;
