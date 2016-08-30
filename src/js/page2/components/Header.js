var React = require('react');
var ReactDOM = require('react-dom');

/**
 * Header 组件
 */

var Header = React.createClass({
    render: function() {
        return <header className="header">
                <h1>{this.props.title}</h1>
            </header>
    }
});


module.exports=Header;