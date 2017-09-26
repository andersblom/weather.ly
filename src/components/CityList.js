import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Header from './Header';
import SingleCityListItem from './SingleCityListItem';

import sharedStyles from '../resources/sharedStyles';

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
            <div style={styles.cityListContainer}>
                {citiesToRenderToList}
                <Link to={"/cities/add"} style={styles.addCityButton}>Add city</Link>
            </div>
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
        minHeight: "80vh",
    },
    addCityButton: {
        marginTop: "auto",
        padding: "1.2em 3.4em 1.2em 3.4em",
        border: "3px solid " + sharedStyles.color.blue,
        color: sharedStyles.color.blue,
        fontFamily: sharedStyles.font,
        textDecoration: "none",
        textTransform: "uppercase",
        fontSize: "14px",
        fontWeight: "bold",
        borderRadius: "100px",
    }
}