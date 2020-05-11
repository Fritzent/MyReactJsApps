import React from 'react';
import UpdateView from './modal.update.item';

class CardView extends React.Component {
  state = {
    isOpen: false
  }


  render(){


    return(
    <div className="cardview-list">
      <div className="title-book"> {this.props.judul} </div>
      <div className="img-book"> </div>
      <div className="desc-book"> {this.props.isi} </div>
      <button className="btn_update" onClick={(e) => this.setState({ isOpen: true })}> details </button>
      <UpdateView isOpen={this.state.isOpen}/>
      <button className="btn_delete" onClick={() => this.props.remove(this.props.data.id)}> delete </button>
    </div>
    );
  }
}

export default CardView;
