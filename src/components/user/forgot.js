import "../../styles/forgot.css";
import { useState } from "react";
import axios from "axios";
export default function Forgot(){
    let [email,setEmail]=useState("");
    let [res,setRes]=useState("");
    let handleEvent =async()=>{
        await axios.post("https://urlshortnerbe.herokuapp.com/users/reset-password",{
            email:email
        })
        .then((response)=>{
            setRes(response.data.message);
        })
        .catch(error=>console.log(error))
    }
    return <>
    <div className="wrapper">
        <div className="forgot-wrapper">
            <h3>FORGOT YOUR PASSWORD?</h3>
            <p>Just enter the email or username you signed up with and we'll let you reset it.</p>
            <label>Email address or username</label><br/>
            <input type="text" onChange={(e)=>setEmail(e.target.value)}></input><br/>
            <button className="login" onClick={handleEvent}>Reset</button>
        </div>
        <div style={{color:"green"}}>{res}</div>
    </div>
    </>
}