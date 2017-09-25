import React, { Component } from 'react';

export default class SingleCityListItem extends Component {
  render() {
      console.log(this.props.cityData); 
    return (
      <div>
          {this.props.cityData.name}, {this.props.cityData.sys.country}
      </div>
    );
  }
}