import React from 'react';
import {GoogleMap, Marker} from 'react-google-maps';
import api from '../api';
import WeatherInfo from './WeathwerInfo';
const Kartta = React.createClass({

    getInitialState: function(){
        return{
            maplatitude: 12,
            maplongitude: 0,
            clicklatitude: 0,
            clicklongitude:0,
            cityweather: "sataa"

        };
    },

    _handle_map_click (event) {
        //console.log("LAT:"+event.latLng.lat()+" LONG:"+ event.latLng.lng());
                    let late = event.latLng.lat();
                    const lote = event.latLng.lng();
                    <WeatherInfo lat={late} long={lote} />
                    console.log("w infoon LAT:"+{late}+" LONG:"+ event.latLng.lng());
               // {this.state.cliklatitude}: 3;


    },

    render: function(){
        return (
            <div>
            <WeatherInfo lat="3" long="2"/>
            <h3>
            long: {this.state.clicklongitude}
            lat: {this.state.clicklatitude}
            </h3>
                <GoogleMap containerProps={{
                      style: {
                        height: "500px",
                        width: "700px"
                      },
                    }}
                    defaultZoom={3}
                    defaultCenter={{lat: 33, lng: 15}}
                    onClick={::this._handle_map_click}
                    >
                </GoogleMap>

               lat: {this.state.maplatitude}
               long: {this.state.maplongitude}


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
