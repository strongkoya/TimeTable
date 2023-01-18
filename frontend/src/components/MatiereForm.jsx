import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createMatiere } from '../features/matieres/matiereSlice'

function MatiereForm() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [duration, setDuration] = useState(1)
  const [color, setColor] = useState("#6e3172")
  const [code,setCode]=useState('')

  const dispatch = useDispatch()

  const onSubmit = (e) => {
    e.preventDefault()

    dispatch(createMatiere({ title,description,duration,color,code }))
    setTitle('')
    setDescription('')
    setDuration(1)
    setColor(null)
    setCode('')
  }
  const handleDuration =(e)=>{
    let val = parseInt(e.target.value)
    if(val>0)
    setDuration(e.target.value)
    else
    setDuration(1)
  }

  return (
    <section className='form'>
      <form onSubmit={onSubmit}>
        
        <div className='form-group'>
          <label htmlFor='title'>Matiere</label>
          <input
            type='text'
           id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        
        <div className='form-group'>
          <label htmlFor='description'>Description</label>
          <textarea
            type='text'
           
            id='description'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>

        
        <div className='form-group'>
          <label htmlFor='duration'>Duration</label>
          <input
            type='number'
           id="duration"
            value={duration}
            onChange={(e) => handleDuration(e) }
          />
          
        </div>

        <div className='form-group'>
          <label htmlFor='code'>Code</label>
          <input
            type='text'
           id="code"
            value={code}
            onChange={(e) => setCode(e.target.value) }
          />
          
        </div>

        
        <div className='form-group'>
        
          <label for="color">
          Color:<p style={{backgroundColor:color}} >{color}</p>
          </label>
          <input 
            className='indisplayed'
            type='color'
            id="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          
          />
  </div>
        
        <div className='form-group'>
          <button className='btn btn-block' type='submit'>
            Add Matiere
          </button>
        </div>
      </form>
    </section>
  )
}

export default MatiereForm
