import "../../styles/login.css"
import {Link} from "react-router-dom";
import { useState} from "react";
export default function Login(){
    let [email,setEmail]=useState("");
    let [pwd,setPwd]=useState("");
    let [show,setShow]=useState(true);
    let [res,setRes]=useState("");
    let handleEvent = ()=>{
        
    }
    return <>
        <div className="login-wrapper">
            <h1>Log in and start sharing</h1>
            <h4>Don't have an accout? <Link to="/user/register"  className="link">Sign up</Link></h4>
            <div className="form-wrapper">
                <label for="username">Email address or username</label><br/>
                <input type="text" onChange={(e)=>setEmail(e.target.value)}></input><br/>
                <div className="pass-wrapper">
                    <label for="password" className="pass">Password </label>
                    <button className="showhide" onClick={()=>setShow(!show)}><i class="fas fa-eye"></i> Show</button>
                </div><br/>
                <input type={show?"password":"text"} onChange={(e)=>setPwd(e.target.value)}></input><br/>
                <Link to="/user/forgot-password" className="link">Forgot your password?</Link><br/>
                <button className="login" onClick={handleEvent}>Login</button>
                {res?<div style={{}}>{res}</div>:<div></div>}
            </div>
        </div>
    </>
}