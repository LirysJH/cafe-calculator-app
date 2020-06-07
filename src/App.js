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
      cupsButtonBackground: ""      
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

  render() {

    return(
      <div className="App">
        {/*
          <Loader />
        */}
        <header>
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
        </header>

        {/*
          TODO:
          - smooth upside navigation 
          - language switch button
          - day/night mode switch button ? necessary ?
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
                      cupsState={this.state.cupsState} />
          </section>

          <hr />

          <section>
            { this.state.tasksState && (
              <Citizens tasksState={this.state.tasksState}
                        cupsState={this.state.cupsState} />
            )}

            { this.state.cupsState && (
              <Citizens tasksState={this.state.tasksState}
                        cupsState={this.state.cupsState} />
            )}
          </section>          
        </main>
        
      </div>
    )
  };
}

export default App;