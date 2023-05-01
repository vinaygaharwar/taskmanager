import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import App from '../App'
import './login.css'
const Login = () => {
    const[name,setName]=useState('')
    const[password,setPassword]=useState('')
    const[isLogin,setIsLogin]=useState(localStorage.getItem("loggedIn")||false)
    const loginHandler=()=>{
        if(name=="vinay" ||name=="leela" ||name=="altamas")
        {
            setIsLogin(!isLogin)
            localStorage.setItem("loggedIn",isLogin)
            localStorage.setItem("isName",name)
    }
        else
        alert("Invalid Username")
        // setIsLogin(true)
    }
    const logoutHandler=()=>{
        setIsLogin(!isLogin)
        localStorage.setItem("loggedIn",isLogin)
        localStorage.setItem("isName","")
    }
    console.log(isLogin)
  return (
    <div>
      {!isLogin &&<div className='container'>
      <h3>Login</h3>
      <TextField onChange={(e)=>setName(e.target.value)} name='name' id="outlined-basic" label="Name" variant="outlined" style={{marginBottom:'30px'}} />
      <TextField onChange={(e)=>setPassword(e.target.value)} type={'password'}  name='password' id="outlined-basic" label="Password" variant="outlined" style={{marginBottom:'30px'}} />
      <Button onClick={loginHandler} variant="contained" color="primary">Login</Button>
       </div>}
       {isLogin && <div><App name={name}/>
       <Button onClick={logoutHandler}>Logout</Button>
       </div>}
    </div>
  )
}

export default Login
