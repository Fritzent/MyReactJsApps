import React from 'react';
import ModalPopUp from './modal.create.item';

class ActionBar extends React.Component {

  state = {
    isOpen: false
  }

  render(){
    
    return(
    <div className="actionBar">
      <div className="app-names"> {this.props.aplication} </div>
      <button className="btn_add" id="btnAdd" onClick={(e) => this.setState({ isOpen: true })}> New </button>
      <ModalPopUp isOpen={this.state.isOpen} />
      
    </div>
    );
  }
}

export default ActionBar;
