import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import sharedStyles from '../resources/sharedStyles';

import SettingsIcon from '../resources/misc/settings_icon.png';
import ArrowL from '../resources/misc/arrow-l.svg';

export default class Header extends Component {
    render() {
        return (
        <div style={styles.headerContainer}>
            <div style={styles.backButton} onClick={() => this.props.history.goBack()}>{(this.props.showBackBtn ? <img src={ArrowL} style={styles.backIcon} alt="Settings" /> : null)}</div>
            
            <div style={styles.headerName}>weather.ly</div>

            <div style={styles.settingsButton}>{(this.props.showSettings ? <Link to="/settings"><img src={SettingsIcon} style={styles.settingsIcon} alt="Settings" /></Link> : null)}</div>
        </div>
        );
    }
}

Header.propTypes = {
    showBackBtn: PropTypes.bool.isRequired,
    showSettings: PropTypes.bool.isRequired,
}

const styles = {
    headerContainer: {
        height: "80px",
        marginBottom: "35px",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: sharedStyles.font, 
        padding: "0px 20px 0px 20px",
    },

    backButton: {
        marginRight: "auto",
        width: "30px",
        height: "30px",
    },

    backIcon: {
        height: "30px",
        width: "30px",
    },

    headerName: {
        margin: "0px auto",
        fontWeight: "300",
        fontSize: "14px",
    },

    settingsButton: {
        marginLeft: "auto",
        width: "30px",
        height: "30px",
    },

    settingsIcon: {
        height: "30px",
        width: "30px",
    },
}