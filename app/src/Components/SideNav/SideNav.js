import head from '../../assets/head.jpg'
import resume from '../../assets/Resume.pdf'
import { LinkedInIcon, GithubIcon, MailIcon, ResumeIcon, HouseIcon, PersonIcon, CodeIcon } from '../Icons'


const SideNav = ({ homeRef, aboutRef, projectsRef, contactRef}) => {

  const scrollToRef = (ref) => {
    if (ref && ref.current) {
      ref.current.scrollIntoView({behavior: "smooth"})
    }
  }

  return (
    <section className="sidenav">
      <div className="container">
        <img src={ head } className="pfp" alt="me"></img>
      </div>
      <div className="container">
        <h1>Musa Azeem</h1>
      </div>

      <div className="container">
        <a href="https://linkedin.com/in/mmazeem" target="_blank">
          <LinkedInIcon />
        </a>
        <a href="https://github.com/Musa-Azeem" target="_blank">
          <GithubIcon />
        </a>
        <a href="#"  // TODO fix
          onClick={(e) => {
            window.location.href = "musa.mazeem@gmail.com";
            e.preventDefault();
          }}
        >
          <MailIcon />
        </a>
        <a href={ resume } target="_blank">
          <ResumeIcon />
        </a>
      </div>

      <hr className="navdivider"></hr>

      <ul className="navlinks">
        <li>
          <HouseIcon />
          <h1>Home</h1>
        </li>
        <li><div className="nav-link">
          <PersonIcon />
          <h1 onClick={ () => scrollToRef(aboutRef) }>About</h1>
        </div></li>
        <li><div className="nav-link">
          <CodeIcon />
          <h1 onClick={ () => scrollToRef(projectsRef) }>Projects</h1>
        </div></li>
      </ul>
    </section>
  )
}

export default SideNav