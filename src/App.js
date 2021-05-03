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

  var style = {
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
        <span>Github </span>
        <span>LinkedIn</span>
        </span>
      </footer>
    </div>
  );
}

export default App;