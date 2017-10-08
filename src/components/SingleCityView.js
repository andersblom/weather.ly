import React, { Component } from 'react';
import Header from './Header';

import ViewModeNavigation from './CityView/ViewModeNavigation';
import QuickMode from './CityView/_QuickMode';
import StoryMode from './CityView/_StoryMode';
import DataMode from './CityView/_DataMode';

import sharedStyles from '../resources/sharedStyles';

export default class SingleCityView extends Component {
  constructor() {
    super();
    this.state = {
      viewMode: "quickmode",
      showWeek: false,
    }
    this.getTemperatureInSettingsMetric = this.getTemperatureInSettingsMetric.bind(this);
    this.handleViewModeNavClick = this.handleViewModeNavClick.bind(this);
  }
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

  handleViewModeNavClick(viewMode) {
    this.setState({
      viewMode: viewMode,
    });
  }

  render() {
    var singleCityData;
    
    this.props.dataCollection.forEach((city, index) => {
      if (city.userInput.toLowerCase() === this.props.match.params.cityName) {
        singleCityData = city;
      }
    });

    if (singleCityData !== undefined) {
      return (
        <div>
          <Header {...this.props} showBackBtn={true} showSettings={true} />
          <div style={styles.singleCityContainer}>
            {/* <div style={styles.toggleWeekOrDay}>Show week –</div>  */}
            {(this.state.viewMode === "quickmode") ? <QuickMode {...this.props} singleCityData={singleCityData} showWeek={this.state.showWeek} getTemperatureInSettingsMetric={this.getTemperatureInSettingsMetric} /> : null}
            {(this.state.viewMode === "storymode") ? <StoryMode {...this.props} singleCityData={singleCityData} showWeek={this.state.showWeek} getTemperatureInSettingsMetric={this.getTemperatureInSettingsMetric} /> : null}
            {(this.state.viewMode === "datamode") ? <DataMode {...this.props} singleCityData={singleCityData} showWeek={this.state.showWeek} getTemperatureInSettingsMetric={this.getTemperatureInSettingsMetric} /> : null}
            <div style={styles.navigationContainer}><ViewModeNavigation handleViewModeNavClick={this.handleViewModeNavClick} currentViewMode={this.state.viewMode} /></div>
          </div>
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

const styles = {
  singleCityContainer: {
    ...sharedStyles.extends.vh.minusHeaderOnly,
    
    fontFamily: sharedStyles.font,
    
    margin: "0 40px 0 40px",

    position: "relative",
  },

  toggleWeekOrDay: {
    textTransform: "uppercase",
    fontWeight: "bold",
    letterSpacing: "1px",
    color: sharedStyles.color.fadedBlue,
    marginBottom: "1.6em",
  },

  navigationContainer: {
    position: "absolute",
    bottom: "40px",
    width: "100%",
  }
}