import React from "react";
import TodoItems from "./TodoItems";
import PropTypes from "prop-types";
class Todos extends React.Component {
  render() {
    //console.log(this.props.todo);
    return this.props.todo_property.map((tod) => (
      //<h3>{tod.title}</h3>); also we can do like this
      <TodoItems
        key={tod.id}
        todoitem_property={tod}
        todoitem_property1={this.props.markComplete_Approperty}
        todoitem_property2={this.props.deleteTodo_Approperty}
      />
    ));
  }
}

Todos.propTypes = {
  todo_property: PropTypes.array.isRequired,
  markComplete_Approperty: PropTypes.func.isRequired,
  deleteTodo_Approperty: PropTypes.func.isRequired,
};
export default Todos;
