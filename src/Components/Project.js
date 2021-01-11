import React, {Component} from 'react';

export default class Project extends Component {


    render() {
        return(
            <div>
                <p>Project component</p>
            </div>
        )
    }
}

// this is the component for projects. It should have a prop of a project with a title
// description, video demo, hosted site link, and github repo link
// it uses the project prop to make a card with all the info