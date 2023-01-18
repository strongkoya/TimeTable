import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Header from './components/Header'
import Dashboard from './pages/Dashboard'
import Dashboard2 from './pages/Dashboard2'
import Dashboards from './pages/Dashboards'
import Login from './pages/Login'
import Register from './pages/Register'
import {DndProvider} from 'react-dnd'
import {HTML5Backend} from 'react-dnd-html5-backend'

function App() {
  return (
    <>
    <DndProvider backend={HTML5Backend}>
      <Router>
        <div className='container'>
          
          <Header />
          <Routes>
            <Route path='/' element={<Dashboard2 />} />

            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
          </Routes>
        </div>
      </Router>
      <ToastContainer />
      </DndProvider>
    </>
  )
}

export default App
