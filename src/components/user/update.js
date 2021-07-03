import "../../styles/forgot.css";
import { useState } from "react";
export default function Update(){
    let [pwd,setPwd]=useState("");
    let [Cpwd,setCPwd]=useState("");
    let handleEvent =()=>{

    }
    return <>
    <div className="wrapper">
        <div className="forgot-wrapper">
            <h3>RESET PASSWORD?</h3>
            <p>Password must be 6 or more characters in length and any combination of letters and numbers</p>
            <label>New Password</label><br/>
            <input type="password" onChange={(e)=>setPwd(e.target.value)}></input><br/>
            <label>Confirm Password</label><br/>
            <input type="password" onChange={(e)=>setCPwd(e.target.value)}></input><br/>
            <button className="login" onClick={handleEvent}>Login</button>
        </div>
    </div>
    </>
}