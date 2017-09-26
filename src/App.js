import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Welcome from './components/Welcome'
import WeatherData from './containers/WeatherData';
import Settings from './components/Settings';
import NotFound from './components/NotFound';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      appSettingUnitTemp: "fahrenheit", // or "celcius"
      appSettingsUnitDistance: "feet" // or "meters"
    }
    this.updateSetting = this.updateSetting.bind(this);
  }

  updateSetting(setting, updatedValue) {
    if (setting === "unittemp") {
      this.setState({
        appSettingUnitTemp: updatedValue
      })
    } else {
      this.setState({
        appSettingUnitDistance: updatedValue
      })
    }
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={Welcome} />
            <Route path="/cities" render={(props) => <WeatherData {...props} appSettingsUnitDistance={this.state.appSettingsUnitDistance} appSettingUnitTemp={this.state.appSettingUnitTemp} />} />
            <Route path="/settings" render={(props) => <Settings {...props} updateSetting={this.updateSetting} appSettingsUnitDistance={this.state.appSettingsUnitDistance} appSettingUnitTemp={this.state.appSettingUnitTemp} />} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </div>
    );
  }
}