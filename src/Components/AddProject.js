// inside src->Components
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import uuid from 'uuid';


class AddProject extends Component {
  // {/*inbuilt function constructor*/}
  constructor(){
    super();
    this.state={
      newProject :{}
    }
  }

// {/*properties*/}
  static defaultProps = {
    categories:['web design', 'web-development', 'mobile development']
  }

// {/*handle fucntion()*/}
  handleSubmit(e){
    if(this.refs.title.value === ''){
      alert('title is required');
    }
    else {
      this.setState({newProject:{
        id : uuid.v4(),
        title: this.refs.title.value,
        category : this.refs.category.value
      }},function(){
        // {/*console.log(this.state);
        // addProject user defined function*/}
        this.props.addProject(this.state.newProject);
        console.log(this.props.addProject)
      });
    }
    e.preventDefault();
  }



  render() {
    let categoryOption = this.props.categories.map(category=>{
      return<option key={category} value={category}>{category}</option>
    });
    return (
      <div>
        <h3>Add project</h3>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <div>
            <label>Title</label><br />
            <input type="text" ref="title" /><br/>
          </div>
          <div>
            <label>Category</label><br />
            <select ref="category">
            {categoryOption}
            </select>
          </div>
          <div>
            <br />
            <button type="submit" value="submit">Save</button>
          </div>
        </form>
      </div>
    );
  }
}

// {/*knowing the properties of the components*/}
AddProject.propTypes = {
  categories : PropTypes.object,
  addProject : PropTypes.func
}

export default AddProject;
