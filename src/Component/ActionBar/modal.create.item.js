import React from 'react';

class ModalPopUp extends React.Component {

  render(){
  
    return(
    <div className="modal-container" id="modal">
        <div className="modal-body">
            <div className="txt-Title"> Title </div>
            <input className="input" type="text" id="input-title" name="input-title"></input>
            <div className="txt-Desc"> Description </div>
            <input className="input" type="text" id="input-desc" name="input-desc"></input>
            <input className="button" type="submit" value="Save"></input>
        </div>
    </div>
    
    );
  }
}

export default ModalPopUp;
