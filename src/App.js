import React from 'react'
import Introduction from './components/Introduction'
import Features from './components/Features'
import Footer from './components/Footer'
import Navbar from './components/Navbar'


export default function App() {
  return (
    <>
    <div style={{backgroundColor: "#E5E5E5"}}> 
    <Introduction/>
    <Features/>
    {/* <Footer/> */}
    </div>

    </>
  )
}

