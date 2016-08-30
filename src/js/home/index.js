//const d = a ? b : c;
// 通过 require 的方式依赖 React，ReactDOM
var React = require('react');
var ReactDOM = require('react-dom');
//var AMUIReact = require('amazeui-react');
//var Button = AMUIReact.Button;

var Hello = React.createClass({
    render: function render() {
        return <div>Hello {this.props.name}!!!222</div>;
    }
});

ReactDOM.render(
  <Hello name="World" />,
  document.getElementById('AppRoot')
);






//var App = require('./components/App');
//var sub = require('./sub');
//var app = require('./components/App');
//var util = require('../common/util');
//$(function () {

//    sub.test('123456789');
//    app.test('123456789');
//    alert(util.utilFunc.add(1, 2));
//})