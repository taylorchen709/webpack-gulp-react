var React = require('react');
var ReactDOM = require('react-dom');

/**
 * Footer
 */
var Footer = React.createClass({
    mixins:[
        {
            componentWillMount:function(){
                console.log('componentWillMount');
            }
        },
        {
            componentDidMount:function(){
                console.log('componentDidMount');
            }
        },
        {
            componentWillReceiveProps:function(){
                console.log('componentWillReceiveProps');
            }
        },
        {
            shouldComponentUpdate:function(){
                console.log('shouldComponentUpdate');
                return true;
            }
        },
        {
            componentWillUpdate:function(){
                console.log('componentWillUpdate');
            }
        },
        {
            componentDidUpdate:function(){
                console.log('componentDidUpdate');
            }
        }
    ],
            
    render: function() {
        // 类型按钮显示
        let type = ['', '', ''];
        switch(this.props.type){
            case 'active':
                type[1] = 'selected';
                break;
            case 'completed':
                type[2] = 'selected';
                break;
            default :
                type[0] = 'selected';
                break;
        };
                
        return <footer className="footer">
            <span className="todo-count">
                <strong> {this.props.lefted} </strong> <span> </span> <span> items </span> <span> left </span>
            </span>
            <ul className="filters">
                <li> <a href="#" className={type[0]} onClick={this.props.switchType.bind(null, 'all')}> All </a> </li>
                <li> <a href="#active" className={type[1]} onClick={this.props.switchType.bind(null, 'active')}> Active </a> </li> 
                <li> <a href="#completed" className={type[2]} onClick={this.props.switchType.bind(null, 'completed')}> Completed </a> </li>
            </ul>
            <button className="clear-completed" onClick={this.props.clearCom}>
                Clear completed
            </button>
        </footer>
    }
});


module.exports=Footer;