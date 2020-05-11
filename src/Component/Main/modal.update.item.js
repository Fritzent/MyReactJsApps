import React from 'react';

class ModalUpdate extends React.Component {

  render(){
    let popup = (
      <div className="modal-container" id="modal" >
        <div className="modal-body">
            <div className="txt-Title"> Title </div>
            <input className="input" type="text" id="title" name="input-title"></input>
            <div className="txt-Category"> Category </div>
            <input className="input" type="text" id="category" name="input-category"></input>
            <div className="txt-Desc"> Description </div>
            <input className="input" type="text" id="description" name="input-desc"></input>
            <button className="button" type="submit">Oke</button>
        </div>
      </div>
    );
    if(! this.props.isOpen){
      popup = null;
    }

    return(
      <div>
        {popup}
      </div>
    
    );
  }
}

export default ModalUpdate;
