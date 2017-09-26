import React, { Component } from 'react';

import Header from './Header';

export default class Settings extends Component {
  render() {
    return (
      <div>
        <Header {...this.props} showBackBtn={true} showSettings={false} />
        <div>Settings</div>
      </div>
    );
  }
}