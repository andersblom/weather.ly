import React, { Component } from 'react';
import Header from './Header';

export default class SingleCityView extends Component {
  getTemperatureInSettingsMetric(kelvin, unit) {
    if (unit === "celsius") {
      let calculatedNumber = kelvin - 273.15;
      calculatedNumber = calculatedNumber.toFixed(0);
      return calculatedNumber + " °C";
    } else {
      let calculatedNumber = kelvin * 9/5 - 459.67;
      calculatedNumber = calculatedNumber.toFixed(0);
      return calculatedNumber + " °F";
    }
  }

  render() {
    var data;
    
    this.props.data.forEach((city, index) => {
      if (city.name.toLowerCase() === this.props.match.params.cityName) {
        data = city;
      }
    });

    if (data !== undefined) {
      return (
        <div>
          <Header {...this.props} showBackBtn={true} showSettings={true} />
          HI FRIEND IT'S A WHOPPING {this.getTemperatureInSettingsMetric(data.main.temp, this.props.appSettingUnitTemp)} IN {data.name.toUpperCase()} HOW COOL IS THAT
        </div>
      );
    } else {
      return (
        <div>
          Looking up into the sky and calculating..
        </div>
      );
    }
  }
}