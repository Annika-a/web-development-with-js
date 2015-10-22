import React from 'react';
import api from '../api';

const WeatherInfo = React.createClass({
    getInitialState: function(){
        return{
            lat: 23,
            long: 55
        };
    },

    newWeather: function(){
         api.getWeatherData({lat},{long}).then((data) =>  {
                this.setState({
                    names2: data
                });
            });

        console.log("newWeather LAT:"+{lat}+" LONG:"+ {long});
    },

    render: function(){
        <newWeather/>
        const { lat, long } = this.props;
        <newWeather/>
        return (
            <div>
                latlat {this.props.lat} ...
                 long {this.props.long}
            </div>
        );
    },


    changeLat: function(){
        this.setState({
            lat: 22,
            long: 3
        });
    },
});

export default WeatherInfo;
