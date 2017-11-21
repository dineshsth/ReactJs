import React, { Component } from 'react';
import ProjectItem from './ProjectItem';
import PropTypes from 'prop-types';


class Projects extends Component {
// user defined function to delete the object inside the projects array
  deleteProject(id){
    this.props.onDelete(id);
  }

  render() {
    let projectItems;
    // {/*console.log(this.props.abc);*/}
    if(this.props.abc){
      projectItems = this.props.abc.map(project =>{
        // {/*console.log(project);*/}
        return(
          <ProjectItem onDelete={this.deleteProject.bind(this)} key={project.title} project={project} />
        );
      });
    }
    return (
      <div className="Project">
      {projectItems}
      </div>
    );
  }
}

// {/*components_name properties*/}
Projects.propTypes = {
  projects : PropTypes.array,
  onDelete : PropTypes.func
}

export default Projects;
