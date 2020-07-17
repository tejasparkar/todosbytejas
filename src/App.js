import React, { Component } from 'react';
import Todos from "./Todos";
import AddTodos from "./AddTodos";

export class App extends Component {

  state ={
    todos : [
      {id:1,content:"Wake up early"},
      {id:2,content:"Take Bath"},
      {id:3,content:"Do Breakfast"},
      {id:4,content:"Write tasks"},
    ]
  }
  addTodo = (todo)=>{
    todo.id = Math.random();
    let todos = [...this.state.todos,todo];
    this.setState({
      todos
    })
  }
  deleteTodo = (id)=>{
    const todos = this.state.todos.filter(todo=>{
      return todo.id !== id;
    });
    this.setState({
      todos
    })
  }

  render() {
    return (
      <div className="container">
        <h2 className="center red-text">Todo's App</h2>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
        <AddTodos addTodo={this.addTodo}/>
      </div>
    )
  }
}

export default App
