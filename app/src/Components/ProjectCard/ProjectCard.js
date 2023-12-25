import { React, useState, useEffect, useRef } from "react"
import { GithubIcon, LinkIcon } from '../Icons'
import './projectCard.css'

const maxHeight = 160;

const ProjectCard = ({ project }) => {
  
  const [isHover, setIsHover] = useState(false);
  const [height, setHeight] = useState('')
  const [mobileClicked, setMobileClicked] = useState(false)
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600)
  const backRef = useRef(null)
  
  if (project.title === 'Smartwatch Smoking Recognition') {
    console.log(project.title + 'rerender ' + mobileClicked)
  }
  
  const updateSize = () => {
    setIsMobile(window.innerWidth <= 600)
    
    if ((isHover && !isMobile) || mobileClicked) {
      setHeight(`${20+backRef.current.clientHeight}px`)
    }
    else {
      // if (25vh less than 160px) -> 25vh, else -> 160px
      setHeight(25*(0.01*window.innerHeight) <= maxHeight ? '25vh' : `${maxHeight}px`)
    }
  }

  useEffect(() => {
    window.addEventListener('resize', updateSize);
    updateSize();
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  
  useEffect(() => {
    updateSize()
  }, [isHover, mobileClicked])

  const mobileTransform = () => {
    if (!isMobile) {
      return {}
    }
    else {
      return mobileClicked ? {transform: 'rotateY(180deg)'} : {transform: 'none'}
    }
  }

  return (
    <div className="projectCard"
      onMouseEnter={() => { setIsHover(true)} }
      onMouseLeave={() => { setIsHover(false)} } 
      onClick={ () => { setMobileClicked(isMobile ? !mobileClicked : false)}}
      style = { {height: height} }
    >
      <div className="innerProjectCard" style={ mobileTransform() }>
        <div className="projectCardFront">
          <div className="projectCardImg">
            <img src={ project.image } alt={ "Image for " + project.title }></img>
          </div>
          <h1>{ project.title }</h1>
        </div>
        <div className="projectCardBack">
          <div ref={ backRef }>
            <p>{ project.description }</p>
            <div className="iconsList">
              <a href={ project.projectURL } target="_blank">
                <GithubIcon />
              </a>
              { project.extraLink &&
                <a href={ project.extraLink } target="_blank">
                  <LinkIcon />
                </a>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard