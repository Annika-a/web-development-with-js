import React from 'react';

const GreeterPage = React.createClass({
    render: function(){
        const name = this.props.params.name;
        return (
            <div className="hellopage">
                 <h1>
                    Hello {name}
                </h1>
            </div>
            );
    }
});

export default GreeterPage;
