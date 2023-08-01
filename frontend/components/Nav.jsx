import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { LoggedInContext } from "../context/Context";
import "./Nav.css"

const Nav = () => {
    const { loggedIn, setLoggedIn } = useContext(LoggedInContext)

    return ( 
        <nav>
            <NavLink to={"/"}>HOME</NavLink>
            <NavLink to={"/bigstuff"}>BIG STUFF</NavLink>
            <NavLink to={"/notsobigstuff"}>NOT SO BIG STUFF</NavLink>
            <NavLink to={"/smallstuff"}>SMALL STUFF</NavLink>
            <NavLink to={"/login"}>LOGIN</NavLink>
            <NavLink style={loggedIn ? {display: "none"} : {display: "inline"}} to={"/register"}>REGISTER</NavLink>
            <NavLink style={loggedIn ? {display: "inline"} : {display: "none"}} to={"/userprofile"}>PROFILE</NavLink>
        </nav>
    );
}
 
export default Nav;