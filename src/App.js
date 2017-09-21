import React, { Component } from 'react';
import axios from 'axios';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        {this.props.children}
      </div>
    );
  }
}