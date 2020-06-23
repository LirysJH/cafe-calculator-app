/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {Component} from 'react';
import './css/App.css';
import Citizens from './Components/Citizens/Citizens';
import Prizes from './Components/Prizes/Prizes';
//import Loader from './Components/Loader/Loader';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tasksState: false,
      cupsState: false,
      /* averageState: false,
      averageButtonBackground: ""  average = 50/50 */
      tasksButtonBackground: "",
      cupsButtonBackground: "",
      data: {
        generalAmount: 64000,
        generalDiamondsAmount: 350,
        generalRubiesAmount: 70,
        citizensData: [
          {
            id: 1,
            diamsEarned: 0,
            rubiesEarned: 0,
            personalResult: 2500
          },
          {
            id: 2,
            diamsEarned: 0,
            rubiesEarned: 0,
            personalResult: 0
          },
          {
            id: 3,
            diamsEarned: 0,
            rubiesEarned: 0,
            personalResult: 0
          },
          {
            id: 4,
            diamsEarned: 0,
            rubiesEarned: 0,
            personalResult: 0
          },
          {
            id: 5,
            diamsEarned: 0,
            rubiesEarned: 0,
            personalResult: 0
          },
          {
            id: 6,
            diamsEarned: 0,
            rubiesEarned: 0,
            personalResult: 0
          },
          {
            id: 7,
            diamsEarned: 0,
            rubiesEarned: 0,
            personalResult: 0
          },
          {
            id: 8,
            diamsEarned: 0,
            rubiesEarned: 0,
            personalResult: 0
          },
          {
            id: 9,
            diamsEarned: 0,
            rubiesEarned: 0,
            personalResult: 0
          },
          {
            id: 10,
            diamsEarned: 0,
            rubiesEarned: 0,
            personalResult: 0
          },
          {
            id: 11,
            diamsEarned: 0,
            rubiesEarned: 0,
            personalResult: 0
          },
          {
            id: 12,
            diamsEarned: 0,
            rubiesEarned: 0,
            personalResult: 0
          },
          {
            id: 13,
            diamsEarned: 0,
            rubiesEarned: 0,
            personalResult: 0
          },
          {
            id: 14,
            diamsEarned: 0,
            rubiesEarned: 0,
            personalResult: 0
          },
          {
            id: 15,
            diamsEarned: 0,
            rubiesEarned: 0,
            personalResult: 0
          },
          {
            id: 16,
            diamsEarned: 0,
            rubiesEarned: 0,
            personalResult: 0
          },
          {
            id: 17,
            diamsEarned: 0,
            rubiesEarned: 0,
            personalResult: 0
          },
          {
            id: 18,
            diamsEarned: 0,
            rubiesEarned: 0,
            personalResult: 0
          },
          {
            id: 19,
            diamsEarned: 0,
            rubiesEarned: 0,
            personalResult: 0
          },
          {
            id: 20,
            diamsEarned: 0,
            rubiesEarned: 0,
            personalResult: 0
          }
        ]
      }
    }
  };

  toggleTasksState = () => {
    this.setState({
      tasksState: !this.state.tasksState,
      cupsState: false
    });

    if(this.state.tasksState) {
      this.setState({
        tasksButtonBackground: ""
      });
    }
    else {
      this.setState({
        tasksButtonBackground: "hsl(24, 100%, 41%)",
        cupsButtonBackground: "" 
      });
    }
  }

  toggleCupsState = () => {
    this.setState({
      tasksState: false,
      cupsState: !this.state.cupsState
    });

    if(this.state.cupsState) {
      this.setState({
        cupsButtonBackground: ""
      });
    }
    else {
      this.setState({
        tasksButtonBackground: "",
        cupsButtonBackground: "hsl(24, 100%, 41%)"
      });
    }
  }

  changeGeneralAmount = (event) => {

    this.setState({
      data:{
        generalAmount: +event.target.value
      }      
    });
  }

  changeGeneralDiamondsAmount = (event) => {

    this.setState({
      data:{
        generalDiamondsAmount: +event.target.value
      }      
    });
  }

  changeGeneralRubiesAmount = (event) => {

    this.setState({
      data:{
        generalRubiesAmount: +event.target.value
      }      
    });
  }

  changeValueHandle = (id, key, value) => {
    this.setState({
      data:
      {
        citizensData: this.state.data.citizensData.map(
          (item) =>
            item.id === id
              ? { ...item, [key]: value }
              : item
        )
      }
    });
  }

  render() {

    return(
      <div className="App">
        {/*
          <Loader />
        */}

        <a href="#"
            className="backToTopLink"
            title="Click to get to the top" >
              <i className="fas fa-arrow-up"></i>
        </a>

        <header>
          <h3>Attention! Non-commercial usage only</h3>
          <p>
            This is <span className="note">unofficial</span> prototype of
            &nbsp;
            <a className="mycafeLink" href="https://mycafe.space"
              target="_blank"
              rel="noopener noreferrer">
                Melsoft Games Online Calculator
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
        </header>

        {/*
          TODO:
          - language switch button
          - fix mathematical calculations
        */}
        
        <main>
          <hr />

          <section>
            <p>How would you like to calculate awards?</p>
            <div className="buttonsBox">
              <button className="buttonsBox__button button-tasks"
                      onClick={this.toggleTasksState}
                      style={{backgroundColor: this.state.tasksButtonBackground}}>
                BY TASKS
              </button>
              <button className="buttonsBox__button button-cups"
                      onClick={this.toggleCupsState}
                      style={{backgroundColor: this.state.cupsButtonBackground}} >
                BY CUPS
              </button>
              {/*
              <button className="buttonsBox__button button-50-50">
                50/50
              </button>
              */}
            </div>
          </section>

          <hr />

          <section>
              <Prizes tasksState={this.state.tasksState}
                      cupsState={this.state.cupsState}
                      generalAmount={this.state.data.generalAmount}
                      generalDiamondsAmount={this.state.data.generalDiamondsAmount}
                      generalRubiesAmount={this.state.data.generalRubiesAmount}
                      changeGeneralAmountHandler={this.changeGeneralAmount}
                      changeGeneralDiamondsAmountHandler={this.changeGeneralDiamondsAmount}
                      changeGeneralRubiesAmountHandler={this.changeGeneralRubiesAmount} />
          </section>

          <hr />

          <section>
            { this.state.tasksState && (
              <Citizens tasksState={this.state.tasksState}
                        cupsState={this.state.cupsState}
                        trophies={this.state.data.citizensData} />
            )}

            { this.state.cupsState && (
              <Citizens tasksState={this.state.tasksState}
                        cupsState={this.state.cupsState}
                        trophies={this.state.data.citizensData}
                        generalAmount={this.state.data.generalAmount}
                        generalDiamondsAmount={this.state.data.generalDiamondsAmount}
                        generalRubiesAmount={this.state.data.generalRubiesAmount}
                        onChangeValueHandle={this.changeValueHandle} />
            )}
          </section>
        </main>
        
      </div>
    )
  };
}

export default App;