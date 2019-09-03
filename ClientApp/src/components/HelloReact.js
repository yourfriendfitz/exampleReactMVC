import React, { Component } from "react";

const Title = () => {
  return (
    <div>
      <div>
        <h1>FitzTodoReact</h1>
      </div>
    </div>
  );
};

const TodoForm = ({ addTodo }) => {
  let input;

  return (
    <div>
      <input
        ref={node => {
          input = node;
        }}
      />
      <button
        onClick={() => {
          addTodo(input.value);
          input.value = "";
        }}
      >
        +
      </button>
    </div>
  );
};

const Todo = ({ todo, remove }) => {
  return <li onClick={remove(todo.id)}>{todo.text}</li>;
};

const TodoList = ({ todos, remove }) => {
  const todoNode = todos.map(todo => {
    return <Todo todo={todo} key={todo.id} remove={remove} />;
  });
  return <ul>{todoNode}</ul>;
};

window.id = 0;
export class HelloReact extends Component {
  static displayName = HelloReact.name;
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  addTodo(val) {
    const todo = { text: val, id: window.id++ };
    this.state.data.push(todo);
    this.setState({ data: this.state.data });
  }
  handleRemove(id) {
    
  }
  render() {
    return (
      <div>
        <Title />
        <TodoForm addTodo={this.addTodo.bind(this)} />
        <TodoList
          todos={this.state.data}
          remove={this.handleRemove.bind(this)}
        />
      </div>
    );
  }
}
