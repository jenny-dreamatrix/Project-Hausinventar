import { NavLink } from "react-router-dom";

const NavBar = () => {
    return ( 
        <nav>
            <NavLink to={"/"}>HOME</NavLink>
            <NavLink to={"/"}>BIG STUFF</NavLink>
            <NavLink to={"/"}>NOT SO BIG STUFF</NavLink>
            <NavLink to={"/"}>SMALL STUFF</NavLink>
        </nav>
     );
}
 
export default NavBar;