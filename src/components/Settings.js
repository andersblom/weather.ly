import React, { Component } from 'react';

import Header from './Header';

export default class Settings extends Component {
  render() {
    return (
      <div>
        <Header showBackBtn={false} showSettings={false} showCloseBtn={true} />
        <div>Settings</div>
      </div>
    );
  }
}