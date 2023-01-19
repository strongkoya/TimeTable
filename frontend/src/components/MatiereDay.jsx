import { useDrag } from 'react-dnd'
import { useNavigate } from 'react-router-dom'


function MatiereItem({ matiere }) {
  const navigate =useNavigate()
  const [{isDragging},drag]=useDrag(()=>({
    type:"text/plain",
    item:matiere,
    collect: (monitor)=>({
      isDragging:!!monitor.isDragging(),
     
          }),
  }))

  return (
    <div  
      ref={drag}
      className='matiere-day'
      style={{backgroundColor: matiere.color,
              height: matiere.duration*(75)-5,
              display: isDragging ? "none":"flex"
            
    }}
    
    >
      <h5>{matiere.duration}</h5>
      <h4>{matiere.title}</h4>
    
      <button onClick={() => navigate('/update/'+matiere._id)
        } className='edit'>
        edit
      </button>
    </div>
  )
}

export default MatiereItem
