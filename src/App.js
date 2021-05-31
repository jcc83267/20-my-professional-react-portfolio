import './App.css';
import React, { useState } from "react";
import Nav from './components/Nav';
import About from './components/About';
import Resume from './components/Resume';
import ContactForm from './components/Contact';
import Portfolio from './components/Portfolio';
import githubIcon from './assets/images/icons/github.png'
import linkedinIcon from './assets/images/icons/linkedin.png'
import stackIcon from './assets/images/icons/stack.png'


function App() {
  const [aboutSelected, setAboutSelected] = useState(true);
  const [contactSelected, setContactSelected] = useState(false);
  const [portfolioSelected, setPortfolioSelected] = useState(false);
  const [resumeSelected, setResumeSelected] = useState(false);

  const style = {
    textAlign: "center",
    padding: "20px",
    position: "fixed",
    left: "0",
    bottom:"20px",
    height: "75px",
    width: "100%",
  };

  return (
    <div>
      <Nav
        aboutSelected={aboutSelected}
        setAboutSelected={setAboutSelected}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
        portfolioSelected={portfolioSelected}
        setPortfolioSelected={setPortfolioSelected}
        resumeSelected={resumeSelected}
        setResumeSelected={setResumeSelected}
      ></Nav>
      <main>{aboutSelected 
        ? (<> <About></About> </>) 
        : (<> </>)}
        {portfolioSelected 
        ? (<> <Portfolio></Portfolio> </>) 
        : (<> </>)}
        {contactSelected 
        ? (<> <ContactForm></ContactForm> </>) 
        : (<> </>)}
        {resumeSelected 
        ? (<> <Resume></Resume> </>) 
        : (<> </>)}
      </main>
      <footer className="App" style={style}>
        <span>
        <a href="https://github.com/jcc83267" className="icons" target="_blank" rel="noreferrer">
          <img src={githubIcon} alt="Github icon with link"></img></a>
        <a href="https://www.linkedin.com/in/james-canlas-426728b7/" className="icons" target="_blank" rel="noreferrer">
          <img src={linkedinIcon} alt="linkedin icon with link"></img></a>
        <a href="https://stackoverflow.com/users/15820853/jcc83267" className="icons" target="_blank" rel="noreferrer">
          <img src={stackIcon} alt="Stackoverflow icon with link"></img></a>
        </span>
      </footer>
    </div>
  );
}

export default App;