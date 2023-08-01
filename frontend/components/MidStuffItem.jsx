import "./StuffItem.css"
import { Link } from "react-router-dom" 
import { useContext } from "react"
import { LoggedInContext } from "../context/Context"

const MidStuffItem = (props) => {
    const { loggedIn, setLoggedIn } = useContext(LoggedInContext)

    return ( 
        <article className="ItemArticle">
        <img className="ItemImg" src={props.item.image.url} alt={props.item.title} />
        <div className="ItemDiv">
            <h3 className="ItemTitle">{props.item.title}</h3>
            <h5 className="ItemRoom">{props.item.room}</h5>
            <h4 className="ItemContent">Beschreibung</h4>
            <p className="ItemText">{props.item.content}</p>
            <button style={loggedIn ? {display: "block"} : {display: "none"}} >Add to Inventory</button>
            <div className="btnDiv">
                <Link className="EditBtn" to={`/notsobigstuff/${props.item._id}`}>Edit</Link>
            </div>
        </div>
    </article>
    );
}
 
export default MidStuffItem;