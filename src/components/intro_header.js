import  React from "react"
import search from '../images/search-icon.png'
import pic from '../images/me.jpeg'
import './intro_header.css'
import Button from './Buttons/button'
import FileSaver from "file-saver"
import { FaDownload} from 'react-icons/fa';


export default function intro_header() {
    return (
        <div className = "home_start">
          <div className ="intro">
            <p>Heyy👋🏾 <br/>I'm <span>Millie.</span></p>
            <img id = "me" src={pic}/>
          </div>
          <a href="./MillieCV.pdf" download="MillicentGyauCV.pdf">
            <Button>
            Download CV
            <FaDownload/>
            </Button>
           
          </a>
          


         

        </div>
        
         
         
        
    )

}

