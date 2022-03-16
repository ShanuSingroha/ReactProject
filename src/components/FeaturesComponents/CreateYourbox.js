import React from 'react'
import "./CreateYourbox.css"

export default function CreateYourbox() {
  return (
    <>
        <div className="CreateYourBox"></div>
        <div className="CreateYourboxHeading1">
            Get your personalized period box
        </div>
        <img className="CreateYourboxImages1" src = "/content/CreateYourbox.svg" alt="" />
        <div className="CreateYourboxContent1">
            Tailor your monthly box of organic period products without the organic price tag (no pink taxing here). Get it delivered to your doorstep in sustainable packaging and track your subscription on our app. 
        </div>
        <button className="CreateYourboxButton1">
        </button>
        
        <span className='CreateYourboxButton1Info'>
            Create your box on the app
            <div>
        <img className="arrowClass" src="./footer/chevron-right.svg" alt=""></img>
        </div>
        </span>
       


    </>
  )
}
