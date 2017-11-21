import React, { Component } from 'react';
import Projects from './Components/Projects';
import AddProject from './Components/AddProject';
import Todos from './Components/Todos';

import uuid from 'uuid';
import $ from 'jquery';

// css
// import './index.css';





class App extends Component {
  // inbuit function constructor
  // and sate
  constructor(){
    super();
    this.state = {
      projects:[],
      todos:[]
    }
  }

// user defined function()
  getTodos(){
    $.ajax({
      url:'https://jsonplaceholder.typicode.com/todos',
      dataTyper :'json',
      cache: false,
      success : function(data){
        this.setState({todos:data},function(){
          console.log(this.state);
        });
      }.bind(this), error:function(xsh,status,err){
        console.log(err);
      }
    });
  }

  getProjects(){
    this.setState({
      projects:[
        {
          id : uuid.v4(),
          title:'Business websites',
          category:'Web design'
        },
        {
          id : uuid.v4(),
          title:'Socail app',
          category:'mobile development'
        },
        {
          id : uuid.v4(),
          title:'E-commerce website',
          category:'shopping cart(web-development)'
        }
      ]
    });
  }

  // life cycle

  componentWillMount(){
    this.getProjects();
    this.getTodos();
  }


  componentDidMount(){
    this.getTodos();
  }

// handle function()
  handleAddProject(abc){
    let projects = this.state.projects;
    projects.push(abc);
    this.setState({projects:projects})
    console.log(abc);
  }
  handleDeleteProject(id){
    let projects = this.state.projects;
    let index = projects.findIndex(x=> x.id === id);
    projects.splice(index,1);
    this.setState({projects:projects})
    console.log(id);
  }

// responsible for showing data in browser
  render() {
    return (
      <div className="App">
          <h1 className="App-title">Welcome to React</h1>
          My app

          <AddProject addProject={this.handleAddProject.bind(this)}/>
          <br />
          <hr />

          <Projects abc={this.state.projects} onDelete={this.handleDeleteProject.bind(this)}/>

          <Todos todos={this.state.todos}/>
      </div>
    );
  }
}

export default App;
