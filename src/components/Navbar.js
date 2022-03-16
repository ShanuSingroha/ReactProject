import React from 'react'
import './Navbar.css';

export default function Navbar() {
return (
    <> 
       <div className="Complete">
        <img className='Time' src = "./StatusBar/9_41.svg" alt="time"/>
        <img className="Signal" src = "./StatusBar/signal.svg" alt="signal"/>
        <img className="WifiSignal" src = "./StatusBar/wifi.svg" alt="wifi"/>
        <img className="BatteryIndicator"src = "./StatusBar/battery.svg" alt="battery"/>  
        <div className="NavBar">
        <img className="Menu" src = "./NavBar/menu.svg" alt="menu"/>
        <img className="Cart" src = "./NavBar/shopping-cart.svg" alt="shopping-cart"/>
        <img className="NotiBell" src = "./NavBar/bell.svg" alt="bell"/>
        </div>
        </div>
</>
)
}
