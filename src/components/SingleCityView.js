import React, { Component } from 'react';
import Header from './Header';

export default class SingleCityView extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <Header {...this.props} showBackBtn={true} showSettings={true} />
        I am a single city
      </div>
    );
  }
}