import React, { Component } from 'react';

import Header from './Header';

import sharedStyles from '../resources/sharedStyles';

export default class Settings extends Component {
  constructor() {
    super();
    this.state = {
      temperatureSetting: undefined,
      distanceSetting: undefined
    }
  }
  
  // Fetch the current settings from App and display these
  // + store them, in case save is clicked when no changes are made.
  componentDidMount() {
    this.setState({
      temperatureSetting: this.props.appSettingUnitTemp,
      distanceSetting: this.props.appSettingUnitDistance
    })
  }

  // Handles clicks on the temperature-setting buttons
  handleTemperatureChange(e) {
    this.setState({
      temperatureSetting: e.target.name
    })
  }

  // Handles clicks on the distance-setting buttons
  handleDistanceChange(e) {
    this.setState({
      distanceSetting: e.target.name
    })
  }

  // If you hit the back-button, nothing happens.
  // If you hit the save-button, trigger this function:
  saveAndClose() {
    // Update settings through App's updateSetting()
    this.props.updateSetting("unittemp", this.state.temperatureSetting);
    this.props.updateSetting("distancetemp", this.state.distanceSetting);
    // Redirect back to last page
    this.props.history.goBack();
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
        <div>
          <button style={styles.changeSettingButton} onClick={(e) => {this.handleDistanceChange(e)}} name="meters">Meters</button>
          <button style={styles.changeSettingButton} onClick={(e) => {this.handleDistanceChange(e)}} name="feet">feet</button>
        </div>
        <div>
          <button style={styles.changeSettingButton} onClick={() => { this.saveAndClose() }}>Save</button>
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