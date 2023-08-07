import React from 'react'
import library from '../images/library-mng.jpeg'
import list from '../images/to-do-screen.jpeg'
import './cards.css'

export default function Facts() {


const facts = [
    {
        title: 'To-do List',
        image: list,
        description: 'Create with Java. '
    },
            {
            title: 'Library Management System',
            image: library,
            description: 'Created in Python.'
            }
          
      ];
    return(
        <div className = "fact-sheet">
        <div className="fact-cards">
        {facts.map((fact, index) => (
          <div className="fact-card" key={index}>
            <img src={fact.image}></img>
            <h2>{fact.title}</h2>
            <p>{fact.description}</p>
          </div>
        ))}
      </div>
      </div>
    )
}


