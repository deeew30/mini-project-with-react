import { useState } from "react";
import { useUserContext } from "../contexts/userContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
    const {setUser} = useUserContext();
    const navigate = useNavigate();

    function handleEmail(event){
        setEmail(event.target.value);
        console.log(email);
    }
    function handlePassword(event){
        setPass(event.target.value);
        console.log(pass);
    }
    async function handleLogin(){
        const result = await axios.post("http://localhost:8000/api/login", {
            email: email,
            password: pass,
        });
        if(result.data.userid){
            setUser(result.data);
            switch(result.data.type){
                case "doctor": navigate('/doctor'); break;
                case "user" : navigate('/patient'); break;
            }
        }

        console.log(result);
    }

  return (
    <>
      Login
      <div>
        <form>
          <input type="text" placeholder="Email" autoComplete="false" onChange={handleEmail}></input>
          <input type="password" placeholder="Password" autoComplete="false" onChange={handlePassword}></input>
          
        </form>
        <div>
            <button onClick={handleLogin}>Login</button>
        </div>
      </div>
    </>
  );
}
