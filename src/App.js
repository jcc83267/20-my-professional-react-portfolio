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
      <main>
        {contactSelected 
        ? (<> <ContactForm></ContactForm> </>) 
        : (<> </>)}
        {aboutSelected 
        ? (<> <About></About> </>) 
        : (<> </>)}
        {portfolioSelected 
        ? (<> <Portfolio></Portfolio> </>) 
        : (<> </>)}
        {resumeSelected 
        ? (<> <Resume></Resume> </>) 
        : (<> </>)}

      </main>
      <footer className="App">
        <span></span>
        <span></span>
        <span></span>
      </footer>
    </div>
  );
}

export default App;