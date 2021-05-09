import React, { useState } from 'react'
// import M from 'materialize-css'
// import { Header } from "./header";
// import { Footer } from "./footer";
import "../Css/register.css"
import {Link, useHistory} from "react-router-dom";

const Register = () => {
    const history = useHistory()
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const options = {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            email: email,
            password: password
        })
    }
    const postFunc=()=> 
    {
        if(!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email))
        {
            console.log("Invalid Email");
            // M.toast({html: 'Invalid Email', classes:"#e53935 red darken-1"})
            return;
        }
        fetch('/signup', options)
        .then(res => res.json())
        .then(data => {
        if(data.error)
        {
            // M.toast({html: data.error, classes:"#e53935 red darken-1"})
            console.log("Error!");
            
        }else{
            // M.toast({html: data.message, classes:"#00c853 green accent-4"})
            history.push('/login')
        }
        
        }).catch(err=> {
            console.error(err);
        })
    
    }
    return (
<div className="register">
{/* <form> */}
    <h1>Sign up</h1>
    <input className= "registerInput" type="text" name="name" placeholder="Name" value={name} onChange={(nameFunc) => setName(nameFunc.target.value)}/><br/><br/>
    {/* <input className= "registerInput" type="text" name="name" placeholder="Last Name"/><br/><br/> */}
    <input className= "registerInput" type="email" name="email" id="email" placeholder="Email address" value={email} onChange={(emailFunc) => setEmail(emailFunc.target.value)}/><br/><br/>
    <input className= "registerInput" type="password" name="password" placeholder="Password" value={password} onChange={(pwdFunc) => setPassword(pwdFunc.target.value)}/><br/><br/>
    <input className= "registerInput" type="password" name="password" id="password" placeholder="Confirm Password"/><br/><br/>
    {/* <input className= "registerInput" type="submit" value="Register" onClick={()=>postFunc()}/><br/><br/> */}
    <button className="registerInput" type="submit" name="action" onClick={()=>postFunc()} >click</button>
    Already have account?<Link className="link" to="/login" >&nbsp;Log In</Link>
{/* </form> */}
</div>
    );
};
export default Register;
