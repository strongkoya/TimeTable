import {  useDispatch } from 'react-redux'
import MatiereItem from '../components/MatiereItem'
import { createMatiere,deleteMatiere } from '../features/matieres/matiereSlice'
import { useDrop } from 'react-dnd'
import { useNavigate } from 'react-router-dom'

function ListMatieres({matieres}) {
  const dispatch = useDispatch()
  const navigate=useNavigate()
  const days=["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday" ]
  
  const [{isOver},drop]=useDrop(()=>({
    accept:"text/plain",
    drop:(item)=> {RemoveMatieresToDays(item)},
    collect:(monitor)=>({
      isOver:!!monitor.isOver()
    })
  }))
  
  const RemoveMatieresToDays=(matiere)=>{
    const title = matiere.title
    const description = matiere.description
    const duration = matiere.duration
    const color = matiere.color
    const code = matiere.code 
    dispatch(deleteMatiere(matiere._id))
    dispatch(createMatiere({ title:title,description:description,duration:duration,color:color,code:code,day:"null",time:"null"}))
  }
 
return(
<div className='matieres' 
          ref={drop}>

    <button onClick={ ()=>navigate('/add')} className="btn-add">
      +
    </button>

            {matieres.map((matiere) => {
              if(!days.includes(matiere.day))
                return(
              <MatiereItem key={matiere._id} matiere={matiere} />
                )
            }
            )}
          </div>
          )
        }
        export default ListMatieres