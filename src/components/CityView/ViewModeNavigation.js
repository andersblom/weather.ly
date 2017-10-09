import React, { Component } from 'react';

import ViewModeNavButton from './_ViewModeNavButton';

import sharedStyles from '../../resources/sharedStyles';

export default class ViewModeNavigation extends Component {
  render() {
    return (
      <div style={styles.container}>
        <ViewModeNavButton currentViewMode={this.props.currentViewMode} handleViewModeNavClick={this.props.handleViewModeNavClick} viewMode="quickmode"><span role="img" aria-label="Quick Mode">🕗</span></ViewModeNavButton>
        <ViewModeNavButton currentViewMode={this.props.currentViewMode} handleViewModeNavClick={this.props.handleViewModeNavClick} viewMode="storymode"><span role="img" aria-label="Story Mode">✍️</span></ViewModeNavButton>
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
    justifyContent: "space-around",
    alignItems: "center",
  }
}