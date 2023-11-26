import './App.css';
import { useEffect, useState, useRef } from 'react'
import SideNav from './Components/SideNav/SideNav'
import Home from './Home/Home'
import About from './About/About'
import Projects from './Projects/Projects'
import Contact from './Contact/Contact'
import { useInView } from 'react-intersection-observer';

function App() {
  const [homeRef, homeInView, homeEntry] = useInView({threshold: 0.5})
  const [aboutRef, aboutInView, aboutEntry] = useInView({threshold: 0.5})
  const [projectsRef, projectsInView, projectsEntry] = useInView({threshold: 0.5})
  const [contactRef, contactInView, contactEntry] = useInView({threshold: 0.5})

  return (
    <div className="App">
      <SideNav 
        homeInViewObj={ {homeRef, homeInView, homeEntry} }
        aboutInViewObj={ {aboutRef, aboutInView, aboutEntry} }
        projectsInViewObj={ {projectsRef, projectsInView, projectsEntry} }
        contactInViewObj={ {contactRef, contactInView, contactEntry} }
      />
      <div className="main">
        <Home ref={ homeRef } />
        <About ref={ aboutRef } />
        <Projects ref={ projectsRef } />
        <Contact ref={ contactRef } />
      </div>
    </div>
  );
}

export default App;
