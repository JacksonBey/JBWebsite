import './App.css';
import ProjectContainer from './Containers/ProjectContainer.js'
import Arrow from './image/Arrow.png'

function App() {
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
     <a href="#projects" className='ProjectButtonDiv'> 
     <img className='Arrow' src={Arrow} alt='Arrow here'/>
     <h3>Projects</h3>
     </a>
     <div id='projects' className='ProjectContainerDiv'>
      <ProjectContainer/>
     </div>
     <a href="#about" className='contactButtonDiv'> 
     <img className='Arrow' src={Arrow} alt='Arrow here'/>
     <h3>About me/ Contact</h3>
     </a>
     <div id='about' className='aboutDiv'>
     <h3>About me</h3>
     <p>Contact Info:</p>
     </div>
     <div id='dummy' className='dummy'></div>
    </div>
  );
}

export default App;
