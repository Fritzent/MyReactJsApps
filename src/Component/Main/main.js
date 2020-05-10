import React from 'react';
import axios from "axios";
import CardView from './main.cardView';

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    axios.get("https://fullstack-book.ariefdfaltah.com/book/list?key=fritzent").then(res =>
      this.setState({
        data: res.data.data
      })
    );
  }

  render(){
    return <>{this.state.data.map((data, key) => {
      return <div className="content-list">
        <CardView judul={data.title} isi={data.description} />
      </div> 
    })}</>;
  }
}

export default Main;
