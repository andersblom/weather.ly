import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  componentDidMount() {
    axios.get("http://api.openweathermap.org/data/2.5/weather?q=Buffalo,usa&appid=665710852455d67e78e4348c9e30a120")
    .then(res => {
      console.log(res.data);
    })
    .catch(err => console.error(err));

    axios.get("http://api.openweathermap.org/data/2.5/forecast?q=Buffalo,usa&appid=665710852455d67e78e4348c9e30a120")
    .then(res => {
      console.log(res.data);
    })
    .catch(err => console.error(err));
  }
  render() {
    return (
      <div className="App">
        
      </div>
    );
  }
}

export default App;
