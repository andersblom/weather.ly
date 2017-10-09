import React, { Component } from 'react';

import moment from 'moment';

import sharedStyles from '../../resources/sharedStyles';

export default class StoryMode extends Component {
  introMessage() {
    let weather = this.props.singleCityData.data.weather[0].icon;

    switch(weather) {
      /* eslint-disable */
      // Clear sky
      case "01d":
      case "01n":
      // Few clouds
      case "02d":
      case "02n":
        return "It's a beeaaautiful day";
        break;

      // Scattered clouds
      case "03d":
      case "03n":
      // Broken Clouds
      case "04d":
      case "04n":
        return "It's a somewhat cloudy day";
        break;

      // Shower rain
      case "09d":
      case "09n":
      // Rain
      case "10d":
      case "10n":
        return "Uh oh. Today is a rainy one";
        break;

      // Thunderstorm
      case "11d":
      case "11n":
        return "Better not be playing golf, because you're getting thunderstorms";
        break;

      // Snow
      case "13d":
      case "13n":
        return "It's snowing!";
        break;

      // Mist
      case "50d":
      case "50n":
        return "It's kind of foggy/misty";
        break;

      // No match (Could happen because of API problems/changes)
      default: 
        return "It's gonna be a good day!";
      /* eslint-enable */
    }
  }
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
        case windDeg => 0 && windDeg <= 20:
        case windDeg > 340 && windDeg <= 360:
          return "North";
          break;

        case windDeg > 20 && windDeg <= 60:
          return "North East";
          break;

        case windDeg > 60 && windDeg <= 120:
          return "East";
          break;

        case windDeg > 120 && windDeg <= 160:
          return "South East";
          break;

        case windDeg > 160 && windDeg <= 220:
          return "South";
          break;

        case windDeg > 220 && windDeg <= 260:
          return "South West";
          break;

        case windDeg < 260 && windDeg <= 320: 
          return "West";
          break;

        case windDeg < 320 && windDeg <= 340:
          return "North West"
          break;

        default: 
          return "North"
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

  getTime(unixTime) {
    let date = new Date(unixTime * 1000);
    date = moment(date).format("LT")
    return date;
  }
  
  measureHumidity() {
    let humidity = this.props.singleCityData.data.main.humidity;
    
    switch(true) {
      case humidity <= 40:
        return "It's very dry"; 

      case humidity > 40 && humidity < 65:
        return `It's not too humid`; 

      case humidity >= 65 && humidity < 90:
        return "It's a little humid";

      case humidity >= 90:
        return "It's very humid";

      default: 
        return "Humidity is " + humidity + "%";
    }
  }

  showCloudPercentage() {
    let cloudPercentage = this.props.singleCityData.data.clouds.all;
    switch(true) {
      case cloudPercentage <= 15:
        return "there will be no problem seing the stars tonight, with this clear sky!"
      
      case cloudPercentage > 15 && cloudPercentage <= 35:
        return `the sky is somewhat clear, with only ${cloudPercentage}% skies!` 
      
      case cloudPercentage > 35 && cloudPercentage <= 60:
        return `it's kind of cloudy, around ${cloudPercentage}% will be covered in skies.` 
      
      case cloudPercentage > 60:
        return `It's very cloudy, so you won't be needing your sunglasses today!` 
    }
    return "there is plenty of chance to see the stars with only 21% clouds.";
  }

  render() {
    return (
      <div style={styles.storyModeContainer}>
        {this.introMessage()} in <span style={styles.highlight}>{this.getCityName()}</span>, with a clear blue sky, <span style={styles.highlight}>{this.getTemperatureInUnit()}</span> and <span style={styles.highlight}>{this.getWindSpeedAndDirection()}</span>. 
        The sunrise is at <span style={styles.highlight}>{this.getTime(this.props.singleCityData.data.sys.sunrise)}</span> and sunset at <span style={styles.highlight}>{this.getTime(this.props.singleCityData.data.sys.sunset)}</span>. {this.measureHumidity()}, and {this.showCloudPercentage()}
      </div>
    );
  }
}

const styles = {
  storyModeContainer: {
    fontFamily: sharedStyles.font,
    fontWeight: "400",
    fontSize: "19px",
    lineHeight: "1.26em",
    letterSpacing: "-0.3px",
  },

  highlight: {
    fontWeight: "bold",
    color: sharedStyles.color.blue,
  },
}