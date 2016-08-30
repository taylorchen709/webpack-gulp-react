// 通过 require 的方式依赖 React，ReactDOM
var React = require('react');
var ReactDOM = require('react-dom');
var Header=require('./components/Header');
var Footer=require('./components/Footer');
var TodoItem=require('./components/TodoItem');
var TodoList=require('./components/TodoList');
/**
         * [todolist 数据]
         * @type {Object}
         */
var todolist = {
    name: "todos",
    todos: [{
        completed: false,
        title: 'finish exercise'
    }, {
        completed: false,
        title: 'lean jsx'
    }, {
        completed: true,
        title: 'lean react'
    }]
};

/**
 * App 组件 
 */

var App = React.createClass({
    

    getInitialState: function() {
        return {
            addTaskTitle: '',
            todolist: todolist,
            type: 'all'
        }
    },

    /**
     * 表单输入域
     * @param  {[type]} event [description]
     * @return {[type]}       [description]
     */
    changeHandel: function(event){
        this.setState({value: event.target.value});
    },

    /**
     * 添加任务
     * @param {[type]} event [description]
     */
    addTaskHandel: function(event){
        let task = this.refs.addTask;
        if(task.value === ''){
            console.error("don't add empty task!");
            return false;
        }
        this.setState(function(){
            let todos = this.state.todolist.todos,
                todo = {
                    completed: false,
                    title: task.value
                };

            todos.push(todo);
            return todos;
        });
    },

    /**
     * 删除任务
     * @param  {[type]} index [description]
     * @return {[type]}       [description]
     */
    deleteTaskHandel: function(index){
        return function(){
            let todos = this.state.todolist.todos,
                todolist = {
                    todolist: {
                        name: "todos",
                        todos: []
                    }
                };

            todos.splice(index, 1),
            todolist.todolist.todos = todos;

            this.setState(todolist);
        }.bind(this);
                
    },

    /**
     * 切换任务状态
     * @param  {[type]} index [description]
     * @return {[type]}       [description]
     */
    switchTaskCompletedHandel: function(index){
        return function(){
            this.setState(function(){
                let todolist = this.state.todolist;

                todolist['todos'][index]['completed'] = !todolist['todos'][index]['completed'];

                return todolist;
            }); 
        }.bind(this);
    },

    /**
     * 切换任务类型
     * @return {[type]} [description]
     */
    switchListTypeHandel: function(){
        return function(hash, event){
            let type = '';

            switch(hash){
                case 'active':
                    type = 'active';
                    break;
                case 'completed':
                    type = 'completed';
                    break;
                default :
                    type = 'all';
                    break; 
            }
                    
            this.setState({type: type});
        }.bind(this);
    },

    clearCompleted: function(){
        return function(){
            let todolist = this.state.todolist,
                todos = todolist.todos.filter(function(todo){
                    return !todo.completed;
                });
            todolist.todos = todos;

            this.setState(todolist);
        }.bind(this);
    },

    render: function() {
        var todolist = this.state.todolist;
        // 计算还有多少个未完成的
        var lefted = todolist.todos.reduce(function(acc, todo) {
            return todo.completed ? acc : acc + 1;
        }, 0);
        let footer = todolist.todos.length ? <Footer lefted={lefted} type={this.state.type} 
        switchType={this.switchListTypeHandel()}
        clearCom={this.clearCompleted()}/> : '';
        return <div ref="app">
                    <section className="main">
                        <Header title={todolist.name}/>
                        <div className="add-taskItem-box">
                            <input ref="addTask" className="new-todo" 
                            placeholder="What needs to be done?" 
                            defaultValue={this.state.addTaskTitle} 
                            onChange={this.changeHandel}/> 
                            <button className="add-taskItem" onClick={this.addTaskHandel}>Add</button>
                        </div>
                        <TodoList todos={todolist.todos} type={this.state.type}
                            delTask={this.deleteTaskHandel}
                            comTask={this.switchTaskCompletedHandel}/>
                            {footer}
                                
                    </section>
                </div>
    }
});





         

/**
 * render 到 DOM
 * @type {String}
 */
ReactDOM.render(
  <App />,
  document.getElementById('AppRoot')
);