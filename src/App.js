import React, { Component }  from 'react';
import logo from './logo.svg';
import './index.css';
import Header from './components/Header';
import Home from './components/Home';


function App() {

const name = 'Sean'

  return (
    //<div className="App">
    //  <Header />
    //  square
    //  <p class="text">SQUARE TEXT</p>
    //</div>
    //<div class="square">
    //  <p class="text">square text</p>
    //</div>
    // <div class="circle">
    //   <p class="text">circle text</p>
    // </div>
    <div className="App">
    {/* in the header.js file in components, is where I have configured all the buttons to be showing up.
    We are calling the header component and everything is already inside of it.  */}
      <Header />
      Home Page 
      <div class="square">
        <p class="text">square text</p>
        
      </div>
      <div>
        <Button onClick={App} console.log(Math.floor(100000 + Math.random() * 900000));
      </div>

    </div>

  );
}

export default App;
