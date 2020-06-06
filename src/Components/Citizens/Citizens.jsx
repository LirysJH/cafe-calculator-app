import React from 'react';
import './css/Citizens.css';

const Citizens = (props) => {
  return (
    <div className="Citizens">
      <div className="Citizens__container">
        <div className="Citizens__container--block">
          <div className="box label-box">
            <label htmlFor="ct-1">Citizen 1:</label>
          </div>
          <div className="box input-box">
            <input className="citiz ct-1" type="text" />
          </div>
          <div className="box text-box">
            <p>Award</p>
          </div>
          <div className="box diamond-box">
            <img src="../images/bri.png" alt="diamond" />
            {/* <i class="fas fa-gem"></i> */}
          </div>
          <div className="box ruby-box">
            <img src="../images/rub.png" alt="ruby" />
            {/* <i class="fas fa-diamond"></i> */}
          </div>
        </div>
      </div>


    </div>
  );
}

export default Citizens;