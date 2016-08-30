webpackJsonp([1],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	// 通过 require 的方式依赖 React，ReactDOM
	var React = __webpack_require__(1);
	var ReactDOM = __webpack_require__(34);
	var Header = __webpack_require__(172);
	var Footer = __webpack_require__(173);
	var TodoItem = __webpack_require__(174);
	var TodoList = __webpack_require__(175);
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
	    displayName: 'App',
	
	
	    getInitialState: function getInitialState() {
	        return {
	            addTaskTitle: '',
	            todolist: todolist,
	            type: 'all'
	        };
	    },
	
	    /**
	     * 表单输入域
	     * @param  {[type]} event [description]
	     * @return {[type]}       [description]
	     */
	    changeHandel: function changeHandel(event) {
	        this.setState({ value: event.target.value });
	    },
	
	    /**
	     * 添加任务
	     * @param {[type]} event [description]
	     */
	    addTaskHandel: function addTaskHandel(event) {
	        var task = this.refs.addTask;
	        if (task.value === '') {
	            console.error("don't add empty task!");
	            return false;
	        }
	        this.setState(function () {
	            var todos = this.state.todolist.todos,
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
	    deleteTaskHandel: function deleteTaskHandel(index) {
	        return function () {
	            var todos = this.state.todolist.todos,
	                todolist = {
	                todolist: {
	                    name: "todos",
	                    todos: []
	                }
	            };
	
	            todos.splice(index, 1), todolist.todolist.todos = todos;
	
	            this.setState(todolist);
	        }.bind(this);
	    },
	
	    /**
	     * 切换任务状态
	     * @param  {[type]} index [description]
	     * @return {[type]}       [description]
	     */
	    switchTaskCompletedHandel: function switchTaskCompletedHandel(index) {
	        return function () {
	            this.setState(function () {
	                var todolist = this.state.todolist;
	
	                todolist['todos'][index]['completed'] = !todolist['todos'][index]['completed'];
	
	                return todolist;
	            });
	        }.bind(this);
	    },
	
	    /**
	     * 切换任务类型
	     * @return {[type]} [description]
	     */
	    switchListTypeHandel: function switchListTypeHandel() {
	        return function (hash, event) {
	            var type = '';
	
	            switch (hash) {
	                case 'active':
	                    type = 'active';
	                    break;
	                case 'completed':
	                    type = 'completed';
	                    break;
	                default:
	                    type = 'all';
	                    break;
	            }
	
	            this.setState({ type: type });
	        }.bind(this);
	    },
	
	    clearCompleted: function clearCompleted() {
	        return function () {
	            var todolist = this.state.todolist,
	                todos = todolist.todos.filter(function (todo) {
	                return !todo.completed;
	            });
	            todolist.todos = todos;
	
	            this.setState(todolist);
	        }.bind(this);
	    },
	
	    render: function render() {
	        var todolist = this.state.todolist;
	        // 计算还有多少个未完成的
	        var lefted = todolist.todos.reduce(function (acc, todo) {
	            return todo.completed ? acc : acc + 1;
	        }, 0);
	        var footer = todolist.todos.length ? React.createElement(Footer, { lefted: lefted, type: this.state.type,
	            switchType: this.switchListTypeHandel(),
	            clearCom: this.clearCompleted() }) : '';
	        return React.createElement(
	            'div',
	            { ref: 'app' },
	            React.createElement(
	                'section',
	                { className: 'main' },
	                React.createElement(Header, { title: todolist.name }),
	                React.createElement(
	                    'div',
	                    { className: 'add-taskItem-box' },
	                    React.createElement('input', { ref: 'addTask', className: 'new-todo',
	                        placeholder: 'What needs to be done?',
	                        defaultValue: this.state.addTaskTitle,
	                        onChange: this.changeHandel }),
	                    React.createElement(
	                        'button',
	                        { className: 'add-taskItem', onClick: this.addTaskHandel },
	                        'Add'
	                    )
	                ),
	                React.createElement(TodoList, { todos: todolist.todos, type: this.state.type,
	                    delTask: this.deleteTaskHandel,
	                    comTask: this.switchTaskCompletedHandel }),
	                footer
	            )
	        );
	    }
	});
	
	/**
	 * render 到 DOM
	 * @type {String}
	 */
	ReactDOM.render(React.createElement(App, null), document.getElementById('AppRoot'));

/***/ },

/***/ 172:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(1);
	var ReactDOM = __webpack_require__(34);
	
	/**
	 * Header 组件
	 */
	
	var Header = React.createClass({
	    displayName: 'Header',
	
	    render: function render() {
	        return React.createElement(
	            'header',
	            { className: 'header' },
	            React.createElement(
	                'h1',
	                null,
	                this.props.title
	            )
	        );
	    }
	});
	
	module.exports = Header;

/***/ },

