import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import ClearSkyBg from '../resources/listentrybackgrounds/clearsky.jpg';
import FewCloudsBg from '../resources/listentrybackgrounds/fewclouds.jpg';
import ScatteredCloudsBg from '../resources/listentrybackgrounds/scatteredclouds.jpg';
import BrokenCloudsBg from '../resources/listentrybackgrounds/brokenclouds.jpg';
import ShowerRainBg from '../resources/listentrybackgrounds/showerrain.jpg';
import RainBg from '../resources/listentrybackgrounds/rain.jpg';
import ThunderstormBg from '../resources/listentrybackgrounds/thunderstorm.jpg';
import SnowingBg from '../resources/listentrybackgrounds/snow.jpg';
import MistBg from '../resources/listentrybackgrounds/mist.jpg';



import ArrowRight from '../resources/misc/arrow-r.svg';

import sharedStyles from '../resources/sharedStyles';

export default class SingleCityListItem extends Component {
  constructor() {
    super();
    this.state = {
      hover: false
    }
    this.changeHoverState = this.changeHoverState.bind(this);
  }

  getTemperatureInUnit(kelvin, unit) {
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

  getUnitLetter(unit) {
    if (unit === "celsius") {
      return "°C"
    } else {
      return "°F"
    }
  }

  changeHoverState() {
    this.setState({
      hover: !this.state.hover
    })
  }

  getBackgroundImage() {
    switch (this.props.cityData.weather[0].icon) {
      
      /* eslint-disable */
      case "01d":
        console.log("clear sky");
        return ClearSkyBg;
        break;

      case "02d":
        console.log("few clouds")
        return FewCloudsBg;
        break;

      case "03d":
        console.log("scattered clouds");
        return ScatteredCloudsBg;
        break;

      case "04d":
        console.log("broken clouds");
        return BrokenCloudsBg;
        break;

      case "09d":
        console.log("shower rain");
        return ShowerRainBg;
        break;

      case "10d":
        console.log("rain")
        return RainBg;
        break;

      case "11d":
        console.log("thunderstorm");
        return ThunderstormBg;
        break;

      case "13d":
        console.log("snow");
        return SnowingBg;
        break;

      case "50d":
        console.log("mist");
        return MistBg;
        break;

      default: 
        return ClearSkyBg;
      /* eslint-enable */

    }
  }
  
  render() {
    console.log(this.props.cityData)
    return (
      <Link 
        to={`${this.props.match.url}/city/${this.props.cityData.name.toLowerCase()}`} 
        style={(this.state.hover ? 
          {...styles.singleListItemEntry, ...styles.singleListItementryHover, backgroundImage: `url(${this.getBackgroundImage()})`} 
          : 
          {...styles.singleListItemEntry, backgroundImage: `url(${this.getBackgroundImage()})`,}
          )} 
        onMouseEnter={() => this.changeHoverState()} 
        onMouseLeave={() => this.changeHoverState()}
      >
        <div style={styles.entryImageOverlay}></div>
        <div style={styles.entryTextContainer}>
          <div style={styles.entryHeader}>{this.props.cityData.name}, {this.props.cityData.sys.country}</div>
          <div style={styles.entryInfo}>
              {this.getTemperatureInUnit(this.props.cityData.main.temp, this.props.appSettingUnitTemp)} {this.getUnitLetter(this.props.appSettingUnitTemp)}
          </div>
        </div>
        <div><img src={ArrowRight} alt={`See the weather for ${this.props.cityData.name}`} /></div>
        <div style={(this.state.hover ?
          {...styles.entryShadowBackdrop, ...styles.entryShadowBackdropHover}
          :
          styles.entryShadowBackdrop
          )}
        ></div>
      </Link>
    );
  }
}

const styles = {
  singleListItemEntry: {
    width: "calc(100% - 140px)",
    height: "calc(14vh - 40px)", // vh - 50px (padding)
    margin: "0 15px 40px 15px",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    borderRadius: "5px",
    textDecoration: "none",
    color: "#ffffff",
    fontFamily: sharedStyles.font,

    padding: "25px 30px 25px 30px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",

    position: "relative",

    transition: "margin 150ms ease-in-out",
  },

  singleListItementryHover: {
    margin: "-5px 15px 45px 15px",
  },

  entryImageOverlay: {
    background: "linear-gradient(270deg, rgba(31,42,71,0) 0%, #212F4E 100%)",
    display: "block",
    position: "absolute",
    top: "0px", 
    left: "0px",
    height: "100%",
    width: "100%",
    zIndex: "0",
    opacity: "0.4",
    mixBlendMode: "multiply",
  },

  entryTextContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "space-between",
    height: "100%",
    zIndex: "1",
  },

  entryHeader: {
    fontWeight: "bold",
    fontFamily: sharedStyles.font,
    fontSize: "20px",
  },
  
  entryInfo: {
    fontWeight: "400",
    fontSize: "17px",
  },

  entryShadowBackdrop: {
    backgroundColor: "#000000",
    position: "absolute",
    zIndex: "-1",
    top: "7%",
    left: "1%",
    height: "98%",  
    width: "98%",
    opacity: "0.2",
    filter: "blur(5px)",

    transition: "top 150ms ease-in-out",
  },
  
  entryShadowBackdropHover: {
    top: "10%",
  }
}