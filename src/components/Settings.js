import React, { Component } from 'react';

import Header from './Header';

import sharedStyles from '../resources/sharedStyles';

export default class Settings extends Component {
  // componentDidMount() {
  //   this.props.updateSetting("unittemp", "celcius");
  // }

  handleTemperatureChange(e) {
    this.props.updateSetting("unittemp", e.target.name);
  }

  componentWillUnmount() {
    console.log("cya");
  }

  render() {
    return (
      <div>
        <Header {...this.props} showBackBtn={true} showSettings={false} />
        <div>Settings</div>
        <div>
          <button style={styles.changeSettingButton} onClick={(e) => {this.handleTemperatureChange(e)}} name="celsius">Celsius</button>
          <button style={styles.changeSettingButton} onClick={(e) => {this.handleTemperatureChange(e)}} name="fahrenheit">Fahrenheit</button>
        </div>
      </div>
    );
  }
}

const styles = {
  changeSettingButton: {
    marginTop: "40px",
    padding: "1.2em 3.4em 1.2em 3.4em",
    border: "3px solid " + sharedStyles.color.blue,
    color: sharedStyles.color.blue,
    fontFamily: sharedStyles.font,
    textDecoration: "none",
    textTransform: "uppercase",
    fontSize: "14px",
    fontWeight: "bold",
    borderRadius: "100px",
  }
}