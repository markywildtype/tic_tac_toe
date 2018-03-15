import React, {Component} from 'react';
import Square from './Square'

class Board extends Component {

  constructor(props){
    super(props);
    this.state = {

    }
  }

  render(){
    return (
      <table>
        <tr>
          <td id="a1"><Square /></td>
          <td id="a2"><Square /></td>
          <td id="a3"><Square /></td>
        </tr>
        <tr>
          <td id="b1"><Square /></td>
          <td id="b2"><Square /></td>
          <td id="b3"><Square /></td>
        </tr>
        <tr>
          <td id="c1"><Square /></td>
          <td id="c2"><Square /></td>
          <td id="c3"><Square /></td>
        </tr>
      </table>
    )
  }

}

export default Board;
