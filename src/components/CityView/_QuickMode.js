import React, { Component } from 'react';

import sharedStyles from '../../resources/sharedStyles';

import CloudIcon from '../../resources/icons/cloud.svg';
import WindIcon from '../../resources/icons/wind.svg';

export default class QuickMode extends Component {
  getTemperature() {
    let kelvin = this.props.singleCityData.data.main.temp;
    let unit = this.props.appSettingUnitTemp;
    if (unit === "celsius") {
      let calculatedNumber = kelvin - 273.15;
      calculatedNumber = calculatedNumber.toFixed(0);
      return calculatedNumber;
    } else {
      let calculatedNumber = kelvin * 9/5 - 459.67;
      calculatedNumber = calculatedNumber.toFixed(0);
      return calculatedNumber;
    }
  }

  getTemperatureUnit() {
    let unit = this.props.appSettingUnitTemp;

    if (unit === "celsius") {
      return "°C";
    } else {
      return "°F";
    }
  }

  getSkyInfo() {
    let cloudPercentage = this.props.singleCityData.data.clouds.all;
    switch(true) {
      case cloudPercentage <= 15:
        return "Clear sky"
      
      case cloudPercentage > 15 && cloudPercentage <= 35:
        return `Somewhat clear sky` 
      
      case cloudPercentage > 35 && cloudPercentage <= 60:
        return `Cloudy` 
      
      case cloudPercentage > 60:
        return `Very cloudy` 
    }
  }

  getRainInfo() {
    let weather = this.props.singleCityData.data.weather[0].icon;
    
        switch(weather) {
          /* eslint-disable */
          // Clear sky
          case "01d":
          case "01n":
          // Few clouds
          case "02d":
          case "02n":
            return "No rain";
            break;
    
          // Scattered clouds
          case "03d":
          case "03n":
          // Broken Clouds
          case "04d":
          case "04n":
            return "No rain";
            break;
    
          // Shower rain
          case "09d":
          case "09n":
          // Rain
          case "10d":
          case "10n":
            return "Rain";
            break;
    
          // Thunderstorm
          case "11d":
          case "11n":
            return "Rain / Thunderstorms";
            break;
    
          // Snow
          case "13d":
          case "13n":
            return "Snow";
            break;
    
          // Mist
          case "50d":
          case "50n":
            return "Mist";
            break;
    
          // No match (Could happen because of API problems/changes)
          default: 
            return "It's gonna be a good day!";
          /* eslint-enable */
        }
  }

  getWindInfo() {
    let wind = this.props.singleCityData.data.wind.speed;

    if (wind < 1) {
      return "No wind";
    } else if (wind => 1 && wind <= 2) {
      return "Some wind";
    } else {
      return "Windy";
    }
  }
  
  render() {
    console.log(this.props);
    return (
      <div style={styles.container}>
        <div style={styles.weatherRes}>
          <div style={styles.weatherResPreCity}>Todays weather for</div>
          <div style={styles.weatherResCityName}>{this.props.singleCityData.data.name}</div>
        </div>
        <div style={styles.temperature}>{this.getTemperature()} <span style={styles.tempUnit}>{this.getTemperatureUnit()}</span></div>
        <div style={styles.weatherExpContainer}>
          <div style={styles.weatherExpIcon}><img src={WindIcon} alt="Todays weather" /></div>
          <div>
            <div style={styles.weatherExplanation}>{this.getSkyInfo()},</div>
            <div style={styles.weatherExplanation}>{this.getRainInfo()}</div>
          </div>
        </div>
        <div>
          <div style={styles.weatherExpIcon}><img src={CloudIcon} alt="Todays weather" /></div>
          <div>
            <div style={styles.weatherExplanation}>{this.getWindInfo()}</div>
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