import React, { Component } from 'react';
import Header from './Header';

import sharedStyles from '../resources/sharedStyles';

export default class NotFound extends Component {
  render() {
    return (
      <div style={styles.container}>
        <Header {...this.props} showBackBtn={true} showSettings={false} />
        <div style={styles.textContainer}>
          <div>Whoops. Not found! :(</div>
        </div>
      </div>
    );
  }
}

const styles = {
  container: {
    fontFamily: sharedStyles.font,
  },

  textContainer: {
    ...sharedStyles.extends.vh.minusHeaderAndBottom,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  }
}