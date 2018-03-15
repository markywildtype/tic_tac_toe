import React, {Component} from 'react';

class Square extends Component {

  constructor(props){
    super(props);
    this.state = {
      noughtOrCross: null
    }
    this.handleSquareClick = this.handleSquareClick.bind(this);
  }


  handleSquareClick = () => {
    console.log(this.props.playerTurn);
    if(this.props.playerTurn === true){
      this.setState({noughtOrCross: 'X'})
    } else {
      this.setState({noughtOrCross: 'O'})
    }
  }

  render(){
    return(
      <div className="square" onClick={this.handleSquareClick}>
        <h1 >{this.state.noughtOrCross}</h1>
      </div>
    )
  }


}

export default Square;
