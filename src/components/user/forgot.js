import "../../styles/forgot.css";
import { useState } from "react";
export default function Forgot(){
    let [email,setEmail]=useState("");
    let handleEvent =()=>{

    }
    return <>
    <div className="wrapper">
        <div className="forgot-wrapper">
            <h3>FORGOT YOUR PASSWORD?</h3>
            <p>Just enter the email or username you signed up with and we'll let you reset it.</p>
            <label for="username">Email address or username</label><br/>
            <input type="text" onChange={(e)=>setEmail(e.target.value)}></input><br/>
            <button className="login" onClick={handleEvent}>Login</button>
        </div>
    </div>
    </>
}