import { useState, useContext } from "react";
import Nav from "../components/Nav";
import { useNavigate } from "react-router-dom";
import { LoggedInContext } from "../context/Context";


const Login = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [authentification, setAuthentification] = useState(true)
    const { loggedIn, setLoggedIn } = useContext(LoggedInContext)
    

    const loginFunction = (e) => {
        e.preventDefault()
        
        if (authentification === true){
            console.log("login was successful");
        }
        setLoggedIn(true)
        navigate("/userprofile")
    }

    return ( 
        <>
        <Nav/>
        <h1>Login</h1>
        <form onSubmit={loginFunction}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" required onChange={(e) => setEmail(e.target.value)}/>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" required />
            <button type="submit">Sign In</button>
        </form>
        </>
     );
}
 
export default Login;