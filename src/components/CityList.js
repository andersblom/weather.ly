import React, { Component } from 'react';

import Header from './Header';
import SingleCityListItem from './SingleCityListItem';

export default class CityList extends Component {  
    render() {
        const citiesToRenderToList = this.props.data.map((city, index) => {
            return <SingleCityListItem key={index} cityData={city} />
        })
        return (
        <div>
            <Header showBackBtn={false} showSettings={true} showCloseBtn={false} />
            {citiesToRenderToList}
        </div>
        );
    }
}