import React, { Component } from 'react';

import Header from './Header';

export default class NotCitiesAvailableMessage extends Component {  
    render() {
        return (
            <div>
                <Header showBackBtn={false} showSettings={true} />
                <div style={styles.noCitiesContainer}>
                    <div>No cities available</div>
                </div>
            </div>
        )
    }
}

const styles = {
    noCitiesContainer: {
        height: "calc(100vh - 115px)",
        display: "flex",

    }
}