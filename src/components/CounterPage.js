import React from 'react';
import Counterizwer from './Counterizwer';

const CounterPage = React.createClass({
    getInitialState: function(){
        return{
            count: 0,
        };
    },

    render: function(){
        return(
            <div>
                    <h1>LAskuri:</h1>
                    <div className="div1">
                        <Counterizwer
                        count={this.state.count}
                        onincrementCounter={this.incrementCounter}/>
                    </div>
                    <div className="div2">
                        <h2>Megacounter:</h2>
                        <h1>{this.state.count}</h1>
                    </div>
            </div>
            );
    },

    incrementCounter: function(){
        this.setState({
            count: this.state.count + 100
        });
    },
});

export default CounterPage;
