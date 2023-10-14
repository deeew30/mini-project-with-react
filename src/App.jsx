import { useState } from 'react' 
import './App.css'
import Patie from './assets/patie'
import Doctor from './assets/doctor'
import CustomNavbar from './components/CustomNavbar'


import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout'
import Home from './assets/Home'
import Login from './assets/Login'
import Register from './assets/Register'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   
   
   <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayout/>}>
          <Route index element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/patient' element={<Patie/>}/>
          <Route path='/doctor' element={<Doctor/>}/>
          <Route path='/register' element={<Register/>}/>

        </Route>
      </Routes>
      
    </BrowserRouter>
   </>
  );
}

export default App

