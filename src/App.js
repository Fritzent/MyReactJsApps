import React from 'react';
import './App.css';
import ActionBar from './Component/ActionBar/actionbar';
import Main from './Component/Main/main';

function App() {
  const appNames = " ListAja.com "

  return (
    <div className="Container">
      <ActionBar aplication={appNames}/>
      <Main/>
    </div>
  );
}

export default App;
