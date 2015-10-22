import React from 'react';
import { Link } from 'react-router';
import api from '../api';
import HelloWorld from './helloworld';

const Linkkipalkki = React.createClass({

    getInitialState: function(){
        return{
            names2: 120,
        };
    },

    componentDidMount: function(){
         api.getWeatherData(22,22).then((data) =>  {
                this.setState({
                    names2: data
                });
            });
    },

    render: function(){
    const names = this.state.names2;

    return (
             <div>
             {names}
             <Link to={`/kartta`}>KARTTA</Link>
             }
              </div>
        );
    },
});
export default Linkkipalkki;
