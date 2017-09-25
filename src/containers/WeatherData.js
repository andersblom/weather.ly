import React, { Component } from 'react';
import axios from 'axios';

export default class WeatherData extends Component {
    constructor() {
        super();
        this.state = {
            todaysWeather: undefined,
            weekForecastData: undefined,
        }
        
        this.getThisWeeksForecast = this.getThisWeeksForecast.bind(this);
        this.getTodaysWeatherData = this.getTodaysWeatherData.bind(this);
    }

    componentDidMount() {
        this.getThisWeeksForecast("Buffalo, NY", "USA");
        this.getTodaysWeatherData("Buffalo, NY", "USA");
    }

    getThisWeeksForecast(city) {
        axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=665710852455d67e78e4348c9e30a120`)
        .then(res => {
            this.setState({
                weekForecastData: res.data
            });
            console.log("getThisWeeksForecast returned: ", res.data);
        })
        .catch(err => console.error(err));
    }

    getTodaysWeatherData(city) {
        axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=665710852455d67e78e4348c9e30a120`)
        .then(res => {
            this.setState({
                todaysWeather: res.data
            });
            console.log("getTodaysWeatherData returned: ", res.data);
        })
        .catch(err => console.error(err));
    }

    render() {
        return (
        <div>
            I got the weather data
        </div>
        );
    }
}