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
        <p>Name: {doctor.name}</p>
        <p>Specialty: {doctor.specialty}</p>
        <p>Contact: {doctor.contact}</p>
      </div>

      <h2>Medical History</h2>
      <div>
        <textarea
          rows="4"
          cols="50"
          placeholder="Add medical history entry"
          value={newEntry}
          onChange={(e) => setNewEntry(e.target.value)}
        ></textarea>
        <button onClick={handleAddEntry}>Add Entry</button>
      </div>

      <div>
        {medicalHistory.map((entry, index) => (
          <div key={index}>
            <p>{entry}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Doctor