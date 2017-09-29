import React, { Component } from 'react';

export default class ViewModeNavigation extends Component {
  render() {
    return (
      <div>
        <span role="img" aria-label="Quick Mode">🕗</span>
        <span role="img" aria-label="Story Mode">✍️</span>
        <span role="img" aria-label="Data Mode">🤓</span>
      </div>
    );
  }
}