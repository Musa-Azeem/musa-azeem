import React from 'react'
import HomePic from '../assets/home_pic.jpg'
import './Home.css'

const Home = React.forwardRef((props, ref) => {
  return (
    <div className='home' ref={ ref }>
      <div className="homeContainer">
        <div className="homeInnerContainer">
          <h1>Musa Azeem</h1>
          <h2>Human · Learner · Developer</h2>
        </div>
      </div>
    </div>
  )
})

export default Home