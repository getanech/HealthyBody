import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Login from './pages/Login'
import { Route, Routes } from 'react-router-dom'
import Register from './pages/Register'
import Main from './pages/MainManu/Main'


function App() {

  

  return (
    <div className='mainAppContainer'>
      {/* <Header /> */}
      <div className='bodyContainer'>
      <Routes>
        <Route path='/' element={<Main/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register />} />
        
      </Routes>
      </div>
      <Footer />
    </div>
  )
}
export default App
