import React from 'react'
import "./SelfCareProducts.css"

export default function SelfCareProducts() {
  return (
    <>
        <div className="SelfCareProducts">
        </div>
            <div className="SelfCareProductsHeading1">
                Liberate your everyday wellness 
            </div>
            <div className="SelfCareProductsHeading2">
               Shop our self-care products
            </div>
            <div className="SelfCareProductsContent1">
               Gentle formulations thoughtfully engineered by specialist researchers and doctors to simplify your self-care and get results fast. And, we always list our ingredients - so what you see is what you get.   
            </div>
           <button className="SelfCareProductsSelfCareButton">
                <span className="SelfCareProductsButtonText">
                    Upgrade your self-care
                </span>
            </button>
            <div className="SelfCareProductsContent2">
                 #NoNasties, we promise!
            </div>
            <img className="SelfCareProductsImage" src = "./content/pexels-karolina-grabowska-4041391.svg" alt = "SelfCareProductImage" ></img>
            
    </>
  )
}
