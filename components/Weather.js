import React, { Component } from 'react';
import { weatherKey } from '../config.js';
import {
    View,
    Text,
    StyleSheet,
    Image,
} from 'react-native';
import icons from '../assets/index';

class WeatherComp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            forecast_url: "https://api.weatherbit.io/v2.0/forecast/daily?",
            current_url: "https://api.weatherbit.io/v2.0/current?",
            current_city: "Anchorage,AK",
            cities: [],
            forecast_data: [],
            current_weather_data: [],
            error: null,
        };

        this.GetWeatherForecast = this.GetWeatherForecast.bind(this);
        this.GetCurrentWeather = this.GetCurrentWeather.bind(this);
        this.GetDayName = this.GetDayName.bind(this);
        this.GetWeatherIcon = this.GetWeatherIcon.bind(this);

    }

    GetWeatherForecast() {
        fetch(`${this.state.forecast_url}city=${this.state.current_city}&units=I&days=7&key=${weatherKey}`)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({forecast_data: result.data});
                },
                (error) => {
                    this.setState({error});
                }
            )
    }

    GetCurrentWeather() {
        fetch(`${this.state.current_url}city=${this.state.current_city}&units=I&key=${weatherKey}`)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({current_weather_data: result.data}, () => {this.GetWeatherForecast()});
                },
                (error) => {
                    this.setState({error});
                }
            )
    }

    GetDayName(dayIndex) {
        var dt = new Date(this.state.forecast_data[dayIndex].valid_date);
        var day = dt.getDay();
        switch(day) {
            case 0:
                return "Monday";
            case 1:
                return "Tuesday";
            case 2:
                return "Wednesday";
            case 3:
                return "Thursday";
            case 4:
                return "Friday";
            case 5:
                return "Saturday";
            case 6:
                return "Sunday";
            default:
                return "Error";
        }
    }

    ChangeCity(city) {
        this.setState({current_city: city}, () => this.GetCurrentWeather());
    }

    GetWeatherIcon(dayIndex) {
        let iconCode = "";
        if (dayIndex === 0) {
            iconCode = this.state.current_weather_data[0]['weather'].icon
        } else {
            iconCode = this.state.forecast_data[dayIndex]['weather'].icon;
        }

        switch(iconCode) {
            case 'a01d':
                return <Image source={icons.a01d} style={styles.icon}></Image>
            case 'a01n':
                return <Image source={icons.a01n} style={styles.icon}></Image>
            case 'a02d':
                return <Image source={icons.a02d} style={styles.icon}></Image>
            case 'a02n':
                return <Image source={icons.a02n} style={styles.icon}></Image>
            case 'a03d':
                return <Image source={icons.a03d} style={styles.icon}></Image>
            case 'a03n':
                return <Image source={icons.a03n} style={styles.icon}></Image>
            case 'a04d':
                return <Image source={icons.a04d} style={styles.icon}></Image>
            case 'a04n':
                return <Image source={icons.a04n} style={styles.icon}></Image>
            case 'a05d':
                return <Image source={icons.a05d} style={styles.icon}></Image>
            case 'a05n':
                return <Image source={icons.a05n} style={styles.icon}></Image>
            case 'a06d':
                return <Image source={icons.a06d} style={styles.icon}></Image>
            case 'a06n':
                return <Image source={icons.a06n} style={styles.icon}></Image>
            case 'c01d':
                return <Image source={icons.c01d} style={styles.icon}></Image>
            case 'c01n':
                return <Image source={icons.c01n} style={styles.icon}></Image>
            case 'c02d':
                return <Image source={icons.c02d} style={styles.icon}></Image>
            case 'c02n':
                return <Image source={icons.c02n} style={styles.icon}></Image>
            case 'c03d':
                return <Image source={icons.c03d} style={styles.icon}></Image>
            case 'c03n':
                return <Image source={icons.c03n} style={styles.icon}></Image>
            case 'c04d':
                return <Image source={icons.c04d} style={styles.icon}></Image>
            case 'c04n':
                return <Image source={icons.c04n} style={styles.icon}></Image>
            case 'd01d':
                return <Image source={icons.d01d} style={styles.icon}></Image>
            case 'd01n':
                return <Image source={icons.d01n} style={styles.icon}></Image>
            case 'd02d':
                return <Image source={icons.d02d} style={styles.icon}></Image>
            case 'd02n':
                return <Image source={icons.d02n} style={styles.icon}></Image>
            case 'd03d':
                return <Image source={icons.d03d} style={styles.icon}></Image>
            case 'd03n':
                return <Image source={icons.d03n} style={styles.icon}></Image>
            case 'f01d':
                return <Image source={icons.f01d} style={styles.icon}></Image>
            case 'f01n':
                return <Image source={icons.f01n} style={styles.icon}></Image>
            case 'r01d':
                return <Image source={icons.r01d} style={styles.icon}></Image>
            case 'r01n':
                return <Image source={icons.r01n} style={styles.icon}></Image>
            case 'r02d':
                return <Image source={icons.r02d} style={styles.icon}></Image>
            case 'r02n':
                return <Image source={icons.r02n} style={styles.icon}></Image>
            case 'r03d':
                return <Image source={icons.r03d} style={styles.icon}></Image>
            case 'r03n':
                return <Image source={icons.r03n} style={styles.icon}></Image>
            case 'r04d':
                return <Image source={icons.r04d} style={styles.icon}></Image>
            case 'r04n':
                return <Image source={icons.r04n} style={styles.icon}></Image>
            case 'r05d':
                return <Image source={icons.r05d} style={styles.icon}></Image>
            case 'r05n':
                return <Image source={icons.r05n} style={styles.icon}></Image>
            case 'r06d':
                return <Image source={icons.r06d} style={styles.icon}></Image>
            case 'r06n':
                return <Image source={icons.r06n} style={styles.icon}></Image>
            case 's01d':
                return <Image source={icons.s01d} style={styles.icon}></Image>
            case 's01n':
                return <Image source={icons.s01n} style={styles.icon}></Image>
            case 's02d':
                return <Image source={icons.s02d} style={styles.icon}></Image>
            case 's02n':
                return <Image source={icons.s02n} style={styles.icon}></Image>
            case 's03d':
                return <Image source={icons.s03d} style={styles.icon}></Image>
            case 's03n':
                return <Image source={icons.s03n} style={styles.icon}></Image>
            case 's04d':
                return <Image source={icons.s04d} style={styles.icon}></Image>
            case 's04n':
                return <Image source={icons.s04n} style={styles.icon}></Image>
            case 's05d':
                return <Image source={icons.s05d} style={styles.icon}></Image>
            case 's05n':
                return <Image source={icons.s05n} style={styles.icon}></Image>
            case 's06d':
                return <Image source={icons.s06d} style={styles.icon}></Image>
            case 's06n':
                return <Image source={icons.s06n} style={styles.icon}></Image>
            case 't01d':
                return <Image source={icons.t01d} style={styles.icon}></Image>
            case 't01n':
                return <Image source={icons.t01n} style={styles.icon}></Image>
            case 't02d':
                return <Image source={icons.t02d} style={styles.icon}></Image>
            case 't02n':
                return <Image source={icons.t02n} style={styles.icon}></Image>
            case 't03d':
                return <Image source={icons.t03d} style={styles.icon}></Image>
            case 't03n':
                return <Image source={icons.t03n} style={styles.icon}></Image>
            case 't04d':
                return <Image source={icons.t04d} style={styles.icon}></Image>
            case 't04n':
                return <Image source={icons.t04n} style={styles.icon}></Image>
            case 't05d':
                return <Image source={icons.t05d} style={styles.icon}></Image>
            case 't05n':
                return <Image source={icons.t05n} style={styles.icon}></Image>
            case 'u00d':
                return <Image source={icons.u00d} style={styles.icon}></Image>
            case 'u00n':
                return <Image source={icons.u00n} style={styles.icon}></Image>
        }
    }

    componentDidMount() {
        // get current weather, has callback to GetWeatherForecast
        this.GetCurrentWeather();
    }

    render() {

        return (
            <View>
                {/* weather info */}
                {(this.state.forecast_data.length > 0 && this.state.current_weather_data.length > 0) && (
                    <View>

                        {/* current weather data */}
                        <View style={styles.header}>
                            <Text style={styles.currentTemp}>{Math.round(parseFloat(this.state.current_weather_data[0].temp)) + "°"}</Text>
                            {this.GetWeatherIcon(0)}
                            <Text style={styles.description}>{this.state.current_weather_data[0]['weather'].description}</Text>
                            <View style={styles.weatherRow}>
                                <Text style={styles.dayName}>{this.GetDayName(0)}</Text>
                                <View style={styles.tempRow}>
                                    <Text style={styles.highTemp}>{Math.round(parseFloat(this.state.forecast_data[0].high_temp))}</Text>
                                    <Text style={styles.lowTemp}>{Math.round(parseFloat(this.state.forecast_data[0].low_temp))}</Text>
                                </View>
                            </View>
                        </View>

                        {/* forecast data */}
                        <View style={styles.body}>
                            <View style={styles.forecastRow}>
                                {/* day names */}
                                <View style={styles.forecastCol}>
                                    <Text style={styles.dayName}>{this.GetDayName(1)}</Text>
                                    <Text style={styles.dayName}>{this.GetDayName(2)}</Text>
                                    <Text style={styles.dayName}>{this.GetDayName(3)}</Text>
                                    <Text style={styles.dayName}>{this.GetDayName(4)}</Text>
                                    <Text style={styles.dayName}>{this.GetDayName(5)}</Text>
                                    <Text style={styles.dayName}>{this.GetDayName(6)}</Text>
                                </View>
                                {/* weather icons */}
                                <View style={styles.forecastCol}>
                                    {this.GetWeatherIcon(1)}
                                    {this.GetWeatherIcon(2)}
                                    {this.GetWeatherIcon(3)}
                                    {this.GetWeatherIcon(4)}
                                    {this.GetWeatherIcon(5)}
                                    {this.GetWeatherIcon(6)}
                                </View>
                                {/* high and low temps */}
                                <View style={styles.forecastCol}>
                                    <View style={styles.tempRow}>
                                        <Text style={styles.highTemp}>{Math.round(parseFloat(this.state.forecast_data[1].high_temp))}</Text>
                                        <Text style={styles.lowTemp}>{Math.round(parseFloat(this.state.forecast_data[1].low_temp))}</Text>
                                    </View>
                                    <View style={styles.tempRow}>
                                        <Text style={styles.highTemp}>{Math.round(parseFloat(this.state.forecast_data[2].high_temp))}</Text>
                                        <Text style={styles.lowTemp}>{Math.round(parseFloat(this.state.forecast_data[2].low_temp))}</Text>
                                    </View>
                                    <View style={styles.tempRow}>
                                        <Text style={styles.highTemp}>{Math.round(parseFloat(this.state.forecast_data[3].high_temp))}</Text>
                                        <Text style={styles.lowTemp}>{Math.round(parseFloat(this.state.forecast_data[3].low_temp))}</Text>
                                    </View>
                                    <View style={styles.tempRow}>
                                        <Text style={styles.highTemp}>{Math.round(parseFloat(this.state.forecast_data[4].high_temp))}</Text>
                                        <Text style={styles.lowTemp}>{Math.round(parseFloat(this.state.forecast_data[4].low_temp))}</Text>
                                    </View>
                                    <View style={styles.tempRow}>
                                        <Text style={styles.highTemp}>{Math.round(parseFloat(this.state.forecast_data[5].high_temp))}</Text>
                                        <Text style={styles.lowTemp}>{Math.round(parseFloat(this.state.forecast_data[5].low_temp))}</Text>
                                    </View>
                                    <View style={styles.tempRow}>
                                        <Text style={styles.highTemp}>{Math.round(parseFloat(this.state.forecast_data[6].high_temp))}</Text>
                                        <Text style={styles.lowTemp}>{Math.round(parseFloat(this.state.forecast_data[6].low_temp))}</Text>
                                    </View>
                                </View>
                            </View>
                        </View>


                        {/* sunrise/sunset */}
                        <View style={styles.infoRow}>
                            <View style={styles.infoCol}>
                                <Text style={styles.infoDescription}>SUNRISE</Text>
                                <Text style={styles.infoDataLeft}>{this.state.current_weather_data[0].sunrise}AM</Text>
                            </View>
                            <View style={styles.infoCol}>
                                <Text style={styles.infoDescription}>SUNSET</Text>
                                <Text style={styles.infoDataRight}>{this.state.current_weather_data[0].sunset}PM</Text>
                            </View>
                        </View>

                        {/* air quality index/humidity */}
                        <View style={styles.infoRow}>
                            <View style={styles.infoCol}>
                                <Text style={styles.infoDescription}>HUMIDITY</Text>
                                <Text style={styles.infoDataLeft}>{this.state.current_weather_data[0].rh}%</Text>
                            </View>
                            <View style={styles.infoCol}>
                                <Text style={styles.infoDescription}>AIR QUALITY INDEX</Text>
                                <Text style={styles.infoDataRight}>{this.state.current_weather_data[0].aqi}</Text>
                            </View>
                        </View>

                        {/* wind/feels like */}
                        <View style={styles.infoRow}>
                            <View style={styles.infoCol}>
                                <Text style={styles.infoDescription}>WIND</Text>
                                <Text style={styles.infoDataLeft}>{this.state.current_weather_data[0].wind_spd} mph</Text>
                            </View>
                            <View style={styles.infoCol}>
                                <Text style={styles.infoDescription}>FEELS LIKE</Text>
                                <Text style={styles.infoDataRight}>{this.state.current_weather_data[0].app_temp}°</Text>
                            </View>
                        </View>

                        {/* visibility/UV index */}
                        <View style={styles.infoRow}>
                            <View style={styles.infoCol}>
                                <Text style={styles.infoDescription}>VISIBILITY</Text>
                                <Text style={styles.infoDataLeft}>{this.state.current_weather_data[0].vis} mi</Text>
                            </View>
                            <View style={styles.infoCol}>
                                <Text style={styles.infoDescription}>UV INDEX</Text>
                                <Text style={styles.infoDataRight}>{Math.round(parseFloat(this.state.current_weather_data[0].uv))}</Text>
                            </View>
                        </View>

                    </View>
                )}
            </View>
        );

    }

}

