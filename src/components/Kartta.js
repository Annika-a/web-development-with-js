import React from 'react';
import {GoogleMap, Marker} from 'react-google-maps';
import api from '../api';
import weatherImg from './weatherImg';
const Kartta = React.createClass({

    getInitialState: function(){
        return{
            clicklatitude:"1",
            clicklongitude:"2",
            cityweather: "sataa",
            weatherImage: "ddd"
        };
    },

    _handle_map_click (event) {
                clicklatitude: event.latLng.lat();
                licklongitude: event.latLng.lng();
                console.log("w infoon LAT:"+event.latLng.lat()+" LONG:"+ event.latLng.lng());
                api.getWeatherData(event.latLng.lat(),event.latLng.lng()).then((data) =>  {
                    this.setState({
                    cityweather: data,
                    weatherImage: "http://users.metropolia.fi/~annikaa/img/"+data
                });

            });
    },

    render: function(){
        return (


            <div>
                <h3>
                    Weather: {this.state.cityweather}<br/>
                    <img src={this.state.weatherImage} alt={this.state.cityweather}/>

                </h3>

                <div className="mapStyle">
                    <GoogleMap  containerProps={{
                          style: {
                            height: "500px",
                            width: "600px"
                          },
                        }}
                        defaultZoom={3}
                        maxZoom={2}
                        defaultCenter={{lat: 33, lng: 15}}
                        onClick={::this._handle_map_click}
                        >
                    </GoogleMap>
                    Latitude: {this.state.clicklatitude}<br/>
                    Longitude: {this.state.clicklongitude}<br/>
                </div>
                <div className="imagesBox">
                        <img src={this.state.weatherImage} alt={this.state.cityweather}/>
                </div>
            </div>
            );
    },

    incrementCounter: function(newlat){
        this.setState({
            clicklatitude: newlat
        });
    },

});

export default Kartta;
