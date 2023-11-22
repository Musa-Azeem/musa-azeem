import HomePic from '../assets/home_pic.jpg'
import './Home.css'

const Home = () => {
  return (
    <section className='home'>
      <img src={ HomePic } className='homePic' alt='me again'></img>
    </section>
  )
}

export default Home