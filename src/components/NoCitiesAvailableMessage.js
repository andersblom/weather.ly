import React, { Component } from 'react';

import Header from './Header';

export default class NotCitiesAvailableMessage extends Component {  
    render() {
        return (
            <div>
                <Header showBackBtn={false} showSettings={true} showCloseBtn={false} />
                <div>No cities available</div>
            </div>
        )
    }
}