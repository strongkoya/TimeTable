import { useEffect, useState,useContext, createContext} from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import MatiereForm from '../components/MatiereForm'
import MatiereItem from '../components/MatiereItem'
import Spinner from '../components/Spinner'
import { getMatieres, reset } from '../features/matieres/matiereSlice'
import Timing from '../components/Timing'

export const UserEmploiContext =createContext()

function Dashboard2() {
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

  if (isLoading) {
    return <Spinner />
  }
  
  
  return (
    <>
    
      <section className='heading'>
        <h1>Welcome {user && user.name}</h1>
      </section>
      
      <section className='content'>
        <div>
        {matieres.length > 0 ? (
          <div className='matieres'>
            {matieres.map((matiere) => (
                
              <MatiereItem key={matiere._id} matiere={matiere} />
            ))}
          </div>
        ) : (
          <h3>You have not set any matieres</h3>
        )}
        </div>
        <div >
            <UserEmploiContext.Provider value={matieres}>
                <Timing />
            </UserEmploiContext.Provider>
        </div>




      </section>
      <MatiereForm/>
    </>
  ) 
}

export default Dashboard2
