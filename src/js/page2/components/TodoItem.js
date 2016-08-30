var React = require('react');
var ReactDOM = require('react-dom');


/**
 * TodoItem
 */
var TodoItem = React.createClass({

    render: function() {
        var todo = this.props.data;
        let className = todo.completed ? "completed" : '';
                
        return <li className={className}>
                <div className="view">
                    <input className="toggle" type="checkbox" 
        onClick={this.props.comTask}
        checked={todo.completed}/>
        <label> {todo.title} </label>
        <button ref="deleteTask" className="destroy" onClick={this.props.delTask}> </button>
    </div>
    <input tyoe="text" className="edit" value={todo.title} />
</li>
    }
});

module.exports=TodoItem;