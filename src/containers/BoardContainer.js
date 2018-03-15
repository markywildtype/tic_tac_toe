import React, {Component} from 'react';
import Board from '../components/Board';
import Button from '../components/Button';

class BoardContainer extends Component {

constructor(props){
  super(props);
  this.state = {
    squareValues: [null, null, null, null, null, null, null, null, null],
    playerTurn: true
  }
  this.handleRefreshButton = this.handleRefreshButton.bind(this);
  this.handleSquareClick = this.handleSquareClick.bind(this);
  this.switchPlayer = this.switchPlayer.bind(this);
  this.updateSquareValue = this.updateSquareValue.bind(this);
}

handleRefreshButton(){
  console.log('REFRESH, DAMN YOU!');
}

switchPlayer = () => {
  this.state.playerTurn ? this.setState({playerTurn: false}) : this.setState({playerTurn: true});
}

updateSquareValue(index, value){
  const newArray = this.state.squareValues;
  newArray[index] = value;
  this.setState({squareValues: newArray});
}

handleSquareClick = (event) => {
  const index = event.target.getAttribute("index");
  console.log(index);
  if(this.state.squareValues[index] === null){
    console.log('square also clicked');
    this.switchPlayer();
  if(this.state.playerTurn === true){
    this.updateSquareValue(index, 'X');
  } else {
    this.updateSquareValue(index, 'O')
  }
} else return;
}

render(){
  return (
    <div>
      <Board squareValues={this.state.squareValues} handleSquareClick={this.handleSquareClick}/>
      <Button refreshGame={this.handleRefreshButton}/>
    </div>
  )
}

}

export default BoardContainer;
