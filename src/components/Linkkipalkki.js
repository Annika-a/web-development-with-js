import React from 'react';
import { Link } from 'react-router';
import api from '../api';
import HelloWorld from './helloworld';

const Linkkipalkki = React.createClass({

    getInitialState: function(){
        return{
            names: []
        };
    },

    componentDidMount: function(){
        api.getTussit().then((data) =>  {
                this.setState({
                    names: data
                });
            });
    },

    render: function(){
    const names = this.state.names;

    return (
             <div>
                    {names.map((name, i) =><HelloWorld name={name} key={i}/>)}
                    <Link to={`/counter`}> Counter</Link>
                    <Link to={`/kartta`}> KARTTA</Link>
              </div>
        );
    },
});
export default Linkkipalkki;
