import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Header from './Header';

import sharedStyles from '../resources/sharedStyles';

export default class NotCitiesAvailableMessage extends Component {  
    render() {
        return (
            <div>
                <Header showBackBtn={false} showSettings={true} />
                <div style={styles.noCitiesContainer}>
                    <div style={styles.header}>Oh.</div>
                    <div style={styles.text}>No cities seem to have been added yet. Let's add one!</div>
                    <Link to={"/cities/add"} style={styles.addCityButton}>Add city</Link>
                </div>
            </div>
        )
    }
}

const styles = {
    noCitiesContainer: {
        height: "calc(100vh - 230px)", // 115 (Header: 90px height + 25px margin) * 2 to account for top/bottom
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontFamily: sharedStyles.font,
    },

    header: {
        fontSize: "34px",
        fontWeight: "bold",
        color: sharedStyles.color.brightGray,
        marginBottom: "20px",
    },

    text: {
        fontSize: "15px",
        width: "60%",
        textAlign: "center",
        color: sharedStyles.color.fadedBlue,
    },

    addCityButton: {
        ...sharedStyles.extends.button,
        marginTop: "40px",
        borderColor: sharedStyles.color.blue,
        color: sharedStyles.color.blue,
        fontFamily: sharedStyles.font,
    }
}