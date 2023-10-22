import React, { useState } from "react";
import { useUserContext } from "../contexts/userContext";
import CustomizedTables from "../components/CustomizedTables";
import DoctorTable from "../components/DoctorTable";
import axios from "axios";

function Doctor() {
  const { user } = useUserContext();

  const [email, setEmail] = useState("");
  const [tempEmail, setTempEmail] = useState("");

  const [diagnosis, setDiagnosis] = useState("");
  const [prescription, setPrescription] = useState("");

  function handleChange(event) {
    event.preventDefault();
    setTempEmail(event.target.value);
  }

  function updateEmail(event) {
    console.log("Clicked");
    event.preventDefault();
    setEmail(tempEmail);
    console.log(email);
  }

  async function handleSubmit(event) {
    console.log("Attempted Creating a new record");
    console.log(user);
    const result = await axios.post("http://localhost:8000/api/add/report", {
      d_id: user.userid,
      email: email,
      diagnosis: diagnosis,
      prescriptions: prescription
    })

    console.log(result);
  }

  function handleDiagnosis(event){
    event.preventDefault();
    setDiagnosis(event.target.value);
  }
  function handlePrescription(event){
    event.preventDefault();
    setPrescription(event.target.value);
    setEmail("");
    setEmail(tempEmail);
  }

  return (
    <div className="App">
      <h1>Doctor Profile</h1>
      <div>
        <p>Name: {user.name}</p>
        <p>Gender: {user.gender}</p>
        <p>address: </p>
        <p>Country: INDIA</p>
        <p>Phone no: {user.contact}</p>
        <p>Email: {user.email}</p>
      </div>
      <div>
        <input
          type="text"
          placeholder="Search for patient"
          onChange={handleChange}
        ></input>
        <button onClick={updateEmail}>Search</button>
      </div>
      {/* <h2>Medical History</h2>
      <p>PATIENT NAME:Ajitem</p>
      <p>Email:ajitem@gmail.com</p>
      <p>Diagnosis:COLD</p>
      <p>Priscription:MEDICONE</p> */}

      <div>
        <DoctorTable email={email}></DoctorTable>
        <button onClick={handleSubmit}> CREATE NEW REDCORD </button>
        <div >
          <textarea placeholder="Diagnosis" onChange={handleDiagnosis}></textarea>
          <textarea placeholder="Prescription" onChange={handlePrescription}></textarea>
        </div>
      </div>
    </div>
  );
}

export default Doctor;
