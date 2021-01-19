import React, {Component} from 'react';
import Project from '../Components/Project'
import projectData from '../projectData'

export default class ProjectContainer extends Component {


    render() {
        return(
            <div>
                {projectData.map((project, idx) => <Project project={project} key = {idx}/>)}
            </div>
        )
    }
}

// this holds all the project cards. Should import the list of project objects and 
// then map them onto Project.js cards

