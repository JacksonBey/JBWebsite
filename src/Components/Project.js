import React, {Component} from 'react';
// import VidPlayer  from './VidPlayer'
import ReactPlayer from 'react-player'

export default class Project extends Component {


    render() {
        let {title, description, githubURL, hostedLink, videoSRC} = this.props.project
        return(
            <div>
                <p>{title}</p>
                <p>vimeo:</p>
                <ReactPlayer url='https://vimeo.com/247859061' />
            </div>
        )
    }
}

// this is the component for projects. It should have a prop of a project with a title
// description, video demo, hosted site link, and github repo link
// it uses the project prop to make a card with all the info
