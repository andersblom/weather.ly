import React, { Component } from 'react';

import sharedStyles from '../../resources/sharedStyles';

export default class QuickMode extends Component {
  render() {
    console.log(this.props);
    return (
      <div style={styles.container}>
        <div style={styles.weatherRes}>
          <div style={styles.weatherResPreCity}>Todays weather for</div>
          <div style={styles.weatherResCityName}>{this.props.singleCityData.data.name}</div>
        </div>
        <div>81 <span>°F</span></div>
        <div>
          <div>Icon</div>
          <div>
            <div>Clear sky,</div>
            <div>No rain</div>
          </div>
        </div>
        <div>
          <div>Icon</div>
          <div>
            <div>Little to no wind</div>
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
    fontWeight: "300",
  },
  
  weatherResCityName: {
    fontWeight: "bold",
  },
}