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
        <div style={styles.settingsContainer}>
          <div style={styles.settingsHeader}>Settings</div>

          <div style={styles.unitHeader}>Temperature Unit</div>
          <div>
            <button 
              style={(this.state.temperatureSetting === "celsius" ? 
                {...styles.changeSettingButton, ...styles.changeSettingButtonLeft, ...styles.changeSettingButtonHover} 
                : 
                {...styles.changeSettingButton, ...styles.changeSettingButtonLeft}
              )}  
              onClick={(e) => {this.handleTemperatureChange(e)}} 
              name="celsius">
              Celsius
            </button>
            <button 
              style={(this.state.temperatureSetting === "fahrenheit" ? 
                {...styles.changeSettingButton, ...styles.changeSettingButtonRight, ...styles.changeSettingButtonHover} 
                : 
                {...styles.changeSettingButton, ...styles.changeSettingButtonRight}
              )}
              onClick={(e) => {this.handleTemperatureChange(e)}} 
              name="fahrenheit">
              Fahrenheit
            </button>
          </div>

          <div style={styles.unitHeader}>Distance Unit</div>
          <div>
            <button 
              style={(this.state.distanceSetting === "meters" ? 
                {...styles.changeSettingButton, ...styles.changeSettingButtonLeft, ...styles.changeSettingButtonHover} 
                : 
                {...styles.changeSettingButton, ...styles.changeSettingButtonLeft}
              )}
              onClick={(e) => {this.handleDistanceChange(e)}} 
              name="meters">
              Meters
            </button>
            <button 
              style={(this.state.distanceSetting === "feet" ? 
                {...styles.changeSettingButton, ...styles.changeSettingButtonRight, ...styles.changeSettingButtonHover} 
                : 
                {...styles.changeSettingButton, ...styles.changeSettingButtonRight}
              )}
              onClick={(e) => {this.handleDistanceChange(e)}} 
              name="feet">
              Feet
            </button>
          </div>
          <div style={styles.submitButtonContainer}>
            <button 
              style={styles.submitButton} 
              onClick={() => { this.saveAndClose() }}>
              Save
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  settingsContainer: {
    height: "calc(100vh - 115px)", // 115 (Header: 90px height + 25px margin) * 2 to account for top/bottom
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItem: "center",
    textAlign: "center",
  },
  
  settingsHeader: {
    fontFamily: sharedStyles.font,
    fontSize: "20px",
    color: sharedStyles.color.brightGray,
    marginBottom: "40px",
  },

  unitHeader: {
    marginBottom: "20px",
    fontFamily: sharedStyles.font,
    fontSize: "14px",
    textTransform: "uppercase",
    letterSpacing: "1px",
    color: sharedStyles.color.fadedBlue,
  },

  changeSettingButton: {
    marginBottom: "40px",
    backgroundColor: "transparent",
    padding: "1.2em 3.4em 1.2em 3.4em",
    border: "3px solid",
    borderColor: sharedStyles.color.fadedBlue,
    color: sharedStyles.color.fadedBlue,
    fontFamily: sharedStyles.font,
    textDecoration: "none",
    textTransform: "uppercase",
    fontSize: "14px",
    fontWeight: "bold",
    position: "relative",
    zIndex: "0",
  },
  changeSettingButtonLeft: {
    borderRadius: "100px 0px 0px 100px",
  },
  changeSettingButtonRight: {
    marginLeft: "-3px",
    borderRadius: "0px 100px 100px 0px",
  },
  changeSettingButtonHover: {
    borderColor: sharedStyles.color.fadedBlue,
    color: sharedStyles.color.white,
    backgroundColor: sharedStyles.color.fadedBlue,
    outline: "none",
    zIndex: "1",
  },

  submitButtonContainer: {
    marginTop: "auto",
    marginBottom: "50px",
  },

  submitButton: {
    backgroundColor: "transparent",
    padding: "1.2em 3.4em 1.2em 3.4em",
    border: "3px solid",
    fontFamily: sharedStyles.font,
    textDecoration: "none",
    textTransform: "uppercase",
    fontSize: "14px",
    fontWeight: "bold",
    position: "relative",
    zIndex: "0",

    borderColor: sharedStyles.color.blue,
    color: sharedStyles.color.blue,
    borderRadius: "100px",
  }
}