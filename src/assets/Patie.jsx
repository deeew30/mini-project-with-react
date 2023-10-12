import PatientProfile from "../components/PatientProfile";
import CustomizedTables from "../components/CustomizedTables";
import "./Patie.css"
import { useEffect, useState } from 'react';
import { useUserContext } from "../contexts/userContext";
import axios from "axios";

function Patie() {
  const [count, setCount] = useState(0);
  const {user, setUser} = useUserContext();
  console.log("user");
  console.log(user)
  const patientData = {
    name: 'John Doe',
    age: '33',
    dateOfBirth: '1990-01-01',
    bloodGroup: 'A+',
    sex: 'Male',
    Bmi: 25.0, // You can add BMI here if needed
  };

  const medicalHistory = [
    {
      day: 'Monday',
      date: '2023-10-09',
      doctor: 'Dr. Smith',
      diagnosis: 'Fever',
      prescription: 'Take rest and drink plenty of fluids',
    },
    {
      day: 'Tuesday',
      date: '2023-10-10',
      doctor: 'Dr. Johnson',
      diagnosis: 'Cough and Cold',
      prescription: 'Take cough syrup and rest',
    },
    // Add more medical history entries here
  ];

  

  return (
    <div>
      {/* <div className="patient-profile">
        <h2>Patient Profile</h2>
        <p>Name: {patientData.name}</p>
        <p>Age: {patientData.age}</p>
        <p>Date of Birth: {patientData.dateOfBirth}</p>
        <p>Blood Group: {patientData.bloodGroup}</p>
        <p>Sex: {patientData.sex}</p>
        <p>Bmi: {patientData.Bmi}</p> 
      </div> */}
      <PatientProfile></PatientProfile>
    <CustomizedTables></CustomizedTables>

    </div>
  );
}

export default Patie;
