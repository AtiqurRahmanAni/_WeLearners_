import React from "react";
import { useState } from "react";
import {
  IoCloseOutline,
  IoPersonOutline,
  IoMailOutline,
  IoLockClosedOutline,
} from "react-icons/io5";
import "../styles/Login.css";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
export default function Login() {
  const navigate=useNavigate();
  const [data,setData]=useState(
    {
      name: '',
      email: '',
      password: '',
    }
  )
  async function loginUser (e){
    e.preventDefault();
    try {
      await axios.post("http://localhost:8000/",{
        name, email,password
      })
      .then(res=>{
        if(res.data=="exist"){
          navigate("/welcomePage",{state:{id:email}})
        }
        else if(res.data=="notexist"){
          alert("User have not register yet!")
        }
      })
      .catch(e=>{
        alert("wrong")
        console.log(e)
      })
    } catch (e) {
      console.log(e)
    }
    // axios.get('/')
  }
  return (
    <div className=" min-h-screen flex flex-col justify-center lg:px-32 px-5 bg-backgroundColor">
      <div className="wrapper">
        <div className="login-box" id="login-box">
          <form onSubmit={loginUser}>
            <h2>LogIn</h2>
            <span className="icon-close" id="login-close">
              <IoCloseOutline />
            </span>

            <div className="input-box">
              <span className="icon">
                <IoPersonOutline />
              </span>
              
              <input type="text"  value={data.name} onChange={(e) => setData({...data, name: e.target.value})} required/>
              <label>UserName</label>
            </div>
            <div className="input-box">
              <span className="icon">
                <IoMailOutline />
              </span>
              <input type="email" value={data.email} onChange={(e) => setData({...data, email: e.target.value})}  required />
              <label>Email</label>
            </div>
            <div className="input-box">
              <span className="icon">
                <IoLockClosedOutline />
              </span>
              <input type="password" value={data.password} onChange={(e) => setData({...data, password: e.target.value})}  required />
              <label>Password</label>
            </div>
            <div className="remember-forgot">
              <label>
                <input type="checkbox" />
                Remember me
              </label>
              <a href="#">Forgot Password</a>
            </div>
            <button type="submit"onClick={(loginUser)}>Login</button>
            <div className="register-link">
              <p>
                Don't have an account?
                <Link to="/register">Register</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}


