import React from 'react';
import axios from 'axios';

class ModalPopUp extends React.Component {
  constructor(){
    super();
    this.state={
      title: '',
      category: '',
      description: ''
    }
  }

  handleChange = event => {
    this.setState({ 
      [event.target.id]: event.target.value
    });
  }
  handleSubmit = event => {
    
    const data = {
      title: this.state.title,
      category: this.state.category,
      description: this.state.description
    };

    axios.post("https://fullstack-book.ariefdfaltah.com/book/create?key=fritzent",data)
      .then(res => {
        console.log(res)
        console.log(res.data.data)
      }).catch((err) => {
        console.log(err)
      })

  }

  render(){
    let popup = (
      <div className="modal-container" id="modal" >
        <div className="modal-body">
            <div className="txt-Title"> Title </div>
            <input className="input" type="text" id="title" name="input-title" onChange={this.handleChange}></input>
            <div className="txt-Category"> Category </div>
            <input className="input" type="text" id="category" name="input-category" onChange={this.handleChange}></input>
            <div className="txt-Desc"> Description </div>
            <input className="input" type="text" id="description" name="input-desc" onChange={this.handleChange}></input>
            <button className="button" type="submit" value="Save" onClick={this.handleSubmit}>Post</button>
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

export default ModalPopUp;
