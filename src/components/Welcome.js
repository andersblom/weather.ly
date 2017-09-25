import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Header from './Header';

export default class Welcome extends Component {
  render() {
    return (
      <div>
        <div>Welcome</div>
        <Link to="/cities">Start</Link>
      </div>
    );
  }
}