import React, { Component } from 'react';

export default class StoryMode extends Component {
  getCityName() {
    return this.props.singleCityData.userInput;
  }

  getTemperatureInUnit() {
    return this.props.getTemperatureInSettingsMetric(this.props.singleCityData.data.main.temp, this.props.appSettingUnitTemp)
  }

  
  render() {
    console.log(this.props.singleCityData);
    return (
      <div>
        It’s a beautiful night in {this.getCityName()}, 
        with a clear blue sky, {this.getTemperatureInUnit()} and a 
        gentle breeze from the north east. 
        Then sun rose at 7 am and will set at 6:59 pm. 
        It’s not too humid, and there is plenty of 
        chance to see the stars with only 21% clouds.
      </div>
    );
  }
}