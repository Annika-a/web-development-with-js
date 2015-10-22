import React from 'react';
import {PropTypes, Component} from 'react/addons';
import shouldPureComponentUpdate from 'react-pure-render/function';
//import joku from 'joku';
import GoogleMap from 'google-map-react';
//import MyGreatPlace from 'my_great_place.jsx';

const Kartta = React.createClass({
    render: function(){
        return (
                <div>tttt<SimpleMapPage/></div>

            );
    }
});


export default class SimpleMapPage extends Component {
  static propTypes = {
    center: PropTypes.array,
    zoom: PropTypes.number,
    greatPlaceCoords: PropTypes.any
  };

  static defaultProps = {
    center: [59.938043, 30.337157],
    zoom: 9,
    greatPlaceCoords: {lat: 59.724465, lng: 30.080121}
  };

  shouldComponentUpdate = shouldPureComponentUpdate;

  constructor(props) {
    super(props);
  }

  render() {
    return (

        <GoogleMap
        // apiKey={YOUR_GOOGLE_MAP_API_KEY} // set if you need stats etc ...
        center={this.props.center}
        zoom={this.props.zoom}>

      </GoogleMap>
    );
  }
}

export default Kartta;
