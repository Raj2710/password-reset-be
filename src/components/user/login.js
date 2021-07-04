import "../../styles/login.css"
import {Link} from "react-router-dom";
import { useState} from "react";
import axios from "axios";
export default function Login(props){
    let [email,setEmail]=useState("");
    let [pwd,setPwd]=useState("");
    let [show,setShow]=useState(true);
    let [res,setRes]=useState("");
    let [ins,setIns]=useState("");
    let handleEvent = async()=>{
        setRes("");
        await axios.post("https://password-reset-flow.herokuapp.com/users/login",{
            email:email,
            password:pwd
        })
        .then(async(response)=>{
            await setRes(response.data.message);
            await setIns(response.data.instruction);
            setTimeout(() => {
                let url ="/dashboard";
                if(response.data.token){
                    props.history.push({ 
                        pathname: url,
                        state: {
                            email:email,
                            token:response.data.token
                        }
                       });
                }
              }, 1000);
        }).catch((error)=>{
            console.log(error);
        })
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
                <div style={{color:"green"}}>{res} {ins}</div>
            </div>
        </div>
    </>
}