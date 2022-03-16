import React from 'react'
import './Navbar.css';

export default function Navbar() {

  return (
    <>
    <div className='Complete'>
        <div className="UpperHalf">
            <div className="Time UpperHalf">
                <img src = "./StatusBar/9_41.svg" alt="time"/>
            </div>
            <div className="Signal UpperHalf RightUpperHalf">
                <img src = "./StatusBar/signal.svg" alt="signal"/>
            </div>
            <div className="WifiSignal  UpperHalf RightUpperHalf">
               <img src = "./StatusBar/wifi.svg" alt="wifi"/>
            </div>
            <div className="BatteryIndicator  UpperHalf RightUpperHalf">
               <img src = "./StatusBar/battery.svg" alt="battery"/>
            </div>
        </div>
        <div className="LowerHalf">
        <div className="LowerHalf Menu">
            <img src = "./NavBar/menu.svg" alt="menu"/>
        </div>
        <div className="LowerHalf Cart">
             <img src = "./NavBar/shopping-cart.svg" alt="shopping-cart"/>
        </div>
        <div className="LowerHalf NotiBell">
             <img src = "./NavBar/bell.svg" alt="bell"/>

        </div>



        </div>
    </div>
    
    
    
    
    </>
  )
}
