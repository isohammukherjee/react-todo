var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');
var TodoSearch = require('TodoSearch');

var TodoApp = React.createClass ({
  getInitialState: function () {
    return {
      showCompleted: false,
      searchText: '',
      todos: [
        {
          id: 1,
          text: 'Walk the dog'
        },
        {
          id: 2,
          text: 'Clean the yard'
        },
        {
          id: 3,
          text: 'Prepare bed'
        },
        {
          id: 4,
          text: 'Cook dinner'
        }
      ]
    };
  },
  handleAddTodo: function (text) {
    var {todos} = this.state;
    console.log('new todo:' + text);
    console.log('todos json (before) :-');
    console.log(JSON.stringify(todos));
    var len = todos.length;
    console.log('todos length:' + len);
    var temp = {
      id: len+1,
      text: text
    };
    console.log('temp:' + temp);
    todos.push(temp);
    console.log('todos json (after temp) :-');
    console.log(JSON.stringify(todos));
  },
  handleSearch: function (showCompleted, searchText) {
    this.setState ({
      showCompleted: showCompleted,
      searchText: searchText.toLowerCase()
    })
    console.log('showCompleted ' + this.state.showCompleted);
    console.log('searchText ' + this.state.searchText);
  },
  render: function () {
    var {todos} = this.state;

    return (
      <div>
        <TodoSearch onSearch={this.handleSearch}/>
        <TodoList todos={todos}/>
        <AddTodo onAddTodo={this.handleAddTodo}/>
      </div>
    );
  }
});

module.exports = TodoApp;
