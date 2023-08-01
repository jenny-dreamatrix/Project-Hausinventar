import axios from "axios"
import { useEffect, useState, useContext } from "react";
import Nav from "../components/Nav";
import { LoggedInContext } from "../context/Context";


const UserProfile = () => {
    const [userData, setUserData] = useState({})
    const { loggedIn, setLoggedIn } = useContext(LoggedInContext)

    useEffect(() => {
        const fetchData = async () => {
            // dynamisch den richtigen user fetchen !!
            const { data } = await axios.get("/api/users/64c817d1d0bf6c87e3caff61")
            setUserData(data)
        }
        fetchData()
    },[])

    const logoutFunction = () => {
        setLoggedIn(false)

    }

    return ( 
        <>
        <Nav/>
        <div style={loggedIn ? {display: "block"} : {display: "none"}}>
        <button>Profile</button>
        <button onClick={logoutFunction}>Logout</button>
        <h1>Welcome {userData?.name}!</h1>
        <img src={userData.image?.url} alt={userData.name} />
        <h3>{userData.email}</h3>
        <p>{userData.description}</p>
        <h2>Your Inventory</h2>
        {/* die ids durchgeben */}
        </div>
        <h2 style={loggedIn ? {display: "none"} : {display: "block"}} >You are logged out. See you soon!</h2>
        </>
     );
}
 
export default UserProfile;