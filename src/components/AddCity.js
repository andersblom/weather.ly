import React, { Component } from 'react';
import axios from 'axios';

import Header from './Header';

import sharedStyles from '../resources/sharedStyles';

export default class AddCity extends Component {
  constructor() {
    super();
    this.state = {
      cityInput: "",
      alertError: false,
      alertErrorMessage: "Whoops! Something went wrong",
      inputFocussed: false,
    }
  }

  componentDidMount() {
    this.cityInput.focus();
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
      });
      if (err.response) {
        this.setState({
          alertErrorMessage: err.response.data.message
        })
      }
    });
  }

  handleChangeToCityInput(e) {
    this.setState({
      cityInput: e.target.value
    });
  }

  toggleCityInputFocus() {
    this.setState({
      inputFocussed: !this.state.inputFocussed
    });
  }

  render() {
    return (
        <div>
            <Header {...this.props} showBackBtn={true} showSettings={false} />
            <form style={styles.inputContainer} onSubmit={e => this.handleSubmit(e)}>
              <input type="text" 
                onFocus={() => this.toggleCityInputFocus()} 
                onBlur={() => this.toggleCityInputFocus()} 
                ref={(input) => { this.cityInput = input }} 
                value={this.state.cityInput} 
                placeholder={(this.state.inputFocussed ? null : "Enter your city")}
                onChange={e => this.handleChangeToCityInput(e)} 
                style={
                (this.state.inputFocussed ?
                  {...styles.inputField, ...styles.inputFieldFocussed}
                  :
                  styles.inputField
                )}
              />
              
              <input type="submit" style={
                (this.state.cityInput.length < 1 ?
                  {...styles.addCityButton, ...styles.addCityButtonDisabled}
                  :
                  styles.addCityButton
                )} />
            </form>
            {(this.state.alertError ? <div>Error: {this.state.alertErrorMessage}</div> : null)}
        </div>
    );
  }
}

const styles = {
  inputContainer: {
    height: "calc(100vh - 230px)", // 115 (Header: 90px height + 25px margin) * 2 to account for top/bottom
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  inputField: {
    width: "80%",
    fontSize: "20px",
    padding: "1em",
    textAlign: "center",
    border: "none",
    borderBottom: "2px solid",
    borderBottomColor: sharedStyles.color.fadedBlue,
    boxShadow: "none",
    outline: "none",
  },

  inputFieldFocussed: {
    borderBottomColor: sharedStyles.color.blue
  },

  addCityButton: {
    backgroundColor: "#ffffff",
    marginTop: "40px",
    padding: "1.2em 3.4em 1.2em 3.4em",
    border: "3px solid",
    borderColor: sharedStyles.color.blue,
    color: sharedStyles.color.blue,
    fontFamily: sharedStyles.font,
    textDecoration: "none",
    textTransform: "uppercase",
    fontSize: "14px",
    fontWeight: "bold",
    borderRadius: "100px",
  },

  addCityButtonDisabled: {
    borderColor: sharedStyles.color.fadedBlue,
    color: sharedStyles.color.fadedBlue,
  }
}