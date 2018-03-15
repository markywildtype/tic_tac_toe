import React, {Component} from 'react';
import Board from '../components/Board';
import Button from '../components/Button';

class BoardContainer extends Component {

constructor(props){
  super(props);
  this.state = {
  }
  this.handleRefreshButton = this.handleRefreshButton.bind(this)
}

handleRefreshButton(){
  console.log('REFRESH!');
  this.setState({})
}


render(){
  return (
    <div>
      <Board />
      <Button refreshGame={this.handleRefreshButton}/>
    </div>
  )
}

}

export default BoardContainer;
