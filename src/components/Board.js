import React from 'react';
import Square from './Square'

const Board = (props) => {
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <td><Square index='0' playerTurn={props.playerTurn} switchPlayer={this.switchPlayer} squareValue={props.squareValues[0]} handleSquareClick={props.handleSquareClick}/></td>
            <td><Square index='1' playerTurn={props.playerTurn} switchPlayer={this.switchPlayer} squareValue={props.squareValues[1]} handleSquareClick={props.handleSquareClick}/></td>
            <td><Square index='2' playerTurn={props.playerTurn} switchPlayer={this.switchPlayer} squareValue={props.squareValues[2]} handleSquareClick={props.handleSquareClick}/></td>
          </tr>
          <tr>
            <td><Square index='3' playerTurn={props.playerTurn} switchPlayer={this.switchPlayer} squareValue={props.squareValues[3]} handleSquareClick={props.handleSquareClick}/></td>
            <td><Square index='4' playerTurn={props.playerTurn} switchPlayer={this.switchPlayer} squareValue={props.squareValues[4]} handleSquareClick={props.handleSquareClick}/></td>
            <td><Square index='5' playerTurn={props.playerTurn} switchPlayer={this.switchPlayer} squareValue={props.squareValues[5]} handleSquareClick={props.handleSquareClick}/></td>
          </tr>
          <tr>
            <td><Square index='6' playerTurn={props.playerTurn} switchPlayer={this.switchPlayer} squareValue={props.squareValues[6]} handleSquareClick={props.handleSquareClick}/></td>
            <td><Square index='7' playerTurn={props.playerTurn} switchPlayer={this.switchPlayer} squareValue={props.squareValues[7]} handleSquareClick={props.handleSquareClick}/></td>
            <td><Square index='8' playerTurn={props.playerTurn} switchPlayer={this.switchPlayer} squareValue={props.squareValues[8]} handleSquareClick={props.handleSquareClick}/></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}



export default Board;
