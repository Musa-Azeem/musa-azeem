import HomePic from '../assets/home_pic.jpg'
import './Home.css'

const Home = () => {
  return (
    <div className='home'>
      {/* <img src={ HomePic } className="homePic"></img> */}
      <div className="homeContainer">
        <div className="homeInnerContainer">
          <h1>Musa Azeem</h1>
          <h2>Human · Learner · Developer</h2>
        </div>
      </div>
    </div>
  )
}

export default Home