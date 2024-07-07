import React from "react";
import { useState } from "react";
import "../styles/Register.css";
import {
  IoCloseOutline,
  IoPersonOutline,
  IoCalendarOutline,
  IoCallOutline,
  IoMailOutline,
  IoLockClosedOutline,
} from "react-icons/io5";
import { Link } from "react-router-dom";
import axios from 'axios'
//import { Toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const [data, setData] =useState({
    name: '',
    email: '',
    password: '',

  })
  const RegisterUser =async(e)=>{
      e.preventDefault()
      const {name , email , password} = data;
      try{
          const {data} = await axios.post('/register',{
            name ,email, password
          })
          if(data.error){
            toast.error(data.error)
          }
          else{
            setData({})
            //toast.success('Login successful. Welcome!');
            navigate('/');
          }
      }catch(error)
      {
          console.log(error)
      }
  }
      
  return (
    <div className=" min-h-screen flex flex-col justify-center lg:px-32 px-5 bg-backgroundColor">
      <div className="wrapper">
        <div className="Register-box" id="register-box">
          <form onSubmit={RegisterUser}>
            <h1>Register</h1>
            <span className="icon-close" id="register-close">
              <IoCloseOutline />
            </span>

            <div className="input-box">
              <span className="icon">
                <IoPersonOutline />
              </span>
              <input type="text" value={data.name} onChange={(e) => setData({...data, name: e.target.value})} required />
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
                <input type="checkbox" />I agree to the terms & Conditions
              </label>
            </div>
            <button type="submit">Register</button>
            <div className="login-link">
              <p>
                Already have an account?
                <Link to="/login">LogIn</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}


