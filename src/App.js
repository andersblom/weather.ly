import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios';

import Welcome from './components/Welcome'
import GetWeatherData from './containers/GetWeatherData';
import Settings from './components/Settings';
import NotFound from './components/NotFound';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      appSettingUnitTemp: "fahrenheit", // or "celcius"
      appSettingsUnitDistance: "feet" // or "meters"
    }
  }
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" render={() => <Welcome />} />
            <Route path="/cities" render={() => <GetWeatherData appSettingsUnitDistance={this.state.appSettingsUnitDistance} appSettingUnitTemp={this.state.appSettingUnitTemp} />} />
            <Route path="/settings" render={() => <Settings appSettingsUnitDistance={this.state.appSettingsUnitDistance} appSettingUnitTemp={this.state.appSettingUnitTemp} />} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </div>
    );
  }
}