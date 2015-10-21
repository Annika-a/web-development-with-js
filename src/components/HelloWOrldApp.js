import React from 'react';
import ReactDOM from 'react-dom';
import Linkkipalkki from './Linkkipalkki';
import HelloWorld from './helloworld';

const HelloWOrldApp = React.createClass({
    render: function(){
    return (
             <div >
                <h1>Otsikko </h1>
                    <Linkkipalkki />
                    {this.props.children}
              </div>
        );
    },
});

export default HelloWOrldApp;
