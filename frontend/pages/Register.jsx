import { useState } from "react";
import axios from "axios";
import Nav from "../components/Nav";

const Register = () => {
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [successful, setSuccessful] = useState(false)

    const registerFunction = async (e) => {
        e.preventDefault()
        const newUser = {
            email: email,
            name: name
        }
        const { data } = await axios.post("/api/users/", newUser)
        e.target.reset()
        setSuccessful(true)
    }

    return ( 
        <>
        <Nav/>
        <div style={successful ? {display: "none"} : {display: "block"}}>
        <h1>Create an Account</h1>
        <form onSubmit={registerFunction}>
            <label htmlFor="name">Name</label>
            <input type="text" required placeholder="Name" id="name" onChange={(e) => setName(e.target.value)} />
            <label htmlFor="email">Email</label>
            <input type="email" required placeholder="Email" id="email" onChange={(e) => setEmail(e.target.value)} />
            <label htmlFor="password">Password</label>
            <input type="password" required placeholder="Password" id="password"  />
            <label htmlFor="passwordRepeat">Password</label>
            <input type="password" required placeholder="Password" id="passwordRepeat"  />
            <button type="submit">Register</button>
        </form>
        </div>
        <h2 style={successful ? {display: "block"} : {display: "none"}}>Registration was successful! Please go to Login</h2>
        </>
     );
}
 
export default Register;