import "./login1.css";

import {useState} from "react"

import {useNavigate} from "react-router-dom"
import axios from "axios"


function Login() {


    const [password,setPassword] = useState("")
    const [username,setUsername] = useState("")
    const [msg,setMsg] = useState("")

    const navigate = useNavigate()




    const handleSubmit = async(event)=>{


        event.preventDefault()

        try {

            const response = await axios.post("http://localhost:3000/api/login",{username,password}) 
            console.log("done")
            navigate("signedup/base")
        }catch(err){

            console.error(err)
            setMsg(err.response.data.msg)
        }
    }



  return (
    <div className="login-container">
      <div className="login-form-wrapper">
        <form id="login" onSubmit = {handleSubmit}>
          <h1>Login</h1>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" placeholder="Enter your username" required onChange ={(e)=>setUsername(e.target.value)}/>
          
          <label htmlFor="password">Password</label>
          <input type="password" id="password" placeholder="Enter your password" required onChange = {(e)=>setPassword(e.target.value)}/>
          
          <button type="submit">Log In</button>
        </form>

        {msg}
        <a href="/signup" className="signup-link">Don't have an account?</a>
      </div>
    </div>
  );
}

export default Login;
