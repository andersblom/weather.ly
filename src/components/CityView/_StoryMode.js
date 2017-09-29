import React, { Component } from 'react';

export default class StoryMode extends Component {
  getCityName() {
    return this.props.singleCityData.userInput;
  }

  getTemperatureInUnit() {
    return this.props.getTemperatureInSettingsMetric(this.props.singleCityData.data.main.temp, this.props.appSettingUnitTemp)
  }

  getWindSpeedAndDirection() {
    const getWindDirection = (windDeg) => {
      /* eslint-disable */
      switch(true) {
        case windDeg => 0 && windDeg <= 10:
        case windDeg > 165 && windDeg <= 180:
          return "North";
          break;

        case windDeg > 10 && windDeg <= 35:
          return "North East";
          break;

        case windDeg > 35 && windDeg <= 55:
          return "East";
          break;

        case windDeg > 55 && windDeg <= 80:
          return "South East";
          break;

        case windDeg > 80 && windDeg <= 100:
          return "South";
          break;

        case windDeg > 100 && windDeg <= 125:
          return "South West";
          break;

        case windDeg < 125 && windDeg <= 145: 
          return "West";
          break;

        case windDeg < 145 && windDeg <= 165:
          return "North West"
          break;

        default: 
          break;
      }
      /* eslint-enable */
    }

    const getWindSpeed = (speed, metric) => {
      if (metric === "meters") {
        return `${speed} m/s`;
      } else {
        let speedInMph;
        speedInMph = speed * 2.2369
        speedInMph = speedInMph.toFixed(1);
        return `${speedInMph} mph`
      }
    }
    
    const stringToPrint = `${getWindSpeed(this.props.singleCityData.data.wind.speed, this.props.appSettingUnitDistance)} from the ${getWindDirection(this.props.singleCityData.data.wind.deg)}`

    return stringToPrint;

  }
  
  render() {
    console.log(this.props.singleCityData);
    return (
      <div>
        It’s a beautiful night in {this.getCityName()}, 
        with a clear blue sky, {this.getTemperatureInUnit()} 
        and {this.getWindSpeedAndDirection()}. 
        Then sun rose at 7 am and will set at 6:59 pm. 
        It’s not too humid, and there is plenty of 
        chance to see the stars with only 21% clouds.
      </div>
    );
  }
}