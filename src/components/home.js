import {Link} from "react-router-dom";
export default function Home(){
    return <>
        <div style={{textAlign:"center"}}>
            <h1>Welcome to Password Reset flow</h1>
            <Link to="/user/login">Continue</Link>
        </div>
    </>
}