import React from 'react'
import './About.css'
import about_pic from '../assets/about_pic.jpg'

const About = React.forwardRef((props, ref) => {
  return (
    <div className='about' ref={ ref }>
      <h1>About</h1>
      <div className='container student'>
        <h2>Student</h2>
        <p>I graduated from the University of South Carolina Honors College with a Bachelor's in Computer Engineering and a minor in Mathematics, then went on to complete a Master's in Computer Science with a focus on Artificial Intelligence in May 2025. Now, I continue to study machine learning and AI on my own, keeping up with the latest research and techniques in the field.</p>
      </div>
      <div className='container researcher'>
        <h2>Researcher</h2>
        <p>In the past I conducted research in the UofSC Computer Science department under Dr. Homayoun Valafar, working on multiple projects focused on AI in health, including human activity recognition and protein structure prediction. My work involved researching and developing neural networks for classification and prediction, as well as building the software platforms to support that research. Today, I work on projects of my own to continue exploring research questions.</p>
      </div>
      <div className='container software'>
        <h2>Software Developer</h2>
        <p>I currently work as a Full-stack Software Engineer at Cognito Forms, building features like LLM-based tools and payment integrations, and improving performance along the way. In the past, I've worked on various software projects, including the development of a RAG-based LLM chatbot and health monitoring apps for wearable devices.</p>
      </div>
      <div className='aboutPic'>
        <img src={ about_pic }></img>
      </div>
    </div>
  )
})

export default About