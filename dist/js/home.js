webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	//const d = a ? b : c;
	// 通过 require 的方式依赖 React，ReactDOM
	var React = __webpack_require__(1);
	var ReactDOM = __webpack_require__(34);
	//var AMUIReact = require('amazeui-react');
	//var Button = AMUIReact.Button;
	
	var Hello = React.createClass({
	    displayName: 'Hello',
	
	    render: function render() {
	        return React.createElement(
	            'div',
	            null,
	            'Hello ',
	            this.props.name,
	            '!!!222'
	        );
	    }
	});
	
	ReactDOM.render(React.createElement(Hello, { name: 'World' }), document.getElementById('AppRoot'));
	
	//var App = require('./components/App');
	//var sub = require('./sub');
	//var app = require('./components/App');
	//var util = require('../common/util');
	//$(function () {
	
	//    sub.test('123456789');
	//    app.test('123456789');
	//    alert(util.utilFunc.add(1, 2));
	//})

/***/ }
]);
//# sourceMappingURL=home.js.map