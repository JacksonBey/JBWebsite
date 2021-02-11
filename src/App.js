import './App.css';
import ProjectContainer from './Containers/ProjectContainer.js'
import Arrow from './image/Arrow.webp'
import Download from './image/Download.webp'
import resume from './resume/Jackson Beytebiere-Software Engineer-2021.pdf'



function App() {
//   [<img align='left' alt='JacksonBey | Email' width='22px' src='https://cdn.jsdelivr.net/npm/simple-icons@3.7.0/icons/gmail.svg' />](mailto:jacksongrowson@gmail.com)
// [<img align='left' alt='JacksonBey | LinkedIn' width='22px' src='https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/linkedin.svg' />][linkedin]
// <br />

  return (
    <div className='app'>
     <h1 className='title'>Hi I'm Jackson Beytebiere <br/> I'm a Software Engineer</h1>
     {/* <div className='ProjectsButtonDiv'>
        <a className='ProjectButton' href="#projects">
          <img className='Arrow' src={Arrow} alt='Arrow here'/>
          <h2>Projects</h2>
        </a>
     </div>
     <div className="demo">
     <img className='Arrow' src={Arrow} alt='Arrow here'/>
     <a href="#projects">
     Demo
     </a>
     </div> */}
     <br/>
     <br/>
     <div className="navDiv">
     <a href="#projects" className='ProjectButtonDiv'> 
     <img className='Arrow' src={Arrow} alt='Arrow here'/>
     <h2>Projects</h2>
     </a>
     <a href="#about" className='firstContactDiv'> 
     <img className='Arrow' src={Arrow} alt='Arrow here'/>
     <h2>About me</h2>
     </a>
     <a href={resume} className='resumeButtonDiv' download > 
     <img className='DownloadIcon' src={Download} alt='DL icon here'/>
     <h2>Resume</h2>
     </a>
     </div>
     <div id='projects' className='ProjectContainerDiv'>
      <ProjectContainer/>
     </div>
     <a href="#about" className='contactButtonDiv'> 
     <img className='Arrow' src={Arrow} alt='Arrow here'/>
     <h2>About me/ Contact</h2>
     </a>
     <div id='about' className='infoDiv'>
     <div className='aboutDiv'>
      <h3>About me</h3>
      <p>At one point in my life, you could likely find me in a marsh on a cold autumn day measuring the length between nodes on a blade of grass. These days you can probably find me measuring the length between website components loading. 
        <br/>
        My name’s Jackson Beytebiere. Im a software engineer. I like to make websites and software. Javascript is my hammer, and every website component is a nail. There isn’t anything I can’t build using Javascript, CSS and HTML. 
        <br/>
        
      </p>
      <div className='knowledge'>
        <h3>Expertise in:</h3>
        <ul>
        <li>Javascript</li>
        <li>Ruby</li>
        <li>SQL</li>
        <li>React.js</li>
        <li>Redux</li>
        <li>CSS/ HTML</li>
        </ul>
        {/* <h3>Currently learning:</h3>
        <li>PHP</li> */}
      </div>
      </div>
      <div className='contactDiv'>
        <h3>Contact Info</h3>
        <p>Feel free to connect with me on Linkedin or send me an email. </p>
        <a href='https://www.linkedin.com/in/jackson-beytebiere-2049951b6/' className='linkedin'>
        <img  alt='JacksonBey | LinkedIn' width='22px' src='https://cdn.jsdelivr.net/npm/simple-icons@v3/icons/linkedin.svg' />
        </a>
        <a href='https://github.com/JacksonBey/JacksonBey'>
        <img  alt='JacksonBey | Github' width='22px' src='https://cdn.jsdelivr.net/npm/simple-icons@3.13.0/icons/github.svg' />
        </a>
        <a href="mailto:jacksongrowson@gmail.com" style={{  'text-decoration': 'none', 'color': 'black'}}>
        Email: jacksongrowson@gmail.com
        {/* <img  alt='JacksonBey | Email' width='22px' src='https://cdn.jsdelivr.net/npm/simple-icons@3.7.0/icons/gmail.svg' /> */}
        </a>
        <a href={resume} download style={{  'text-decoration': 'none', 'color': 'black'}}>&#10515; Resume</a>
      </div>
     </div>
     <div id='dummy' className='dummy'></div>
    </div>
  );
}

export default App;
