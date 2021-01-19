import React, {Component} from 'react';
import ReactPlayer from 'react-player';
import viddemo from '../Project Demos/viddemo.mp4';


export default class Project extends Component {


    render() {
        let {title, description, githubURL, hostedLink, videoSRC} = this.props.project
        return(
            <div className='projectCard'>
                {/* <ReactPlayer url='https://www.youtube.com/watch?v=v4K8SMMEvRM' width='35vh' height='35vh' className='video'/> */}
                <video
                    id="my-video"
                    className="video-js"
                    controls
                    preload="auto"
                    width="264"
                    height="264"
                    poster="MY_VIDEO_POSTER.jpg"
                    data-setup="{}">
                    <source src={viddemo} type="video/mp4" />
                    <p className="vjs-no-js">
                    To view this video please enable JavaScript, and consider upgrading to a
                    web browser that
                    <a href="https://videojs.com/html5-video-support/" target="_blank"
                        >supports HTML5 video</a
                    >
                    </p>
                </video>
                <div className="projectText">
                    <h2>{title}</h2>
                    <p>{description}</p>
                    <div className='links'>
                        <p>Links: </p>
                        {/* <li></li> */}
                        <a href={hostedLink}>Live Website</a>
                        {/* <li></li> */}
                        <a href={githubURL}> Github
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

// this is the component for projects. It should have a prop of a project with a title
// description, video demo, hosted site link, and github repo link
// it uses the project prop to make a card with all the info
