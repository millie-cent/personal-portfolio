import  React from "react"
import search from '../images/search-icon.png'
import './header.css';
import ReactDOM from 'react-dom'
import { FaLinkedin,FaGithub,FaGoogle, FaDiscord} from 'react-icons/fa';


export default function Header() {
    return (
       <header>

      <div className ="icons">
           <a href="https://www.linkedin.com/in/millie-gyau-70pi">
              <FaLinkedin/>
           </a>
           <a href='https://github.com/millie-cent'>
              <FaGithub />
           </a>
           <a href="mailto:milliegyau7@gmail.com">
              <FaGoogle/>
           </a>
           <a>
              <FaDiscord/>
           </a>
        </div>

        <div className="logo">
          <h1><a href = "/">MILLIE'S<span>SITE</span></a></h1>
        </div>

        <nav>
          <a href="/main"><li>About</li></a>
          <a href="/experience"><li>Experience</li></a>
          <a href=""><li>Projects</li></a>
          <a href=""><li>Contact</li></a>
        </nav>

       

        
      </header>

    )

}