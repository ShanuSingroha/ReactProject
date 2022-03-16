import React from 'react'
import "./SelfCareProducts.css"
export default function SelfCareProducts() {
  return (
    <>
        <div className="SelfCareProducts">
        </div>
            <div className="Heading1">
                Liberate your everyday wellness 
            </div>
            <div className="Heading2">
               Shop our self-care products
            </div>
            <div className="Content1">
               Gentle formulations thoughtfully engineered by specialist researchers and doctors to simplify your self-care and get results fast. And, we always list our ingredients - so what you see is what you get.   
            </div>
           <button className="SelfCareButton">
                <span className="ButtonText">
                    Upgrade your self-care
                </span>
            </button>
            <div className="Content2">
                 #NoNasties, we promise!
            </div>
            <img className="SelfCareImage" src = "./content/pexels-karolina-grabowska-4041391.svg" alt = "SelfCareProductImage" ></img>
            
    </>
  )
}
