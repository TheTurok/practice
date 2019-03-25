import React, {Component} from 'react';
import PROJECTS from './data/projects';


class Project extends Component {
  render(){
    const {title, image, description} = this.props.project;

    return(
      <div style = {{display: 'inline-block', width: 300, margin: 10}}>
        <h4>{title}</h4>
        <img src={image} style = {{width: 200}} alt = 'profile'/>
        <p> {description} </p>
      </div>
    );
  }
}

class Projects extends Component{
  render(){
    return(
      <div>
        <h2> Highlighted Projects </h2>
        <div>
          {
            PROJECTS.map( p => {
              return(
                <Project key = {p.id} project = {p}/>
              );
            })
          }
        </div>
      </div>
    );
  }
}

export default Projects;
