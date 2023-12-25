import React from 'react'
import { MailIcon, PhoneIcon, LinkedInIcon, ResumeIcon } from '../Components/Icons'
import './Contact.css'
import resume from '../assets/files/Resume.pdf'

const Contact = React.forwardRef((props, ref) => {
  return (
    <div className='contact' ref={ ref } id="contactInfo">
      <h1 className='header'>Contact</h1>
      <div className='contactBody'>
        <div className='container email'>
          <a href='mailto:musa.mazeem@gmail.com'>
            <MailIcon />
            <p>musa.mazeem@gmail.com</p>
          </a>
        </div>
        <div className='container phone'>
          <a href='tel:803-766-6154'>
            <PhoneIcon />
            <p>(803) 766-6154</p>
          </a>
        </div>
        <div className='container linkedin'>
          <a href='https://www.linkedin.com/in/mmazeem/' target="_blank">
            <LinkedInIcon />
            <p>linkedin.com/in/mmazeem</p>
          </a>
        </div>
        <div className='container resume'>
          <a href={ resume } target="_blank">
            <ResumeIcon />
            <p>Resume</p>
          </a>
        </div>
      </div>
    </div>
  )
})

export default Contact