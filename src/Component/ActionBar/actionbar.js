import React from 'react';
import ModalPopUp from './modal.create.item';

class ActionBar extends React.Component {

  render(){
  
    return(
    <div className="actionBar">
      <div className="app-names"> {this.props.aplication} </div>
      <button className="btn_add"> New </button>
      <ModalPopUp/>
      <div id="overlay"></div>
    </div>
    );
  }
}

export default ActionBar;
