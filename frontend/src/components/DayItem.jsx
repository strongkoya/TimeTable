import { set } from "mongoose"
import { useDrop } from "react-dnd"
import { useState } from "react"
import MatiereDay from "./MatiereDay"
import { useContext } from "react"
import {UserEmploiContext} from "../pages/Dashboard2"

function DayItem({ day }) {
  const [{isOver},drop]=useDrop(()=>({
    accept:"text/plain",
    drop:(item)=> addMatieresToDay(item),
    collect:(monitor)=>({
      isOver:!!monitor.isOver()
    })
  }))
  const matieres=useContext(UserEmploiContext)
  const [dayMatieres,setDayMatieres]=useState([])
  matieres.map((matiere)=> matiere.day=={day} ? (
    addMatieresToDay(matiere)
  ):null)
  
  const addMatieresToDay=(matiere)=>{
      setDayMatieres((dayMatieres)=>[...dayMatieres,matiere])
  }
  
    return (
      <div className='day' 
      ref={drop}>
        <h6 className="title">  {day}</h6>
        {
          dayMatieres.length > 0 ?  
          dayMatieres.map((matiere)=>{
            return(
             <MatiereDay key={matiere._id} matiere={matiere} />

            )
          }):null
        }
        
      </div>
    )
  }
  
  export default DayItem
  