import React, { Component } from 'react';
import PropTypes from 'prop-types';


class ProjectItem extends Component {
  // {/*userdefined fucntion()*/}
  deleteProject(id){
    this.props.onDelete(id);
    console.log('test');
  }



  render() {
    // console.log(this.props);
    return (
      <ul>
        <li>
        {this.props.project.title} - {this.props.project.category}
        <br/>
        <button onClick={this.deleteProject.bind(this, this.props.project.id )} >Delete</button>
        <hr/>
        </li>
      </ul>

    );
  }
}

// components_name properties type
ProjectItem.propTypes = {
  projects : PropTypes.object,
  onDelete : PropTypes.func
}

export default ProjectItem;
