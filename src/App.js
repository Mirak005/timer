import React from 'react';
import './App.css';
import Timer from './compenents/Timer.js'


const clock={time:360054354540000}

function App() {
  return (
    <Timer clock={clock}/>
  );
}

export default App;
