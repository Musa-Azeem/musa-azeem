import head from '../../assets/head.jpg'
import resume from '../../assets/files/Resume.pdf'
import './SideNav.css'
import { InstaIcon, LinkedInIcon, GithubIcon, MailIcon, ResumeIcon, HouseIcon, PersonIcon, CodeIcon } from '../Icons'
import { useState, useEffect, useRef } from 'react'


const SideNav = ({ homeInViewObj, aboutInViewObj, projectsInViewObj, contactInViewObj}) => {
  const { homeRef, homeInView, homeEntry } = homeInViewObj
  const { aboutRef, aboutInView, aboutEntry } = aboutInViewObj
  const { projectsRef, projectsInView, projectsEntry } = projectsInViewObj
  const { contactRef, contactInView, contactEntry } = contactInViewObj

  const [justClicked, setJustClicked] = useState(false)

  const [currentPageClassName, setCurrentPageClassName] = useState('home')
  

  useEffect(() => {
    if (justClicked)
      return

    if (homeInView)
      setCurrentPageClassName('home')
    else if (aboutInView)
      setCurrentPageClassName('about')
    else if (projectsInView)
      setCurrentPageClassName('projects')
    else if (contactInView)
      setCurrentPageClassName('contact')
  }, [homeInView, aboutInView, projectsInView, contactInView])

  const scrollToRef = (ref, className) => {
    setJustClicked(true)
    setCurrentPageClassName(className)
    if (ref) {
      ref.scrollIntoView({behavior: "smooth"})
    }
    setTimeout(() => {
      setJustClicked(false)
    }, 500); // 500 ms = 0.5 s
  }

  const getContainerClassName = (className) => {
    return currentPageClassName == className ? 'container current' : 'container'
  }

  return (
    <section className="sidenav">
      <div className="container">
        <img src={ head } className="pfp" alt="me"></img>
      </div>
      <div className="container">
        <h1>Musa Azeem</h1>
      </div>

      <div className="container">
        <a href="https://instagram.com/musa_azm_/" target="_blank">
          <InstaIcon />
        </a>
        <a href="https://linkedin.com/in/mmazeem" target="_blank">
          <LinkedInIcon />
        </a>
        <a href="https://github.com/Musa-Azeem" target="_blank">
          <GithubIcon />
        </a>
        <a href={ resume } target="_blank">
          <ResumeIcon />
        </a>
      </div>

      <div className="navdivider"></div>


      <div className="timeline">
        <div className={ getContainerClassName('home') } onClick={ () => scrollToRef(homeEntry.target, 'home') }>
          <h2>Home</h2>
        </div>
        <div className={ getContainerClassName('about') } onClick={ () => scrollToRef(aboutEntry.target, 'about') }>
          <h2>About</h2>
        </div>
        <div className={ getContainerClassName('projects') }  onClick={ () => scrollToRef(projectsEntry.target, 'projects') }>
          <h2>Projects</h2>
        </div>
        <div className={ getContainerClassName('contact') }  onClick={ () => scrollToRef(contactEntry.target, 'contact') }>
          <h2>Contact</h2>
        </div>
      </div>
    </section>
  )
}

export default SideNav