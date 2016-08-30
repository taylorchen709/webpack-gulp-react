var React = require('react');
var ReactDOM = require('react-dom');
var TodoItem=require('./TodoItem');

/**
 * TodoList
 */
var TodoList = React.createClass({
    render: function() {
        let that = this;
        return <ul className="todo-list">
                {this.props.todos.map(function(todo, i) {
                    switch(that.props.type){
                        case 'all' :
                            return <TodoItem data={todo} key={i} 
                            delTask={that.props.delTask(i)}
                            comTask={that.props.comTask(i)}/>
                        case 'active' :
                            if(!todo.completed){
                                return <TodoItem data={todo} key={i} 
                                delTask={that.props.delTask(i)}
                                comTask={that.props.comTask(i)}/>
                                }
                            break;
                        case 'completed' :
                            if(todo.completed){
                                return <TodoItem data={todo} key={i} 
                                delTask={that.props.delTask(i)}
                                comTask={that.props.comTask(i)}/>
                                }
                            break;
                        default :
                            break;
                    }
                            
                            
                })}
            </ul>
    }
});


module.exports=TodoList;