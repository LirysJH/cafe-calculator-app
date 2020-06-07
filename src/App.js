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
        <h3>Attention! Non-commercial usage only</h3>
        <p>
          This is <span className="note">unofficial</span> prototype of
          &nbsp;
          <a className="mycafeLink" href="https://mycafe.space"
            target="_blank"
            rel="noopener noreferrer">
              Online Calculator
          </a>
          &nbsp;
          made by
          &nbsp;
          <a className="mailto"
              href="mailto:snslirys@gmail.com?subject=Awards Calculator">
                Lirys
          </a>
          .
        </p>
        <p>
          No personal data is used or saved here.
        </p>

        {/*
          TODO:
          - language switch button
          - day/night mode switch button
        */}
        <hr />
        <Calculator />
      </div>
    )
  };
}

export default App;