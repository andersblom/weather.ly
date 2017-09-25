import React, { Component } from 'react';

import SingleCityListItem from './SingleCityListItem';

export default class CityList extends Component {  
    render() {
        const citiesToRenderToList = this.props.data.map((city, index) => {
            return <SingleCityListItem key={index} cityData={city} />
        })
        return (
        <div>
            {citiesToRenderToList}
        </div>
        );
    }
}