import React, { Component } from 'react';
import axios from 'axios';

import CityList from '../components/CityList';
import NoCitiesAvailableMessage from '../components/NoCitiesAvailableMessage';

export default class WeatherData extends Component {
    constructor() {
        super();
        this.state = {
            cities: [],
            cityDataCollection: []
        }
    }

    componentDidMount() {
        this.fetchSavedCities();
    }

    fetchSavedCities() {
        // Checking if localstorage has any cities - if it does, set those as the current state.
        // If not, then proceed state-less and render the "no cities added" message.
        if (localStorage.getItem("weatherly_cities") !== null) {
            // Helper variables for mapping and state setting
            const arrayOfCitiesFromLocalStorage = JSON.parse(localStorage.getItem("weatherly_cities"));
            let arrayOfCityDataFromLocalStorage = [];

            // Fetching and saving all the weatherdata for the cities from the
            // arrayOfCitiesFromLocalStorage array. 
            arrayOfCitiesFromLocalStorage.map((city, index) => {
                axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=665710852455d67e78e4348c9e30a120`)
                // Saving the data to the temporary array from above
                .then(res => {
                    arrayOfCityDataFromLocalStorage.unshift(res.data);
                }).then(res => {
                    // Set the current container's state to the contents of the 2 arrays
                    this.setState({
                        cities: arrayOfCitiesFromLocalStorage,
                        cityDataCollection: arrayOfCityDataFromLocalStorage
                    });
                }) 
                // If any errors, logging them until we can do some proper error handling
                .catch(err => console.error(err));
            });

        } else {
            // No cities found saved in localStorage: Assume this user is new / has no saved cities.
            console.log("No cities found in localStorage: weatherly_cities, proceeding stateless.");
        }
    }

    deleteCityFromStorage(city) {
        // Comming soon
    }

    saveCityToLocalStorage(city) {
        // Old city data
        const currentCities = localStorage.getItem("weatherly_cities");

        // New array with the old + new cities
        const newCities = currentCities.unshift(city);

        // Settings a new localStorage
        localStorage.setItem("weatherly_cities", JSON.stringify(newCities));

        // Fetching new data from the new localStorage contents
        this.fetchSavedCities();
    }

    render() {
        if (this.state.cityDataCollection.length === 0) {
            return <NoCitiesAvailableMessage />
        } else {
            return <CityList data={this.state.cityDataCollection} />
        }
        
    }
}