import React, { Component } from 'react';

import sharedStyles from '../../resources/sharedStyles';

import CloudIcon from '../../resources/icons/cloud.svg';
import WindIcon from '../../resources/icons/wind.svg';

export default class QuickMode extends Component {
  render() {
    console.log(this.props);
    return (
      <div style={styles.container}>
        <div style={styles.weatherRes}>
          <div style={styles.weatherResPreCity}>Todays weather for</div>
          <div style={styles.weatherResCityName}>{this.props.singleCityData.data.name}</div>
        </div>
        <div style={styles.temperature}>81 <span style={styles.tempUnit}>°F</span></div>
        <div style={styles.weatherExpContainer}>
          <div style={styles.weatherExpIcon}><img src={WindIcon} alt="Todays weather" /></div>
          <div>
            <div style={styles.weatherExplanation}>Clear sky,</div>
            <div style={styles.weatherExplanation}>No rain</div>
          </div>
        </div>
        <div>
          <div style={styles.weatherExpIcon}><img src={CloudIcon} alt="Todays weather" /></div>
          <div>
            <div style={styles.weatherExplanation}>Little to no wind</div>
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  container: {
    fontFamily: sharedStyles.font,
  },

  weatherRes: {
    fontSize: "20px",
  },

  weatherResPreCity: {
    fontWeight: "400",
    fontSize: "20px",
    marginBottom: "0.2em",
  },
  
  weatherResCityName: {
    fontWeight: "bold",
    color: sharedStyles.color.blue,
    fontSize: "24px",
  },

  temperature: {
    fontSize: "80px",
    fontWeight: "600",
    color: sharedStyles.color.blue,
    margin: "0.15em 0",
  },
  
  tempUnit: {
    fontSize: "31px",
    fontWeight: "400",
  },

  weatherExpContainer: {
    marginBottom: "1.2em",
  },

  weatherExpIcon: {
    marginBottom: "0.6em",
  },
  
  weatherExplanation: {
    fontSize: "20px",
    fontWeight: "400",
    marginBottom: "0.2em",
  }
}