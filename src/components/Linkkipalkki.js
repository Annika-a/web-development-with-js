import React from 'react';
import { Link } from 'react-router';
import api from '../api';
import HelloWorld from './helloworld';

const Linkkipalkki = React.createClass({

    render: function(){

    return (
             <div>
             <Link to={`/kartta`}>Weather page</Link>
              </div>
        );
    },
});
export default Linkkipalkki;
