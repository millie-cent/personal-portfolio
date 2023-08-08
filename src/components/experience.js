import React from 'react'
import './experience.css'
import AllTabs from './Tabs'


export default function experience() {

    const cardBlocks = document.querySelectorAll(".cards");

    cardBlocks.forEach((cardBlock) => {
    cardBlock.style.paddingBottom = `${Math.max(cardBlock.children.length, 1)}em`;

    Array.from(cardBlock.children).forEach(
    (card, i) => (card.style.transform = `translateY(${i}em)`)
  );
});
    return (
        <div className="section2" id="main2">
            <h3 id ="head1">Experience</h3>

            <div id ='intro_exp'>


                <div id>
                    <AllTabs/>
                </div>
                
            </div>
            
        </div>
        
    )
}