import head from '../../assets/head.jpg'
import resume from '../../assets/Resume.pdf'
import './SideNav.css'
import { InstaIcon, LinkedInIcon, GithubIcon, MailIcon, ResumeIcon, HouseIcon, PersonIcon, CodeIcon } from '../Icons'
import { useState, useEffect, useRef } from 'react'


const SideNav = ({ currentPage, homeRef, aboutRef, projectsRef, contactRef}) => {

  const [currentPageClassName, setCurrentPageClassName] = useState('home')

  const scrollToRef = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({behavior: "smooth"})
    }
  }

  useEffect(() => {
    if (currentPage.current) {
      setCurrentPageClassName(currentPage.current.className)
    }
    console.log(currentPage)
    console.log(currentPageClassName)
  }, [currentPage])

  const getContainerClassName = (className) => {
    return currentPageClassName == className ? 'container current' : 'container'
    // if (!currentPage.current) {
    //   console.log('home and no current')
    //   return className == 'home' ? 'container current' : 'container'}
    // if (currentPage.current.className == className) {
    //   console.log(`current and ${className}`)
    //   return 'container current'}
    // console.log('none')
    // return 'container'
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
        <a href="mailto: abc@example.com" target="_blank">
          <MailIcon />
        </a>
        <a href={ resume } target="_blank">
          <ResumeIcon />
        </a>
      </div>

      <div className="navdivider"></div>


      <div className="timeline">
        <div className={ getContainerClassName('home') } onClick={ () => scrollToRef(homeRef) }>
          <h2>Home</h2>
        </div>
        <div className={ getContainerClassName('about') } onClick={ () => scrollToRef(aboutRef) }>
          <h2>About</h2>
        </div>
        <div className={ getContainerClassName('projects') }  onClick={ () => scrollToRef(projectsRef) }>
          <h2>Projects</h2>
        </div>
        <div className={ getContainerClassName('contact') }  onClick={ () => scrollToRef(contactRef) }>
          <h2>Contact</h2>
        </div>
      </div>
    </section>
  )
}

export default SideNav