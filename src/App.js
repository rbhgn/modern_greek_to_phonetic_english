import React, { Component } from 'react';
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
     <div className="App">
        <div className="header">
          <h1>Modern Greek to Phonetic English</h1>
        </div>
        <div className="input">
        <textarea rows="10" cols="150" value={ this.state.input } onChange={ this.handleChange }>
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
