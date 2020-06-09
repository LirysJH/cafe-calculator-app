import React from 'react';
import './css/Prizes.css';

const Prizes = (props) => {

    let {
            tasksState,
            cupsState,
            generalAmount,
            generalDiamondsAmount,
            generalRubiesAmount
        } = {...props};

    return (
        <div className="Prizes">
            <p>
                Enter number of completed tasks or received cups at the last festival. 
            </p>
            <div className="container">
                {cupsState &&
                    (
                    <i className="fas fa-trophy icon icon-cup"></i>
                )}
                {tasksState &&
                    (
                    <i className="fas fa-tasks icon icon-task"></i>
                )}
                <input className="quantity-for-festival"
                        type="number"
                        name="generalAmount"
                        value={generalAmount}
                        onChange={props.changeGeneralAmountHandler} />
            </div>
            <p>
                Enter general quantity of diamonds and rubies,
                received at the last festival.
            </p>
            <div className="container">
                <div>
                    <i className="fas fa-gem icon icon-diamond"></i>
                    <input className="quantity-for-festival"
                            type="number"
                            name="generalDiamondsAmount"
                            value={generalDiamondsAmount}
                            onChange={props.changeGeneralDiamondsAmountHandler}  />        
                </div>
                <div>
                    <i className="fas fa-gem icon icon-ruby"></i>
                    <input className="quantity-for-festival"
                            type="number"
                            name="generalRubiesAmount"
                            value={generalRubiesAmount}
                            onChange={props.changeGeneralRubiesAmountHandler} />        
                </div>                
            </div>
        </div>
    );
}

export default Prizes;