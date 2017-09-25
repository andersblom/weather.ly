import React, { Component } from 'react';

import Header from './Header';
import SingleCityListItem from './SingleCityListItem';

export default class CityList extends Component {  
    render() {
        const citiesToRenderToList = this.props.data.map((city, index) => {
            return (
                <SingleCityListItem 
                    appSettingsUnitDistance={this.props.appSettingsUnitDistance} 
                    appSettingUnitTemp={this.props.appSettingUnitTemp} 
                    key={index} 
                    cityData={city} 
                />
            );
        });
        return (
        <div>
            <Header showBackBtn={false} showSettings={true} showCloseBtn={false} />
            <div style={styles.cityListContainer}>{citiesToRenderToList}</div>
        </div>
        );
    }
}

const styles = {
    cityListContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
    }
}