import React from 'react'

export default function Introduction() {
  return (
    <>
    <div className='IntroComplete'>
        <div className="IntroHeading1">
           About Diana
        </div>
        <div className="IntroTagline">
           A platform that looks out for you
        </div>
        <div className="IntroContent3">
           Diana empowers you to understand how your body works so you can look and feel your best. 
        </div>
        <div className="IntroHorizontalLine">
            <hr/>
        </div>
        <div className="IntroHeading2">
          Our Philosophy
        </div>
        <div className="IntroContent1">
          Sustainable wellness is a big-picture, inside out approach
        </div>
        <div className="IntroContent2 ">
        Diana is on a mission to create thoughtful, science-backed solutions for women who want to make informed decisions about their health and wellness. 
        <br></br>
        That's why we've created an integrated ecosystem of:
        </div>
        <div className="IntroIcons">
            <img src = "./Intro/IntroIcon1.svg" alt="icon1"/>
        </div>
        <div className="IntroIconsDescription">
            Consciously formulated products that deliver feel-good results fast
        </div>
        <div className="IntroIcons">
             <img src = "./Intro/IntroIcon2.svg" alt="icon2"/>     
        </div>
        <div className="IntroIconsDescription">
           In-app mood and period tracking options that help you cultivate a deeper connection with your mind and body
        </div>
        <div className="IntroIcons">
         <img src = "./Intro/IntroIcon3.svg" alt="icon3"/> 
        </div>
        <div className="IntroIconsDescription">
           In-app consultation portals that connect you with compassionate wellness experts
        </div>
        <div className="IntroIconsDescription">
           Consider us your nerdy ally who spends their time perfecting products that work because they want you to feel your best everyday.
        </div>
    </div>


    </>
  )
}
