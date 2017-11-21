import React, { Component } from 'react';
import PropTypes from 'prop-types';

// comments in the jsx are written in {/*--*/}
class TodoItems extends Component {
  render() {
    return(
      <li className='Todo'>
      {/*rendering the title from Todo component*/}
      <strong>{this.props.todo.title}</strong>
      </li>
    );
  }
}

TodoItems.propTypes = {
  todo : PropTypes.array,

}

export default TodoItems;
