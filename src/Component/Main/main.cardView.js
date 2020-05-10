import React from 'react';

class CardView extends React.Component {

  render(){


    return(
    <div className="cardview-list">
      <div className="title-book"> {this.props.judul} </div>
      <div className="img-book"> </div>
      <div className="desc-book"> {this.props.isi} </div>
      <button className="btn_update"> update </button>
      <button className="btn_delete"> delete </button>
    </div>
    );
  }
}

export default CardView;
