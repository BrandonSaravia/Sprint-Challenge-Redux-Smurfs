import React, { Component } from 'react';
import './App.css';
import { getSmurfs } from "../actions"
import { connect } from "react-redux"
import NewSmurfForm from './newSmurfForm'
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.getSmurfs()
  }

  render() {
    return (
      <div className="App">
        <h1>Smurf Village</h1>
        {this.props.smurfs.map(smurf => {
          return (
            <div key={smurf.name}>
              <h3>{smurf.name}</h3>
              <p>Age: {smurf.age}</p>
              <p>Height: {smurf.height}</p>
            </div>
          )
        })}
        <NewSmurfForm />
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state.smurfs)
  return {
    smurfs: state.smurfReducer.smurfs
  }
}

export default connect(
  mapStateToProps,
  {
    getSmurfs
  }
)(App);
