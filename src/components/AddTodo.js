import React, { Component } from "react";

class AddTodo extends Component {
  state = {
    title: "",
  };
  onSubmit = (e) => {
    e.preventDefault();
    this.props.addtodo_Approperty(this.state.title);
    this.setState({ title: "" });
  };
  onChange = (e) => this.setState({ title: e.target.value });
  render() {
    return (
      <form onSubmit={this.onSubmit} style={{ display: "flex" }}>
        <input
          type="text"
          style={{ flex: "10", padding: "5px" }}
          name="title"
          placeholder="Add Todo ..."
          value={this.state.title}
          onChange={this.onChange}
        />
        <input
          type="submit"
          value="submit"
          className="btn"
          style={{ flex: 1 }}
        />
      </form>
    );
  }
}

export default AddTodo;
