import React from 'react'
import "./TrackMood.css"

export default function TrackMood() {
  return (
    <>
    <div className='TrackMood'>
    </div>
     <div className='TrackMoodHeading1'>
        Track your mood
     </div>
     <div className='TrackMoodContent1'>
        All days and all moods are not made equal. But we can only improve what we measure. Track your mood and vitals (including skin and hair health) so you can take better care of yourself every day. 
     </div>
     <button className="TrackMoodButton1">
        <span className='TrackMoodButton1Text'>
           Track you mood on the app
        </span>
      </button>
     <div className='TrackMoodImages'>
         <img className="TrackMoodIndividualImages1" src="./content/Rectangle 194.svg" alt = "a woman smiling"></img>
         <img className="TrackMoodIndividualImages2" src="./content/Rectangle 197.svg" alt=""></img>
         <img className="TrackMoodIndividualImages3" src="./content/Rectangle 198.svg" alt = "a woman thinking"></img>
         <img className="TrackMoodIndividualImages4" src="./content/Rectangle 193.svg" alt = "a woman smiling"></img>
     </div>
    </>
  )
}
