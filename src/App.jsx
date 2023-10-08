import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Patie from './assets/patie'
import Doctor from './assets/doctor'
import CustomNavbar from './components/CustomNavbar'


import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout'
import Home from './assets/Home'
import Login from './assets/Login'

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
          {/* <Route path='/login' element={<Login/>}/> */}
        </Route>
      </Routes>
      
    </BrowserRouter>
   </>
  );
}

export default App
