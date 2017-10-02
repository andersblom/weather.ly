import React, { Component } from 'react';

import ViewModeNavButton from './_ViewModeNavButton';

import sharedStyles from '../../resources/sharedStyles';

export default class ViewModeNavigation extends Component {
  render() {
    return (
      <div style={styles.container}>
        <ViewModeNavButton handleViewModeNavClick={this.props.handleViewModeNavClick} viewMode="quickmode"><span role="img" aria-label="Quick Mode">🕗</span></ViewModeNavButton>
        <ViewModeNavButton handleViewModeNavClick={this.props.handleViewModeNavClick} viewMode="storymode"><span role="img" aria-label="Story Mode">✍️</span></ViewModeNavButton>
        <ViewModeNavButton handleViewModeNavClick={this.props.handleViewModeNavClick} viewMode="datamode"><span role="img" aria-label="Data Mode">🤓</span></ViewModeNavButton>
      </div>
    );
  }
}

const styles = {
  container: {
    width: "90%",
    margin: "0 auto",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  }
}