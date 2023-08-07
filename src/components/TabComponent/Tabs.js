import React from "react";
import { useState } from "react";
import './Tabs.css';
import ericsson from '/Users/millicentgyau/Desktop/JS_CFG/about_me/src/images/Ericsson.jpeg'
import azure from '/Users/millicentgyau/Desktop/JS_CFG/about_me/src/images/AZURE.png'
import apps from '/Users/millicentgyau/Desktop/JS_CFG/about_me/src/images/apps.png'
export default function AllTabs(){


    const [toggleState, setToggleState] =useState(1);

    const toggleTab = (index) =>{
        setToggleState(index)
    }

    return(
        
        <div className="tabContainer">
            <div className="tabsGroup">
                <div className={toggleState === 1 ? "tabs active-tabs" : "tabs"} onClick={() =>toggleTab(1)}>Ericsson</div>
                <div className={toggleState === 2 ? "tabs active-tabs" : "tabs"} onClick={() =>toggleTab(2)}>Intelance</div>
                <div className={toggleState === 3 ? "tabs active-tabs" : "tabs"} onClick={() =>toggleTab(3)}>Tab 3</div>
            </div>

            <div className="content-tabs">
                <div className={toggleState === 1 ? "content active-content" : "content"} onClick={() =>toggleTab(1)}>
                    <p>
                    Throughout the internship, I played an integral role in designing and executing automated test scenarios,
                    streamlining the validation and verification procedures for new software releases. By leveraging my programming skills,
                    I developed robust scripts and tools that not only increased the efficiency of the testing process but also significantly reduced manual errors,
                    thereby enhancing overall product reliability.
                    </p>
                    <img id = "ericsson" src ={ericsson}/>
                </div>
                <div className={toggleState === 2 ? "content active-content" : "content"} onClick={() =>toggleTab(2)}>
                    <p>
                    Throughout the internship, I played an integral role in designing and executing automated test scenarios,
                    streamlining the validation and verification procedures for new software releases. By leveraging my programming skills,
                    </p>
                    <img src ={azure}/>
                    <img src ={apps}/>
                </div>



            </div>




        </div>
    )
}