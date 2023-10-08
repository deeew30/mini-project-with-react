import React, { useState } from 'react';

function Doctor() {
  const [doctor, setDoctor] = useState({
    name: 'Dr. John Doe',
    specialty: 'Cardiologist',
    contact: '123-456-7890',
  });

  const [medicalHistory, setMedicalHistory] = useState([]);
  const [newEntry, setNewEntry] = useState('');

  const handleAddEntry = () => {
    if (newEntry.trim() !== '') {
      setMedicalHistory([...medicalHistory, newEntry]);
      setNewEntry('');
    }
  };

  return (
    <div className="App">
      <h1>Doctor Profile</h1>
      <div>
        <p>Name: Dr. Smith</p>
        <p>Gender: MALE</p>
        <p>address: gdn</p>
        <p>Country: INDIA</p>
        <p>Phone no: 19781216</p>
        <p>Email:hospital@gmail.com</p>
       
      </div>

      <h2>Medical History</h2>
      <p>PATIENT NAME:Ajitem</p>
      <p>Email:ajitem@gmail.com</p>
      <p>Diagnosis:nigga</p>
      <p>Priscription:sunscream</p>

           
    </div>
    
  );
}

export default Doctor