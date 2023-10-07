import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Patie from './assets/patie'
import Doctor from './assets/doctor'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <Patie></Patie>
   <Doctor></Doctor>
   </>
  );
}

export default App
