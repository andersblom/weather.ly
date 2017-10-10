import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import sharedStyles from '../resources/sharedStyles';

export default class Welcome extends Component {
  render() {
    return (
      <div style={styles.welcomeContainer}>
        <div style={styles.logo}>weather.ly</div>
        <Link style={styles.startButton} to="/cities">Start</Link>
      </div>
    );
  }
}

const styles = {
  welcomeContainer: {
    height: "100vh",
    background: "linear-gradient(153.43deg, #316DEE 0%, #4B96F5 100%)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    fontFamily: sharedStyles.font,
    color: sharedStyles.color.white,
  },

  logo: {
    fontSize: "20px",
    fontWeight: "300",
  },

  startButton: {
    ...sharedStyles.extends.button,
    borderColor: sharedStyles.color.white,
    color: sharedStyles.color.white,
  }
}