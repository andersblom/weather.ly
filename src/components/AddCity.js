import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Header from './Header';

export default class AddCity extends Component {
  render() {
    return (
        <div>
            <Header {...this.props} showBackBtn={true} showSettings={false} showCloseBtn={false} />
            <div>Add city</div>
            <Link to="/cities">Start</Link>
        </div>
    );
  }
}