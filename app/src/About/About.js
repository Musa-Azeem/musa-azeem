import React from 'react'
import './About.css'
import about_pic from '../assets/about_pic.jpg'

const About = React.forwardRef((props, ref) => {
  return (
    <div className='about' ref={ ref }>
      <h1>About</h1>
      <div className='container student'>
        <h2>Student</h2>
        <p>I am a Senior at the University of South Carolina Honors college, studying Computer Engineering with a minor in Mathematics. After graduation, I plan to complete an Accelerated Master's in Computer Science, with a focus on Artifical Intelligence.</p>
      </div>
      <div className='container researcher'>
        <h2>Researcher</h2>
        <p>I conduct research in the UofSC Computer Science department under Dr. Homayoun Valafar, where I work on multiple research projects with a focus on utilizing wearable technology in AI Human Activity Recognition. My work has involved the development of nueral networks (with the autoencoder architecture, in particular) to deploy on Android watches and detect smoking and eating activity. </p>
      </div>
      <div className='container software'>
        <h2>Software Developer</h2>
        <p>I work as a Software Developer Intern at SIOS Technology Corporation on the Customer Experience team. I work with the L3 team to solve customer issues and bugs with our software. Other projects I work on include developing software to parse and extract information from log files and the development of a training course for our product.</p>
      </div>
      <div className='aboutPic'>
        <img src={ about_pic }></img>
      </div>
    </div>
  )
})

export default About