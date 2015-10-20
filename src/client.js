import './client.css';

import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

function getTussit(){
    return axios.get('/api/tussi').then((response)=>{
        return response.data;
    });
}

const num1 = [11,22];
const num2 = num1.map(loso => 3 + loso);
const num3 = num2.reduce ((r, num2) =>{return 4 + num2;},0);
console.log(num1);
console.log(num2);
console.log(num3);

const HelloWorld = React.createClass({
    render: function(){
    return (
        <div>
            Hello {this.props.name}
        </div>
        );
    }
});

const Counterizwer = React.createClass({
    render: function(){
        const { count, name, onincrementCounter} = this.props;
        return (
            <div className="nappula">

                <button onClick={this.props.onincrementCounter}>  Moorr  </button><br/><br/>
                {this.props.count}
            </div>
        );
    },
});

const HelloWOrldApp = React.createClass({
    getInitialState: function(){
        return{
            count: 0,
            name: 'kissa',
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
                <h1>Headeri</h1>
                    {names.map((name, i) =>
                    <HelloWorld name={name} key={i}/>

               )}
                    {names}
                  <h1>Tilin saldo:</h1>
                    <div className="div1">
                        <Counterizwer
                      count={this.state.count}

                        onincrementCounter={this.incrementCounter}/>
                     </div>
                     <br/>
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

ReactDOM.render(<HelloWOrldApp/>, document.getElementById('app'));
