import React from 'react';

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

export default Counterizwer;
