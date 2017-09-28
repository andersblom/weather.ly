import React, { Component } from 'react';
import Header from './Header';

import ViewModeNavigation from './CityView/ViewModeNavigation';
import QuickMode from './CityView/_QuickMode';
import StoryMode from './CityView/_StoryMode';
import DataMode from './CityView/_DataMode';

export default class SingleCityView extends Component {
  constructor() {
    super();
    this.state = {
      viewMode: "storymode",
      showWeek: false,
    }
    this.getTemperatureInSettingsMetric = this.getTemperatureInSettingsMetric.bind(this);
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
          <div>
            <div>Show week –</div> 
            {(this.state.viewMode === "quickmode") ? <QuickMode {...this.props} singleCityData={singleCityData} showWeek={this.state.showWeek} getTemperatureInSettingsMetric={this.getTemperatureInSettingsMetric} /> : null}
            {(this.state.viewMode === "storymode") ? <StoryMode {...this.props} singleCityData={singleCityData} showWeek={this.state.showWeek} getTemperatureInSettingsMetric={this.getTemperatureInSettingsMetric} /> : null}
            {(this.state.viewMode === "datamode") ? <DataMode {...this.props} singleCityData={singleCityData} showWeek={this.state.showWeek} getTemperatureInSettingsMetric={this.getTemperatureInSettingsMetric} /> : null}
            <ViewModeNavigation currentViewMode={this.state.viewMode} />
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