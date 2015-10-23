import React from 'react';
import ReactDOM from 'react-dom';
import Linkkipalkki from './Linkkipalkki';
import HelloWorld from './helloworld';

const HelloWOrldApp = React.createClass({
    render: function(){
    return (
             <div >
                <h1> Weather app 2.0 </h1>
                <script src="https://maps.googleapis.com/maps/api/js"></script>
                    <Linkkipalkki />
                    {this.props.children}
              </div>
        );
    },
});

export default HelloWOrldApp;
