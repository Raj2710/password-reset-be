import "../../styles/login.css"
import {Link} from "react-router-dom";
import { useState} from "react";
import axios from "axios";
export default function Register(){
    let [user,setUser]=useState("");
    let [email,setEmail]=useState("");
    let [pwd,setPwd]=useState("");
    let [show,setShow]=useState(true);
    let [res,setRes]=useState("");
    let [ins,setIns]=useState("");
    let handleEvent = async()=>{
        await axios.post("https://password-reset-flow.herokuapp.com/users/register",{
            firstname:user,
            email:email,
            token:"",
            password:pwd,
            role:"user",
            status:"Not Active"
        })
        .then(async(response)=>{
            await setRes(response.data.message);
            await setIns(response.data.instruction);
            setTimeout(() => {
                window.location.reload();
              }, 5000);
        }).catch((error)=>{
            console.log(error);
        })
    }
    return <>
        <div className="login-wrapper">
            <h1>Sign up and start shortening</h1>
            <h4>Already have an account? <Link to="/user/login"  className="link">Login</Link></h4>
            <div className="form-wrapper">
                <label for="username">Username</label><br/>
                <input type="text" onChange={(e)=>setUser(e.target.value)}></input><br/>
                <label for="username">Email address or username</label><br/>
                <input type="text" onChange={(e)=>setEmail(e.target.value)}></input><br/>
                <div className="pass-wrapper">
                    <label for="password" className="pass">Password </label>
                    <button className="showhide" onClick={()=>setShow(!show)}><i class="fas fa-eye"></i> Show</button>
                </div><br/>
                <input type={show?"password":"text"} onChange={(e)=>setPwd(e.target.value)}></input><br/>
                <button className="login" onClick={handleEvent}>Sign Up</button>
            </div>
            <div style={{color:"green"}}>{res} {ins}</div>
        </div>
    </>
}