import React, {Component} from 'react';
import { Player } from 'video-react'

export default class Project extends Component {


    render() {
        let {title, description, githubURL, hostedLink, videoSRC} = this.props.project
        return(
            <div>
                <p>{title}</p>
            </div>
        )
    }
}

// this is the component for projects. It should have a prop of a project with a title
// description, video demo, hosted site link, and github repo link
// it uses the project prop to make a card with all the info
