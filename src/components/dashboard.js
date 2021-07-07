import axios from "axios";
import { useState,useEffect } from "react";
export default function Dashboard(props){
    let [email,setEmail]=useState("");
    useEffect(()=>{
        async function Auth(){
            if(props.location.state){
                setEmail(props.location.state.email);
                await axios.post("https://urlshortnerbe.herokuapp.com/users/authenticate",{
                token:props.location.state.token
            })
            .then(async(response)=>{
                console.log(response.data.auth);
                if(!response.data.auth){
                    props.history.push("/user/login")
                }
            })
            .catch(error=>console.log(error))
            }
            else{
                props.history.push("/user/login")
            }
        }
        Auth();
    },[props.location.state,props.history])
    let handleEvent = async()=>{
        await axios.post("https://password-reset-flow.herokuapp.com/users/logout",{
            email:props.location.state.email
        }).then(async()=>{
            props.history.push("/home")
        })
    }
    return<>
    <h3>Welcome to Password Reset flow {email}</h3>
    <button className="btn btn-danger" onClick={handleEvent}>Logout</button>
    </>
}