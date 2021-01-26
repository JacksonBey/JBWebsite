import ppdemo from './Project Demos/PeoplePagesDemo.mp4'
import ppPoster from './image/ppScreenShot.png'
import bldemo from './Project Demos/BlobLife Demo.mp4'
import blPoster from './image/Bloblife screenshot.png'
import dldemo from './Project Demos/DavisList Demo.mp4'
import dlPoster from './image/davislist poster.png'

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
        title:'BlobLife',
        description:'A 2D platforming game made with vanilla Javascript. BlobLife features three challenging levels and 6 unique Blobs to choose from, each with their own stats. Blobs can die to lava or falling from too far of a distance. Once all lives are lost its game over and the player must restart. Press the escape key to pause.',
        githubURL:'https://github.com/MullaN/BlobLife',
        hostedLink:'https://jacksonbey.github.io/BlobLife-Frontend/',
        videoSRC: bldemo,
        vidPoster: blPoster
    },
    {
        title:'DavisList',
        description:'A Craigslist like website where users can make job listings, furniture sales, etc. Users can make accounts, message about listings, save posts and leave comments. Constructed using Ruby on Rails.',
        githubURL:'https://github.com/JacksonBey/DavisList',
        hostedLink:'https://davislist.herokuapp.com/',
        videoSRC: dldemo,
        vidPoster: dlPoster
    }
]

export default projectData