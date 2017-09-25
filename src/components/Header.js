import React, { Component } from 'react';

import PropTypes from 'prop-types';

export default class Header extends Component {
    render() {
        return (
        <div style={styles.headerContainer}>
            {(this.props.showBackBtn ? <div>Back</div> : null)}
            <div style={styles.headerName}>Header</div>
            {(this.props.showSettings ? <div style={styles.settingsButton}>Settings</div> : null)}
            {(this.props.showCloseBtn ? <div>X</div> : null)}
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
        marginBottom: "10px",
    },

    headerName: {
        margin: "0px auto",
    },

    settingsButton: {
        
    },
}