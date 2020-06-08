import React from 'react';
import './css/Prizes.css';

const Prizes = (props) => {

    let {tasksState,
        cupsState,
        generalAmount,
        generalDiamondsAmount,
        generalRubiesAmount}={...props};

    return (
        <div className="Prizes">
            <p>
                Enter number of completed tasks or received cups at the last festival. 
            </p>
            <div className="container">
                {cupsState &&
                    (
                    <img className="icon icon-cup" src="https://i.imgur.com/ZlvUter.png" alt="cup" />
                )}
                {tasksState &&
                    (
                    <img className="icon icon-task" src="https://i.imgur.com/JPaeM6P.png" alt="task" />
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
                    <img className="icon icon-diamond"
                        src="https://i.imgur.com/0VHOYxn.png"
                        alt="diamond" />
                    <input className="quantity-for-festival"
                            type="number"
                            name="generalDiamondsAmount"
                            value={generalDiamondsAmount}
                            onChange={props.changeGeneralDiamondsAmountHandler}  />        
                </div>
                <div>
                    <img className="icon icon-ruby"
                        src="https://i.imgur.com/9SCLNcC.png"
                        alt="ruby" />
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