import { React, useState, useEffect, useRef } from "react"
import { GithubIcon, LinkIcon } from '../Icons'
import './projectCard.css'

const maxHeight = 160;

const ProjectCard = ({ project }) => {

  const [isHover, setIsHover] = useState(false);
  const [height, setHeight] = useState('')
  const backRef = useRef(null)

  const updateSize = () => {
    if (isHover) {
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
  }, [isHover])

  return (
    <div className="projectCard" 
      onMouseEnter={() => { setIsHover(true)} }
      onMouseLeave={() => { setIsHover(false)} } 
      style = { {height: height} }
    >
      <div className="innerProjectCard">
        <div className="projectCardFront">
          <img src={ project.image } alt={ "Image for " + project.title }></img>
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