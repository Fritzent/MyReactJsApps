import React from 'react';

class ActionBar extends React.Component {

  render(){
  
    return(
    <div className="actionBar">
      <div className="app-names"> {this.props.aplication} </div>
      <button className="btn_add"> New </button>
    </div>
    );
  }
}

export default ActionBar;
