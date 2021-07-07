import "../../styles/forgot.css";
import { useState } from "react";
import axios from "axios";
export default function Update(props){
    let [pwd,setPwd]=useState("");
    let [Cpwd,setCPwd]=useState("");
    let [res,setRes]=useState("");
    let handleEvent =async()=>{
        if(pwd===Cpwd)
        {
            setRes("");
            await axios.post("https://urlshortnerbe.herokuapp.com/users/update-password",{
                token:props.match.params.token,
                password:pwd
            })
            .then(async(response)=>{
                await setRes(response.data.message);
                setTimeout(() => {
                    if(response.data.message === "Password Updated Successfully"){
                        let url ="/user/login";
                        props.history.push(url);
                } }, 2000);
            })
            .catch(error=>console.log(error))
        }
        else{
            setRes("Password Does Not match");
        }
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
            <button className="login" onClick={handleEvent}>Reset</button>
            <p style={{color:"green"}}>{res}</p>
        </div>
    </div>
    </>
}