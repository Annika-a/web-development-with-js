import React from 'react';
import {GoogleMap, Marker} from 'react-google-maps';
import api from '../api';
import update from 'react-addons-update';

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
                defaultAnimation: 1,
                icon: "http://users.metropolia.fi/~annikaa/img/SUnny.png"
                }],

        };
    },
    _handle_map_click (event) {
        console.log("MARKERS"+this.state.markers);
                api.getWeatherData(event.latLng.lat(),event.latLng.lng()).then((data) =>  {

                    this.setState({

                    cityweather: data,
                    weatherImage: "http://users.metropolia.fi/~annikaa/img/"+data,
                    clickLatitude: event.latLng.lat(),
                    clickLongitude: event.latLng.lng(),

                    });

                let {markers} = this.state;
                markers = update(markers, {
                  $push: [
                    {
                      position: event.latLng,
                      defaultAnimation: 2,
                      key: Date.now(),
                      icon: "http://users.metropolia.fi/~annikaa/img/"+data
                    },
                  ],
                });
                this.setState({ markers });

                });


    },
    _map_click (event) {
    },
    render: function(){
        return (
            <div className="wholePage">

                <div className="mapStyle">
                    <GoogleMap  containerProps={{
                        ...this.props,
                          style: {
                            height: "500px",
                            width: "800px"
                          },
                        }}
                        defaultZoom={2}
                        defaultCenter={{lat: 33, lng: 45}}

                        onClick={::this._handle_map_click}>

                        {this.state.markers.map((marker, index) => {
                        return (<Marker{...marker}/>
                         ); })}

                    </GoogleMap>
                     <div className="moreInfo">
                      <img src={this.state.weatherImage} alt={this.state.cityweather}/>
                    Weather: {this.state.cityweather}<br/>
                    Latitude: {this.state.clickLatitude}<br/>
                    Longitude: {this.state.clickLongitude}<br/>
                </div>
                </div>
            </div>
            );
    },


});

export default WeatherMapPage;
