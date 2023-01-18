import {useState,useContext} from 'react'
import DayItem from './DayItem'

function Timing() {
const days=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday" ]


    return (
    
     <div className="week">
       {
         days.map((day)=>{
            return (
            <DayItem day={day} />
            )
         })
       }
     </div>
     
    )
  }
  
  export default Timing
  