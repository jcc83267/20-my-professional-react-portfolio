import './App.css';
import React, { useState } from "react";
import Nav from './components/Nav';
import About from './components/About';
import Resume from './components/Resume';
import ContactForm from './components/Contact';
import Portfolio from './components/Portfolio';


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
    bottom: "0",
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
        <a href="https://github.com/jcc83267" target="_blank" rel="noreferrer">Github </a>
        <a href="https://www.linkedin.com/in/james-canlas-426728b7/" target="_blank" rel="noreferrer">LinkedIn </a>
        <a href="https://stackoverflow.com/users/15820853/jcc83267" target="_blank" rel="noreferrer">stackoverflow </a>
        </span>
      </footer>
    </div>
  );
}

export default App;