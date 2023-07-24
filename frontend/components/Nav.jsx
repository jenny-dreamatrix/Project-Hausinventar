import { NavLink } from "react-router-dom";
import "./Nav.css"

const Nav = () => {
    return ( 
        <nav>
            <NavLink className="link" to={"/"}>HOME</NavLink>
            <NavLink className="link" to={"/bigstuff"}>BIG STUFF</NavLink>
            <NavLink className="link" to={"/notsobigstuff"}>NOT SO BIG STUFF</NavLink>
            <NavLink className="link" to={"/smallstuff"}>SMALL STUFF</NavLink>
        </nav>
     );
}
 
export default Nav;