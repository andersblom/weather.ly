import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Header from './Header';
import SingleCityListItem from './SingleCityListItem';
import NoCitiesAvailableMessage from './NoCitiesAvailableMessage';

import sharedStyles from '../resources/sharedStyles';

export default class CityList extends Component {  
    render() {
        let citiesToRenderToList = this.props.data;
        
        citiesToRenderToList = citiesToRenderToList.sort((a, b) => {
            return a.order - b.order;
        });
        
        citiesToRenderToList = citiesToRenderToList.map((city, index) => {
            return (
                <SingleCityListItem 
                    appSettingsUnitDistance={this.props.appSettingsUnitDistance} 
                    appSettingUnitTemp={this.props.appSettingUnitTemp} 
                    key={index} 
                    cityData={city} 
                    {...this.props}
                />
            );
        });

        if (citiesToRenderToList.length === 0) {
            return <NoCitiesAvailableMessage />
        } else {
            return (
                <div>
                    <Header {...this.props} showBackBtn={false} showSettings={true} />
                    <div style={styles.cityListContainer}>
                        {citiesToRenderToList}
                        <Link to={"/cities/add"} style={styles.addCityButton}>Add city</Link>
                    </div>
                </div>
            );
        }
    }
}

const styles = {
    cityListContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        minHeight: "80vh",
    },
    addCityButton: {
        ...sharedStyles.extends.button,
        marginTop: "auto",
        marginBottom: "20px",
        borderColor: sharedStyles.color.blue,
        color: sharedStyles.color.blue,
        fontFamily: sharedStyles.font,
    }
}