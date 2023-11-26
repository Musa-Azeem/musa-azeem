import React, { useState, useEffect, useRef } from 'react'
import ProjectCard from '../Components/ProjectCard/ProjectCard'
import config from '../config'
import './Projects.css'

const { projectsList } = { ...config }

const Projects = React.forwardRef((props, ref) => {

  return (
    <div className="projects" ref={ ref }>
      <h1 className='header'>Projects</h1>

      <div className="projectsBody">   
        {/* Create a Project Card for each project in config */}
        { 
          projectsList.map((p, i) => (
            <ProjectCard 
              key={ i } 
              project={ p }
            />
          ))
        }
      </div>
    </div>
  )
})

export default Projects