import React, { Component } from 'react';
import axios from 'axios';

import Header from './Header';

export default class AddCity extends Component {
  constructor() {
    super();
    this.state = {
      cityInput: "",
      alertError: false,
      alertErrorMessage: ""
    }
  }

  handleSubmit(e) {
    e.preventDefault();

    axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${this.state.cityInput}&appid=665710852455d67e78e4348c9e30a120`)
    .then(res => {
      this.props.handleSubmitFromAddCity(this.state.cityInput)
      this.props.history.push("/cities");
    })
    .catch(err => {
      console.error(err)
      this.setState({
        alertError: true,
        alertErrorMessage: err.response.data.message
      });
    });
  }

  handleChangeToCityInput(e) {
    this.setState({
      cityInput: e.target.value
    });
  }
  render() {
    return (
        <div>
            <Header {...this.props} showBackBtn={true} showSettings={false} showCloseBtn={false} />
            <div>Add city</div>
            <form onSubmit={e => this.handleSubmit(e)}>
              <input type="text" value={this.state.cityInput} placeholder="Henlo" onChange={e => this.handleChangeToCityInput(e)} />
              <input type="submit" />
            </form>
            {(this.state.alertError ? <div>Error: {this.state.alertErrorMessage}</div> : null)}
        </div>
    );
  }
}