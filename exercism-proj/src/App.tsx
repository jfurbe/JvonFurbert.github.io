import React from 'react';
import logo from './logo.svg';
import './App.css';
import poly from './res/poly.png';
import happy from './res/mood-happy.png';
import vector from './res/Vector 1.png';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <div className="flex justify-center App">
      <div className="flex flex-col items-center justify-center App-frame-254">
      <img
        className="App-Img"
        src={poly}
        />
        <img
        className="App-Img2"
        src={happy}
        />
        <h2 className="App-Title">Testimonials I've left</h2>
        <img
        className="App-Img3"
        src={vector}
        />
      </div>
      <Testimonials />
    </div>
  );
}

export default App;
