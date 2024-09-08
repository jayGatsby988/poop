import "./signup.css";



import {useState, useEffect} from "react"

import axios from "axios"
import { useNavigate } from "react-router-dom";


      
function Signup() {



    const [password,setPassword] = useState("")
    const [username,setUsername] = useState("")
    const [msg,setMsg] = useState("")

    const navigate = useNavigate()



    const handleSubmit = async (event)=>{

        event.preventDefault()

  

        try {
            const response = await axios.post("http://localhost:3000/api/signup",{username,password})
            console.log("signing in")
            setMsg("Signing in")
            navigate("/")

        }catch(err){
            console.error(err)
            setMsg(err.response.data.msg)
        }

        
    }



   
  return (
    <div className="signup-container">
      <div className="signup-form-wrapper">
        <form id="signup" onSubmit = {handleSubmit}>
          <h1>Sign Up</h1>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" placeholder="Enter your username" required onChange ={(e)=>setUsername(e.target.value)}/>
      
          
          <label htmlFor="password">Confirm Password</label>
          <input type="password" id="password" placeholder="Re-enter your password" required onChange ={(e)=>setPassword(e.target.value)}/>
          
          <button type="submit">Sign Up</button>
        </form>
        <h2>{msg}</h2>
        <a href="/login" className="login-link">Already have an account?</a>
      </div>
    </div>
  );
}

export default Signup;
