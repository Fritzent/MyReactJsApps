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
  getNewList = () => {
    axios.get("https://fullstack-book.ariefdfaltah.com/book/list?key=fritzent").then(res =>
      this.setState({
        data: res.data.data
      })
    );
  }

  handleRemove = (data) => {
    console.log(data)

    axios.get(`https://fullstack-book.ariefdfaltah.com/book/delete/${data}?key=fritzent`)
    .then((res) => {
      console.log(res);
      this.getNewList()
    })
  }

  render(){
    return <>{this.state.data.map((data, key) => {
      return <div className="content-list">
        <CardView id={data.id} judul={data.title} isi={data.description} data={data} remove={this.handleRemove} />
      </div> 
    })}</>;
  }
}

export default Main;
