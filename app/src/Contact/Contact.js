import React from 'react'
import './Contact.css'

const Contact = React.forwardRef((props, ref) => {
  return (
    <div className='contact' ref={ ref }>
      <h1 className='header'>Contact</h1>
    </div>
  )
})

export default Contact