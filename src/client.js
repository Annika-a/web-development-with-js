import './client.css';

import React from 'react';
import ReactDOM from 'react-dom';

import { Router, Route, Link } from 'react-router';

import GreeterPage from './components/GreeterPage';
import CounterPage from './components/CounterPage';
import HelloWOrldApp from './components/HelloWOrldApp';
import WeatherMapPage from './components/WeatherMapPage';

const num1 = [11,22];
const num2 = num1.map(loso => 3 + loso);
const num3 = num2.reduce ((r, num2) =>{return 4 + num2;},0);
console.log(num1);
console.log(num2);
console.log(num3);


const routes = (
        <Router>
            <Route path="/" component={HelloWOrldApp}>
                <Route path="/hello/:name" component={GreeterPage}></Route>
                <Route path="/counter" component={CounterPage}></Route>
                <Route path="/WeatherMap" component={WeatherMapPage}></Route>
            </Route>
        </Router>
    );

ReactDOM.render(routes, document.getElementById('app'));
