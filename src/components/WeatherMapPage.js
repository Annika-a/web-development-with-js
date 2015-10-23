import React from 'react';
import {GoogleMap, Marker} from 'react-google-maps';
import api from '../api';

const WeatherMapPage = React.createClass({

    getInitialState: function(){
        return{
            clickLatitude:"1",
            clickLongitude:"2",
            cityweather: "sataa",
            weatherImage: "ddd",
            markers: [{
                position: {
                lat: 25.0112183,
                lng: 121.52067570000001,
                },
                key: "Taiwan",
                defaultAnimation: 2
                }],

        };
    },

    _handle_map_click (event) {
                api.getWeatherData(event.latLng.lat(),event.latLng.lng()).then((data) =>  {
                    this.setState({

                    cityweather: data,
                    weatherImage: "http://users.metropolia.fi/~annikaa/img/"+data,
                    clickLatitude: event.latLng.lat(),
                    clickLongitude: event.latLng.lng()
                });


                let {markers} = this.state;
                markers = update(markers, {
                  $push: [
                    {
                      position: event.latLng,
                      defaultAnimation: 2,
                      key: Date.now(),// Add a key property for: http://fb.me/react-warning-keys
                    },
                  ],
                });
                this.setState({ markers });
                console.log("MARKERS"+markers.length);
                });

    },
    _map_click (event) {
    },
    render: function(){
        return (
            <div className="wholePage">

                <div className="mapStyle">
                    <GoogleMap  containerProps={{
                          style: {
                            height: "500px",
                            width: "800px"
                          },
                        }}
                        defaultZoom={3}
                        maxZoom={2}
                        defaultCenter={{lat: 33, lng: 15}}
                        onClick={::this._handle_map_click} >
                    </GoogleMap>
                     <div className="moreInfo">
                      <img src={this.state.weatherImage} alt={this.state.cityweather}/>
                    Weather: {this.state.cityweather}<br/>
                    Latitude: {this.state.clickLatitude}<br/>
                    Longitude: {this.state.clickLongitude}<br/>
                </div>
                </div>
                <div className="imagesBox">
                    <img src={this.state.weatherImage} alt={this.state.cityweather}/>
                </div>
            </div>
            );
    },


});

export default WeatherMapPage;
