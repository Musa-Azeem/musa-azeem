import './App.css';
import { useEffect, useState, useRef } from 'react'
import SideNav from './Components/SideNav/SideNav'
import Home from './Home/Home'
import About from './About/About'

function App() {
  const homeRef = useRef()
  const aboutRef = useRef()

  const refs = [homeRef, aboutRef]

  var currentPage = useRef()
  const [test, setTest] = useState('first')

  useEffect(() => {
    const handleScroll = () => {
      refs.forEach((ref) => {
        if (!ref.current) 
          return
        const middle = ref.current.getBoundingClientRect().top + window.innerHeight / 2
        if (middle >= 0 && middle <= window.innerHeight)
          currentPage = ref
        setTest(prevTest => 'new')
        console.log(test)
      })
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, []);

  return (
    <div className="App">
      <SideNav 
        currentPage={ currentPage }
        homeRef={ homeRef } 
        aboutRef={ aboutRef }
      />
      <div className="main" onScroll={ handleScroll }>
        <Home ref={ homeRef } />
        <About ref={ aboutRef } />
      </div>
    </div>
  );
}

export default App;
