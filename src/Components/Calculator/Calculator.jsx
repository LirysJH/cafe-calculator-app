import React from 'react';
import './css/Calculator.css';
import Citizens from '../Citizens/Citizens';

const Calculator = (props) => {
  return (
    <div className="Calculator">
      <section>
        <p>How would you like to calculate awards?</p>
        <div className="buttonsBox">
          <button className="buttonsBox__button button-tasks">
            BY TASKS
          </button>
          <button className="buttonsBox__button button-cups">
            BY CUPS
          </button>
          <button className="buttonsBox__button button-50-50">
            50/50
          </button>
        </div>
      </section>
      <hr />
      <hr />
      <Citizens />
    </div>
  );
}

export default Calculator;
