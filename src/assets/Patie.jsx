import { useState } from 'react'

function Patie() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <div className="patient-profile">
    <h2>Patient Profile</h2>
    <p>Name: patientData.name</p>
    <p>Date of Birth: patientData.dateOfBirth</p>
    <p>Blood Group: patientData.bloodGroup</p>
    <p>Sex: patientData.sex</p>
  </div>
  </div>
)
  }export default Patie