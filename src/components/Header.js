import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import sharedStyles from '../resources/sharedStyles';

export default class Header extends Component {
    render() {
        return (
        <div style={styles.headerContainer}>
            {(this.props.showBackBtn ? <div style={styles.backButton} onClick={this.props.history.goBack}>Back</div> : null)}
            
            <div style={styles.headerName}>weather.ly</div>

            {(this.props.showSettings ? <Link to="/settings" style={styles.settingsButton}>Settings</Link> : null)}
            {(this.props.showCloseBtn ? <div style={styles.closeButton} onClick={this.props.history.goBack}>X</div> : null)}
        </div>
        );
    }
}

Header.propTypes = {
    showBackBtn: PropTypes.bool.isRequired,
    showSettings: PropTypes.bool.isRequired,
    showCloseBtn: PropTypes.bool.isRequired,
}

const styles = {
    headerContainer: {
        backgroundColor: "#dedede",
        padding: "10px 20px 10px 20px",
        display: "flex",
        flexDirection: "row",
        alignItems: "space-between",
        justifyContent: "space-between",
        marginBottom: "35px",
        fontFamily: sharedStyles.font, 
    },

    backButton: {
        alignSelf: "flex-start",
        width: "50px",
    },

    headerName: {
        margin: "0px auto",
        fontWeight: "300",
        fontSize: "14px",
    },

    settingsButton: {
        alignSelf: "flex-end",
        width: "50px",
    },
    
    closeButton: {
        alignSelf: "flex-end",
        width: "50px",
    },
}