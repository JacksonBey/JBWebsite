import ppdemo from './Project Demos/PeoplePagesDemo.mp4'
import ppPoster from './image/ppScreenShot.png'
import bldemo from './Project Demos/BlobLife Demo.mp4'
import blPoster from './image/Bloblife screenshot.png'

const projectData = [
    {
        title:'People Pages',
        description:'Inspired by the functionality of Facebook and the simplicity of Twitter, PeoplePages is a fully-functional social media website. Users can add friends, message, post and even upload images! PeoplePages was made using React.js and Ruby on Rails. All CSS was written from scratch.',
        githubURL:'https://github.com/JacksonBey/PeoplePages_Frontend',
        hostedLink:'https://peoplepages.herokuapp.com/',
        videoSRC: ppdemo,
        vidPoster: ppPoster
    },
    {
        title:'Blob Life',
        description:'A 2D platforming game made with vanilla Javascript. Blob Life features three challenging levels and 6 unique Blobs to choose from, each with their own stats. Blobs can die to lava or falling from too far of a distance. Once all lives are lost its game over and the player must restart. Press the escape key to pause.',
        githubURL:'https://github.com/MullaN/BlobLife',
        hostedLink:'https://jacksonbey.github.io/Bloblife-frontend/',
        videoSRC: bldemo,
        vidPoster: blPoster
    },
    {
        title:'People Pages',
        description:'an app made to explore the functionality of social media websites',
        githubURL:'https://github.com/JacksonBey/PeoplePages_Frontend',
        hostedLink:'put host url here',
        videoSRC: './Project Demos/PeoplePagesDemo.mp4'
    }
]

export default projectData