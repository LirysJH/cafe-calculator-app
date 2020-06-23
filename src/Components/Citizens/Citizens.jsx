import React from 'react';
import './css/Citizens.css';

const Citizens = (props) => {
  let {
        tasksState,
        cupsState,
        trophies,
        generalAmount,
        generalDiamondsAmount,
        generalRubiesAmount
      } = {...props};

  let CitizensList = [];

  for (let i=0; i<20; i++) {

    let percentage = 0;

    console.log("trophies[i].personalResult - ", trophies[i].personalResult);
    
    if(trophies[i].personalResult > 0 && trophies[i].personalResult <= generalAmount) {
      percentage = +Math.floor(trophies[i].personalResult*100/generalAmount);
    }
    else percentage = 0;
      
    console.log("percentage - ", percentage);
    
    if ((percentage > 0 && percentage <= 100)
        && (trophies[i].personalResult > 0 && trophies[i].personalResult <= generalAmount)) {
      trophies[i].diamsEarned = +Math.floor(generalDiamondsAmount*percentage/100);
    }
    else trophies[i].diamsEarned = 0;

    if ((percentage > 0 && percentage <= 100)
        && (trophies[i].personalResult > 0 && trophies[i].personalResult <= generalAmount)) {
      trophies[i].rubiesEarned = +Math.floor(generalRubiesAmount*percentage/100);
    }
    else trophies[i].rubiesEarned = 0;

    console.log("trophies[i].diamsEarned - ", trophies[i].diamsEarned);
    console.log("trophies[i].rubiesEarned - ", trophies[i].rubiesEarned);

    const keyBlockValue = `citizens-block-${i+1}`;
    const classValue = `label-ct label-ct-${i+1}`;
    
    CitizensList.push(
      <div className="Citizens__container--block" key={keyBlockValue}>
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
          <input className="citiz"
                  type="number"
                  value={trophies[i].personalResult}
                  onChange={props.onChangeValueHandle} />
        </div>
        <div className="box text-box">
          <p>Award:</p>
        </div>
        <div className="box diamond-box">
          <i className="fas fa-gem icon icon-diamond"></i>
          <p>{+trophies[i].diamsEarned}</p>
        </div>
        <div className="box ruby-box">
          <i className="fas fa-gem icon icon-ruby"></i>
          <p >{+trophies[i].rubiesEarned}</p>
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