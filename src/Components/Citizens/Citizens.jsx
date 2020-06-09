import React from 'react';
import './css/Citizens.css';

const Citizens = (props) => {
  let {
        tasksState,
        cupsState,
        trophies
      } = {...props};

  let CitizensList = [];

  for (let i=0; i<20; i++) {

    let classValue = `label-ct label-ct-${i+1}`;
    
    CitizensList.push(
      <div className="Citizens__container--block">
        <div className="box label-box">
          <label className={classValue} htmlFor="citiz">Citizen {i+1}:</label>            
        </div>
        <div className="box icon-box">
          {cupsState &&
            (
              <i className="fas fa-trophy icon icon-cup"></i>
            )}
          {tasksState &&
            (
              <i className="fas fa-tasks icon icon-task"></i>
            )}
        </div>
        <div className="box input-box">
          <input className="citiz" type="number" />
        </div>
        <div className="box text-box">
          <p>Award:</p>
        </div>
        <div className="box diamond-box">
          <i className="fas fa-gem icon icon-diamond"></i>
          <p>{trophies[i].diamsEarned}</p>
        </div>
        <div className="box ruby-box">
          <i className="fas fa-gem icon icon-ruby"></i>
          <p>{trophies[i].rubiesEarned}</p>
        </div>
      </div>
    );
}

  return (
    <div className="Citizens">
      <div className="Citizens__container">
          {CitizensList}
      </div>
    </div>
  );
}

export default Citizens;