/***/ 173:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(1);
	var ReactDOM = __webpack_require__(34);
	
	/**
	 * Footer
	 */
	var Footer = React.createClass({
	    displayName: 'Footer',
	
	    mixins: [{
	        componentWillMount: function componentWillMount() {
	            console.log('componentWillMount');
	        }
	    }, {
	        componentDidMount: function componentDidMount() {
	            console.log('componentDidMount');
	        }
	    }, {
	        componentWillReceiveProps: function componentWillReceiveProps() {
	            console.log('componentWillReceiveProps');
	        }
	    }, {
	        shouldComponentUpdate: function shouldComponentUpdate() {
	            console.log('shouldComponentUpdate');
	            return true;
	        }
	    }, {
	        componentWillUpdate: function componentWillUpdate() {
	            console.log('componentWillUpdate');
	        }
	    }, {
	        componentDidUpdate: function componentDidUpdate() {
	            console.log('componentDidUpdate');
	        }
	    }],
	
	    render: function render() {
	        // 类型按钮显示
	        var type = ['', '', ''];
	        switch (this.props.type) {
	            case 'active':
	                type[1] = 'selected';
	                break;
	            case 'completed':
	                type[2] = 'selected';
	                break;
	            default:
	                type[0] = 'selected';
	                break;
	        };
	
	        return React.createElement(
	            'footer',
	            { className: 'footer' },
	            React.createElement(
	                'span',
	                { className: 'todo-count' },
	                React.createElement(
	                    'strong',
	                    null,
	                    ' ',
	                    this.props.lefted,
	                    ' '
	                ),
	                ' ',
	                React.createElement(
	                    'span',
	                    null,
	                    ' '
	                ),
	                ' ',
	                React.createElement(
	                    'span',
	                    null,
	                    ' items '
	                ),
	                ' ',
	                React.createElement(
	                    'span',
	                    null,
	                    ' left '
	                )
	            ),
	            React.createElement(
	                'ul',
	                { className: 'filters' },
	                React.createElement(
	                    'li',
	                    null,
	                    ' ',
	                    React.createElement(
	                        'a',
	                        { href: '#', className: type[0], onClick: this.props.switchType.bind(null, 'all') },
	                        ' All '
	                    ),
	                    ' '
	                ),
	                React.createElement(
	                    'li',
	                    null,
	                    ' ',
	                    React.createElement(
	                        'a',
	                        { href: '#active', className: type[1], onClick: this.props.switchType.bind(null, 'active') },
	                        ' Active '
	                    ),
	                    ' '
	                ),
	                React.createElement(
	                    'li',
	                    null,
	                    ' ',
	                    React.createElement(
	                        'a',
	                        { href: '#completed', className: type[2], onClick: this.props.switchType.bind(null, 'completed') },
	                        ' Completed '
	                    ),
	                    ' '
	                )
	            ),
	            React.createElement(
	                'button',
	                { className: 'clear-completed', onClick: this.props.clearCom },
	                'Clear completed'
	            )
	        );
	    }
	});
	
	module.exports = Footer;

/***/ },

/***/ 174:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(1);
	var ReactDOM = __webpack_require__(34);
	
	/**
	 * TodoItem
	 */
	var TodoItem = React.createClass({
	    displayName: 'TodoItem',
	
	
	    render: function render() {
	        var todo = this.props.data;
	        var className = todo.completed ? "completed" : '';
	
	        return React.createElement(
	            'li',
	            { className: className },
	            React.createElement(
	                'div',
	                { className: 'view' },
	                React.createElement('input', { className: 'toggle', type: 'checkbox',
	                    onClick: this.props.comTask,
	                    checked: todo.completed }),
	                React.createElement(
	                    'label',
	                    null,
	                    ' ',
	                    todo.title,
	                    ' '
	                ),
	                React.createElement(
	                    'button',
	                    { ref: 'deleteTask', className: 'destroy', onClick: this.props.delTask },
	                    ' '
	                )
	            ),
	            React.createElement('input', { tyoe: 'text', className: 'edit', value: todo.title })
	        );
	    }
	});
	
	module.exports = TodoItem;

/***/ },

/***/ 175:
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var React = __webpack_require__(1);
	var ReactDOM = __webpack_require__(34);
	var TodoItem = __webpack_require__(174);
	
	/**
	 * TodoList
	 */
	var TodoList = React.createClass({
	    displayName: 'TodoList',
	
	    render: function render() {
	        var that = this;
	        return React.createElement(
	            'ul',
	            { className: 'todo-list' },
	            this.props.todos.map(function (todo, i) {
	                switch (that.props.type) {
	                    case 'all':
	                        return React.createElement(TodoItem, { data: todo, key: i,
	                            delTask: that.props.delTask(i),
	                            comTask: that.props.comTask(i) });
	                    case 'active':
	                        if (!todo.completed) {
	                            return React.createElement(TodoItem, { data: todo, key: i,
	                                delTask: that.props.delTask(i),
	                                comTask: that.props.comTask(i) });
	                        }
	                        break;
	                    case 'completed':
	                        if (todo.completed) {
	                            return React.createElement(TodoItem, { data: todo, key: i,
	                                delTask: that.props.delTask(i),
	                                comTask: that.props.comTask(i) });
	                        }
	                        break;
	                    default:
	                        break;
	                }
	            })
	        );
	    }
	});
	
	module.exports = TodoList;

/***/ }

});
//# sourceMappingURL=page2.js.map