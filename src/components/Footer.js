import React from 'react'
import "./Footer.css"

export default function Footer() {
return (
<>
<div className="Footer" > 
</div>
<img className="FacebookLogo" src = "./footer/facebook.svg" alt="fblogo"/>
<img className="TwitterLogo"  src = "./footer/twitter.svg" alt="twitterlogo"/>

<ul>
    <li className='FooterLinkColItem1'>  
  <span>Products 
  <div>
    <img className="arrowClassFooter1" src="./footer/chevron-right.svg" alt=""></img>
    </div>
    </span> 
    </li>
    <li className='FooterLinkColItem2'>
    <span>Our Science
    <div>
    <img className="arrowClassFooter2" src="./footer/chevron-right.svg" alt=""></img>
    </div>
      </span> 
    </li>
    <li className='FooterLinkColItem3'> 
    <span>Vision & Mission
    <div>
    <img className="arrowClassFooter3" src="./footer/chevron-right.svg" alt=""></img>
    </div>
      </span> 
    </li>
    <li className='FooterLinkColItem4'> 
    <span>About Us
    <div>
    <img className="arrowClassFooter4" src="./footer/chevron-right.svg" alt=""></img>

    </div>
      </span> 
    </li>
</ul>
<div className="FooterHrLine">
</div>
<span className="FooterLine1">Subscribe to our Newsletter
</span>
<div className="FooterLine2"></div>
<span className="FooterLine3">Enter your email...</span>
<button className="FooterLineButton1"></button>
<img className='Button1Icon' src="./Footer/mail.svg" alt=""></img>
<span className='Button1InfoText'>Activate</span>


</>
)
}
