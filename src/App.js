import React, {Component} from 'react';
import './App.css';
import Calculator from './Components/Calculator/Calculator';
import Loader from './Components/Loader/Loader';

class App extends Component {
  
  render() {

    return(
      <div className="App">
        {/*
          <Loader />
        */}
        <h2>Attention!</h2>
        <p>
          This is <span className="note">unofficial</span> prototype of
          &nbsp;
          <a className="mycafe" href="https://mycafe.space"
            target="_blank"
            rel="noopener noreferrer">
              Online Calculator
          </a>
          &nbsp;
          made by Lirys
        </p>

        {/*
          TODO:
          - language switch button
          - day/night mode switch button
         */}

        <Calculator />
      </div>
    )
  };
}

export default App;