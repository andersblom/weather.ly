import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import ClearSkyBg from '../resources/listentrybackgrounds/clearsky.jpg';

import ArrowRight from '../resources/misc/arrow-r.svg';

import sharedStyles from '../resources/sharedStyles';

export default class SingleCityListItem extends Component {
  constructor() {
    super();
    this.state = {
      hover: false
    }
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
      <Link to="/" style={styles.singleListItemEntry}>
        <div style={styles.entryImageOverlay}></div>
        <div style={styles.entryTextContainer}>
          <div style={styles.entryHeader}>{this.props.cityData.name}, {this.props.cityData.sys.country}</div>
          <div style={styles.entryInfo}>
              {this.getTemperatureInUnit(this.props.cityData.main.temp, this.props.appSettingUnitTemp)} {this.getUnitLetter(this.props.appSettingUnitTemp)}
          </div>
        </div>
        <div><img src={ArrowRight} alt={`See the weather for ${this.props.cityData.name}`} /></div>
        <div style={styles.entryShadowBackdrop}></div>
      </Link>
    );
  }
}

const styles = {
  singleListItemEntry: {
    width: "calc(100% - 140px)",
    height: "calc(14vh - 40px)", // vh - 50px (padding)
    margin: "0 15px 25px 15px",
    backgroundImage: `url(${ClearSkyBg})`,
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
  }
}