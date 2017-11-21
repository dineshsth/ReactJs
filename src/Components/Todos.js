import React, { Component } from 'react';
import TodoItems from './TodoItems';
import PropTypes from 'prop-types';


class Todos extends Component {
  render() {
    let todoItems;
    // console.log(this.props.abc);
    if(this.props.todos){
      // mapping the todos object to todo (i.e one to one function)
      todoItems = this.props.todos.map(todo =>{
        // console.log(project);
        return(
          <TodoItems  key={todo.title} todo={todo} />
        );
      });
    }
    return (
      <div className="todo">
      <h3>Todo lists</h3>
      {/* calling todoitems from the above */}
      {todoItems}
      </div>
    );
  }
}
Todos.propTypes = {
  todo : PropTypes.array
}

export default Todos;
