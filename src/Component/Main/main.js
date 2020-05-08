import React from 'react';
import CardView from './main.cardView';

class Main extends React.Component {

  render(){
    const titleBook = "Roboto Restaurant"
    const description = "Shinjuku is a special ward in Tokyo, Japan. It is a major commercial and "
    

    return(
    <div className="content-list">
      <CardView title={titleBook} desc={description}/> 
    </div>
    );
  }
}

export default Main;
