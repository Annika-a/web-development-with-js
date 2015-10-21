import React from 'react';
import { Link } from 'react-router';
import getTussit from './getTussit';
import HelloWorld from './helloworld';

const Linkkipalkki = React.createClass({

    getInitialState: function(){
        return{
            names: []
        };
    },

    componentDidMount: function(){
        getTussit().then((data) =>  {
                this.setState({
                    names: data
                });
            });
    },

    render: function(){
    const names = this.state.names;

    return (
             <div >
                    {names.map((name, i) =>
                    <HelloWorld name={name} key={i}/>)}
                    <Link to={`/counter`}> Counter</Link>
              </div>
        );
    },
});
export default Linkkipalkki;
