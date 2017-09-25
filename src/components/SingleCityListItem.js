import React, { Component } from 'react';

import ClearSkyBg from '../resources/listentrybackgrounds/clearsky.jpg';

export default class SingleCityListItem extends Component {
  componentDidMount() {
  }

  getTemperatureInUnit(kelvin, unit) {
    if (unit === "celcius") {
      let calculatedNumber = kelvin - 273.15;
      calculatedNumber = calculatedNumber.toFixed(0);
      return calculatedNumber;
    } else {
      let calculatedNumber = kelvin * 9/5 - 459.67;
      calculatedNumber = calculatedNumber.toFixed(0);
      return calculatedNumber;
    }
  }

  getUnitLetter(unit) {
    if (unit === "celcius") {
      return "°C"
    } else {
      return "°F"
    }
  }

  render() {
    return (
      <div style={styles.singleListItemEntry}>
          <div>{this.props.cityData.name}, {this.props.cityData.sys.country}</div>
          <div>
              {this.getTemperatureInUnit(this.props.cityData.main.temp, this.props.appSettingUnitTemp)} {this.getUnitLetter(this.props.appSettingUnitTemp)}
          </div>
      </div>
    );
  }
}

const styles = {
  singleListItemEntry: {
    width: "calc(100% - 30px)",
    margin: "0 15px 25px 15px",
    boxShadow: "0px 5px 15px 0px rgba(0,0,0,0.07)",
    backgroundImage: `url(${ClearSkyBg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    height: "15vh",
    borderRadius: "5px",
  }
}

// const temperatureCalculatedToCelcius = 
// const temperatureCalculatedToFahrenheit = 