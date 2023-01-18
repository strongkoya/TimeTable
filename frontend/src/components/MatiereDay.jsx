import { useDispatch } from 'react-redux'
import { useDrag } from 'react-dnd'
import { deleteMatiere } from '../features/matieres/matiereSlice'




function MatiereItem({ matiere }) {
  const dispatch = useDispatch()
  const [{isDragging},drag]=useDrag(()=>({
    type:"text/plain",
    item:{matiere},
    collect: (monitor)=>({
      isDragging:!!monitor.isDragging(),
    }),
  }))
  return (
    <div  
      ref={drag}
      className='matiere-day'
      style={{backgroundColor: matiere.color,
              height:matiere.duration * 100
    }}
    
    >
      <h5>{matiere.duration}</h5>
      <h4>{matiere.title}</h4>
    
      <button onClick={() => dispatch(deleteMatiere(matiere._id))} className='edit'>
        x
      </button>
    </div>
  )
}

export default MatiereItem
