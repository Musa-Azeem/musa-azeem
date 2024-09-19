import React from 'react'
import './About.css'
import about_pic from '../assets/about_pic.jpg'

const About = React.forwardRef((props, ref) => {
  return (
    <div className='about' ref={ ref }>
      <h1>About</h1>
      <div className='container student'>
        <h2>Student</h2>
        <p>I am a recent graduate from the University of South Carolina Honors college, where I studied Computer Engineering with a minor in Mathematics. I am now pursuing a Master's in Computer Science, with a focus on Artifical Intelligence. I plan to graduate in May 2025.</p>
      </div>
      <div className='container researcher'>
        <h2>Researcher</h2>
        <p>I conduct research in the UofSC Computer Science department under Dr. Homayoun Valafar, where I work on multiple research projects with a focus on AI in health, including <i>human activity recognition</i> and <i>protein structure prediction</i>. My work has involved research and development of neural networks for classification and prediction, as well as the development of multiple software platforms. </p>
      </div>
      <div className='container software'>
        <h2>Software Developer</h2>
        <p>I work as a Software Developer Intern at SIOS Technology Corporation, where I develop AI solutions. I lead the development of a RAG-based LLM Chatbot for internal use and customer support. Other projects I work on include developing software to parse and extract information from log files and the development of a training course for our product.</p>
      </div>
      <div className='aboutPic'>
        <img src={ about_pic }></img>
      </div>
    </div>
  )
})

export default About