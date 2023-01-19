import { useState ,useEffect} from 'react'
import { useDispatch ,useSelector} from 'react-redux'
import { useParams,useNavigate} from 'react-router-dom'
import { getMatieres,deleteMatiere, reset } from '../features/matieres/matiereSlice'


function UpdateMatiere() {
    const params = useParams();
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { user } = useSelector((state) => state.auth)
    const { matieres, isLoading, isError, message } = useSelector(
    (state) => state.matieres
  )
 

  useEffect(() => {

    if (isError) {
      console.log(message)
    }

    if (!user) {
      navigate('/login')
    }

    dispatch(getMatieres())
  

    return () => {
      dispatch(reset())
    }
   
    
    
  }, [user, navigate, isError, message, dispatch])

  const onSubmit = (e) => {
    e.preventDefault()
    //dispatch(deleteMatiere(myMatiere._id))
    //dispatch(createMatiere({ title:title,description:description,duration:duration,color:color,code:code,day:"null",time:"null"}))
    //Navigation
  }
  const handleDuration =(e)=>{
    let val = parseInt(e.target.value)
    if(val>0)
    setDuration(e.target.value)
    else
    setDuration(1)
  }


  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [duration, setDuration] = useState('')
  const [color, setColor] = useState('')
  const [code,setCode]=useState('')

  


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
            Update Matiere
          </button>
        </div>
      </form>
    </section>
  )
 
}

export default UpdateMatiere
