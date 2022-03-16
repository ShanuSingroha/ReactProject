import React from 'react'

export default function Footer() {
  return (
    <>
    <div className="Footer" > 
        <div className="FooterLogo">
            <img src = "./footer/facebook.svg" alt="fblogo"/>
            <img src = "./footer/twitter.svg" alt="twitterlogo"/>
        </div>
        <div className="FooterLinkCol">
            <ul>
                <li className='FooterLinkColItem'>  
                <span>Products</span> <img src='./footer/chevron-right.svg' alt = ""/>
                 </li>
                <li className='FooterLinkColItem'>
                <span>Our Science</span> <img src='./footer/chevron-right.svg' alt = ""/>
                  </li>
                <li className='FooterLinkColItem'> 
                <span>Vision & Mission</span> <img src='./footer/chevron-right.svg' alt = ""/>
                  </li>
                <li className='FooterLinkColItem'> 
                <span>About Us</span> <img src='./footer/chevron-right.svg' alt = ""/>
                 </li>

            </ul>
        </div>
        <div className="FooterHrLine">
            <hr/>
        </div>
        <div className="FooterLine">
            
        </div>







    </div>
    
    
    </>
  )
}
