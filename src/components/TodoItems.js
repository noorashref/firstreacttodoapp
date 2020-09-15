import React, { Component } from "react";
import PropTypes from "prop-types";

class TodoItems extends Component {
  getStyle = () => {
    //1.1
    // if (this.props.todoitem_property.completed) {
    //   return {
    //     textDecoration: "line-through",
    //   };
    // } else {
    //   return {
    //     textDecoration: "none",
    //   };
    // }
    return {
      backgroundColor: "#f4f4f4",
      padding: "10px",
      borderBottom: "1px #ccc solid",
      textDecoration: this.props.todoitem_property.completed
        ? "line-through"
        : "none",
    };
  };
  //1.2
  //   markComplete(e) {
  //     console.log(this.props);
  //   }
  //   markComplete = (e) => {
  //     console.log(this.props);
  //   };
  render() {
    //Pulling varaiables out
    const { id, title } = this.props.todoitem_property;
    return (
      //   <div style={{ backgroundColor: "#f4f4f4" }}>
      //   <div style={itemStyle}> //1.1
      <div style={this.getStyle()}>
        <p>
          {/* <input type="checkbox" onChange={this.markComplete.bind(this)} /> {""} */}
          {/* <input
            type="checkbox"
            onChange={this.props.todoitem_property1.bind(
              this,
              this.props.todoitem_property.id
            )}
          /> */}
          <input
            type="checkbox"
            onChange={this.props.todoitem_property1.bind(this, id)}
          />{" "}
          {title}
          <button
            onClick={this.props.todoitem_property2.bind(this, id)}
            style={btnStyle}
          >
            X
          </button>
        </p>
      </div>
    );
  }
}
TodoItems.propTypes = {
  todoitem_property: PropTypes.object.isRequired,
};
const btnStyle = {
  background: "#ff0000",
  color: "#fff",
  border: "none",
  padding: "5px 10px",
  borderRadius: "50px",
  cursor: "pointer",
  float: "right",
};

//1.1
// const itemStyle = {
//   backgroundColor: "#f4f4f4",
// };

export default TodoItems;
