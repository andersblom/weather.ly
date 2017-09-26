import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Header from './Header';

export default class AddCity extends Component {
  constructor() {
    super();
    this.state = {
      cityInput: "",
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.handleSubmitFromAddCity(this.state.cityInput)
    this.props.history.push("/cities");
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
        </div>
    );
  }
}