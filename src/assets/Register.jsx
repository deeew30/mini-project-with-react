import { useState } from "react";
import "./Register.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../contexts/userContext";

export default function Register() {
  const navigate = useNavigate();
  const {user, setUser} = useUserContext();
  const [details, setDetails] = useState(
    {
      name: "",
      bgroup:"",
      dob:"",
      email:"",
      password:"",
      contact:"",
      gender:"",
      type:""
    }
  );

  const [err, setErr] = useState(false);

  function handleChange(event){
    console.log(details);
    const name = event.target.name;
    const value = event.target.value;
    setDetails((prev)=>{
      return {...prev, [name]:value}
    })
  }
  async function handleLogin(Email, Pass){
    const result = await axios.post("http://localhost:8000/api/login", {
        email: Email,
        password: Pass,
    });
    if(result.data.userid){
        setUser(result.data);
        console.log(user);
        switch(result.data.type){
            case "doctor": navigate('/doctor'); break;
            case "user" : navigate('/patient'); break;
        }
    }

    console.log(result);
}

  async function attemptRegister(e){
    e.preventDefault();
    
    try{
        const result = await axios.post("http://localhost:8000/api/register", {
        ...details
      });
      if(result.data.affectedRows == "1"){
        handleLogin(details.email, details.password);
        
      } 
    }catch(e){
      setErr(true);
    }
  }
  

  return (
    <>
      <form className="register-form">
        <div>Register</div>
        <h2>Your Details</h2>
        <input name="name" placeholder="Name" onChange={handleChange}></input>
        <input name="bgroup" placeholder="Blood Group" onChange={handleChange}></input>
        <input name="dob" placeholder="DOB [YYYY-MM-DD]" onChange={handleChange}></input>
        <input name="email" placeholder="Email" onChange={handleChange}></input>
        <input name="password" placeholder="Password" type="password" onChange={handleChange}></input>
        <input name="contact" placeholder="Phone No." onChange={handleChange}></input>
        <input name="gender" placeholder="Gender" onChange={handleChange}></input>
        <input name="type" placeholder="Type" onChange={handleChange}></input>
        
        
        <button onClick={attemptRegister}>
          Register
        </button>
      </form>
    </>
  );
}
