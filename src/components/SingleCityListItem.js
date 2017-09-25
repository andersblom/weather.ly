import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import ClearSkyBg from '../resources/listentrybackgrounds/clearsky.jpg';

import ArrowRight from '../resources/misc/arrow-r.svg';

export default class SingleCityListItem extends Component {
  constructor() {
    super();
    this.state = {
      hover: false
    }
    this.toggleHover = this.toggleHover.bind(this);
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

  toggleHover() {

  }

  render() {
    return (
      <Link to="/" style={styles.singleListItemEntry}>
          <div style={styles.entryTextContainer}>
            <div style={styles.entryHeader}>{this.props.cityData.name}, {this.props.cityData.sys.country}</div>
            <div style={styles.entryInfo}>
                {this.getTemperatureInUnit(this.props.cityData.main.temp, this.props.appSettingUnitTemp)} {this.getUnitLetter(this.props.appSettingUnitTemp)}
            </div>
          </div>
          <div><img src={ArrowRight} alt={`See the weather for ${this.props.cityData.name}`} /></div>
      </Link>
    );
  }
}

const styles = {
  singleListItemEntry: {
    width: "calc(100% - 140px)",
    height: "calc(14vh - 40px)", // vh - 50px (padding)
    margin: "0 15px 25px 15px",
    boxShadow: "0px 5px 15px 0px rgba(0,0,0,0.07)",
    backgroundImage: `url(${ClearSkyBg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    borderRadius: "5px",
    textDecoration: "none",
    color: "#ffffff",
    fontFamily: "system, -apple-system, BlinkMacSystemFont, 'Helvetica Neue', 'Lucida Grande'",
    webkitFontSmoothing: "antialiased",

    padding: "25px 30px 25px 30px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  entryTextContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "space-between",
    height: "100%",
  },

  entryHeader: {
    fontWeight: "bold",
    fontFamily: "system, -apple-system, BlinkMacSystemFont, 'Helvetica Neue', 'Lucida Grande'",
    fontSize: "20px",
  },
  
  entryInfo: {
    fontWeight: "400",
    fontSize: "17px",
  }
}