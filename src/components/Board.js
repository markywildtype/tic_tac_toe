import React, {Component} from 'react';
import Square from './Square'

class Board extends Component {

  constructor(props){
    super(props);
    this.state = {
      playerTurn: true
    }
    this.switchPlayer = this.switchPlayer.bind(this);
  }

  switchPlayer = () => {
    this.state.playerTurn ? this.setState({playerTurn: false}) : this.setState({playerTurn: true});
  }

  render(){
    return (
      <div onClick={this.switchPlayer}>
        <table>
          <tbody>
            <tr>
              <td id="a1"><Square playerTurn={this.state.playerTurn}/></td>
              <td id="a2"><Square playerTurn={this.state.playerTurn}/></td>
              <td id="a3"><Square playerTurn={this.state.playerTurn}/></td>
            </tr>
            <tr>
              <td id="b1"><Square playerTurn={this.state.playerTurn}/></td>
              <td id="b2"><Square playerTurn={this.state.playerTurn}/></td>
              <td id="b3"><Square playerTurn={this.state.playerTurn}/></td>
            </tr>
            <tr>
              <td id="c1"><Square playerTurn={this.state.playerTurn}/></td>
              <td id="c2"><Square playerTurn={this.state.playerTurn}/></td>
              <td id="c3"><Square playerTurn={this.state.playerTurn}/></td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }

}

export default Board;
