import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Todos from "./components/Todos";
import Header from "./components/layout/Header";
import AddTodo from "./components/AddTodo";
import About from "./components/pages/About";
import "./App.css";
// import uuid from "uuid/v4";
// import { v4 as uuidv4 } from "uuid";
//npm i uuid to create random id
//npm i react-router-dom
import axios from "axios";

class App extends Component {
  state = {
    todos: [],
    // todos: [
    //   {
    //     // id: 1,
    //     id: uuidv4(),
    //     title: "Five prayers",
    //     completed: true,
    //   },
    //   {
    //     // id: 2,
    //     id: uuidv4(),
    //     title: "Doing Dhkir",
    //     completed: false,
    //   },
    //   {
    //     // id: 3,
    //     id: uuidv4(),
    //     title: "Watching programming videos",
    //     completed: false,
    //   },
    // ],
  };
  componentDidMount() {
    // axios
    //   .get("https://jsonplaceholder.typicode.com/todos?_limit=10")
    //   .then((res) => console.log(res.data));
    axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=10")
      .then((res) => this.setState({ todos: res.data }));
  }
  markComplete = (id) => {
    //console.log(id);  //this id is coming from ti=odoitem this.bind in event on hljs-change
    this.setState({
      todos: this.state.todos.map((top) => {
        if (top.id === id) {
          top.completed = !top.completed;
        }
        return top;
      }),
    });
  };
  // deleteTodo = (id) => {
  //   //console.log(id);
  //   this.setState({
  //     todos: [...this.state.todos.filter((tt) => tt.id !== id)],
  //   });
  // };
  deleteTodo = (id) => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((res) =>
        this.setState({
          todos: [...this.state.todos.filter((tt) => tt.id !== id)],
        })
      );
  };
  // addTodo = (title) => {
  //   //console.log(title);
  //   const newTodo = {
  //     // id: 4,
  //     id: uuidv4(),
  //     title,
  //     completed: false,
  //   };
  //   this.setState({ todos: [...this.state.todos, newTodo] });
  // };

  addTodo = (title) => {
    axios
      .post("https://jsonplaceholder.typicode.com/todos", {
        title,
        completed: false,
      })
      .then((res) => this.setState({ todos: [...this.state.todos, res.data] }));
  };

  render() {
    // console.log(this.state.todos);

    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route
              exact
              path="/"
              render={(props) => (
                <React.Fragment>
                  <AddTodo addtodo_Approperty={this.addTodo} />
                  <Todos
                    todo_property={this.state.todos}
                    markComplete_Approperty={this.markComplete}
                    deleteTodo_Approperty={this.deleteTodo}
                  />
                </React.Fragment>
              )}
            />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}
export default App;
