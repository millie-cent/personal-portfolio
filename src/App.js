
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './components/main.js'
import Header from './components/header.js'
import Intro from './components/intro_header.js'
import React from 'react'
import Contact from './components/contact_form';
import Experience from './components/experience.js'
import Projects from './components/projects';

import Button from './components/Buttons/button.js'



function App() {

  return (
    <div className="App">

        <Header />
        <section>
          <Intro/>
        </section>
       
        <section>
          <Main/>
        </section>
        <hr/>
        <section>
          <Experience/>
        </section>
        <hr/>
        <section>
          <Projects/>
        </section>
       <section>
        <Contact/>
       </section>

      
      

     
    </div>
   

  );
}

export default App;
