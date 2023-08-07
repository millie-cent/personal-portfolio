import cheetah1 from '../images/cheetah1.jpg'
import pic from '../images/me3.jpeg'
import React from 'react'
import './main.css'
import profile from '../images/me3.jpeg'
import { Html5OriginalIcon } from "react-devicons"
import { Css3OriginalIcon } from "react-devicons"
import { PythonOriginalIcon } from "react-devicons"
import { JavaOriginalIcon } from "react-devicons"
import { JavascriptOriginalIcon } from "react-devicons"
import { MysqlOriginalIcon } from "react-devicons"
import {ReactOriginalIcon} from "react-devicons"
import {COriginalIcon} from "react-devicons"
import {NodejsOriginalIcon} from "react-devicons"



export default function Main() {
    return (
      
        <div className="section1" id="about">
              <h2 id ="intro_about">About Me</h2>
            <div id = "intro_para">
            <div id="image">
                    <img src={profile}></img>
            </div>
               
                <p>
                    <h5>Name : Millicent Gyau <br/>Based: London, UK</h5>
                    Welcome to my personal portfolio! I'm a computer science student studying at Loughborough University, passionate about exploring the ever-evolving world of technology. 
                    Throughout my academic journey, I have acquired a strong foundation in computer science principles, programming languages, and problem-solving skills.

                    During my computer science journey, I have gained a diverse range of experiences that have shaped my skills and knowledge in the field.
                     I have developed expertise in programming languages such as Python, Java, and C, 
                    implementing various algorithms and data structures to solve complex problems efficiently
                </p>
             <div className ="skillCard">
                <h2>Skills</h2>
                <Html5OriginalIcon className="icon"/>
                <Css3OriginalIcon className="icon"/>
                <JavascriptOriginalIcon className="icon"/>
                <MysqlOriginalIcon className="icon"/>
                <JavaOriginalIcon className="icon"/>
                <PythonOriginalIcon className="icon"/> 
                <ReactOriginalIcon className="icon"/>
                <COriginalIcon className="icon"/>
                <NodejsOriginalIcon className="icon"/>



                
            </div>  
        </div>
           
           
      
        </div>
        
    )
}
