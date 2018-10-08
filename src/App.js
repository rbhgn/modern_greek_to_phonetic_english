import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { translateInput } from './translator'
import { greekAlphabet } from './greekAlphabet'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {input: ''};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      input: event.target.value,
      output: translateInput(event.target.value, greekAlphabet)
    });
  }

  render() {
    return (
     this.state &&  <div className="App">
        <div className="header"></div>
        <div className="input">
        <textarea rows="4" cols="50" value={ this.state.input } onChange={ this.handleChange }>
        </textarea>
        </div>
        <div className="output">
         <p>{ this.state.output }</p>
        </div>
      </div>
    );
  }
}

export default App;