const styles = StyleSheet.create({
    header: {
        borderBottomColor: 'rgba(255, 255, 255, 0.5)',
        borderBottomWidth: 1,
        

    },

    body : {
        borderColor: 'rgba(255, 255, 255, 0.5)',
        borderBottomWidth: 1,
    },

    currentTemp: {
        textAlign: 'center',
        color: 'white',
        fontWeight: '200',
        fontSize: 80,
        
    },

    weatherRow: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 10,
        marginLeft: 15,
        marginRight: 15,
        marginBottom: 10,
    },

    tempRow: {
        flexDirection: 'row',
        marginLeft: 46,
    },

    dayName: {
        color: 'white',
        fontSize: 25,
        fontWeight: '400',
    },

    highTemp: {
        textAlign: 'right',
        color: 'white',
        fontWeight: '400',
        fontSize: 25,
        paddingRight: 20,
    },

    lowTemp: {
        textAlign: 'center',
        color: 'rgba(255, 255, 255, 0.5)',
        fontWeight: '400',
        fontSize: 25,
    },

    icon: {
        alignSelf: 'center',
        height: 40,
        width: 40,
    },

    description: {
        textAlign: 'center',
        color: 'white',
        fontWeight: '400',
        fontSize: 25,
        paddingTop: 10,
        paddingBottom: 60,
        marginLeft: 15,
        marginRight: 15,
    },

    infoRow: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 15,
        marginRight: 15,
        paddingTop: 10,
        borderColor: 'rgba(255, 255, 255, 0.5)',
        borderBottomWidth: 1,
    },

    infoDataRight: {
        color: 'white',
        fontWeight: '400',
        fontSize: 35,
        textAlign: 'right',
    },

    infoDataLeft: {
        color: 'white',
        fontWeight: '400',
        fontSize: 35,
        textAlign: 'left',
    },

    infoDescription: {
        color: 'rgba(255, 255, 255, 0.5)',
        fontWeight: '400',
        fontSize: 20,
    },

    // new forecast style
    forecastRow: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 15,
        marginRight: 15,
        paddingTop: 10,
    },

    forecastCol: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
});

export default WeatherComp;