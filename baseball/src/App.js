
//IMPORTS ⬇︎
import React, { Component } from 'react';
import Score from './components/score';
import Megatron from './components/megatron';
import "./App.css";

//APP SETUP  ⬇︎
class App extends Component {
  constructor( props ) {
    super( props );
    this.state = {
      balls: 0,
      strikes: 0
    }
  }

  hit = e => {
    this.setState({
      balls: 0,
      strikes: 0,
    })
  };

  addBall = e => {
    this.setState( prevState => {
      return {
        balls: prevState.balls + 1
      }
    })
  };

  addStrike = e => {
    this.setState( prevState => {
      return {
        strikes: prevState.strikes + 1,
      }
    })
  };

  addFoul = e => {
    if ( this.state.strikes === 0 ) {
      this.setState( prevState => {
        return {
          strikes: prevState.strikes + 1
        }
      })
    }
    if ( this.state.strikes === 1 ) {
      this.setState( prevState => {
        return {
          strikes: prevState.strikes + 1
        }
      })
    }
    if ( this.state.strikes === 2 ) {
      this.setState( prevState => {
        return {
          strikes: prevState = 2
        }
      })
    }
  }

  componentDidUpdate = ( prevProps , prevState ) => {
    if ((this.state.balls > 3) || (this.state.strikes > 2)) {
      this.setState({
        balls: 0,
        strikes: 0,
      })
    };
  };

  render() {
    return (
      <div className = 'App'>
        <h1>Baseball Simulation</h1>
        <div className = 'scoreboard'>
          <Score ballCount = { this.state.balls } strikeCount = { this.state.strikes } />
        </div>
        <div className = 'rules'>
          <h3>Rules:</h3>
          <ul>
            <li>balls and strikes reset to 0 when a player reaches 3 strikes or 4 balls.</li>
            <br></br>
            <li>Balls and Strikes reset to 0 when a hit is recorded.</li>
            <br></br>
            <li>A foul increases strikes up to 2. With no strikes, a foul makes it 1 strike. With 1 strike, a foul makes it 2 strikes. With two strikes a foul has no effect, count stays at 2 strikes.</li>
          </ul>
        </div>
        <div className = 'buttons'>
          <Megatron addBall = {this.addBall} addStrike = {this.addStrike} addFoul = { this.addFoul } hit = {this.hit} />
        </div>
      </div>
    )
  }
}

//EXPORTS ⬇︎
export default App;
