import "./StuffItem.css"
import { Link } from "react-router-dom" 
import { useContext } from "react"
import { LoggedInContext } from "../context/Context"
import axios from "axios"

const SmallStuffItem = (props) => {
    const { loggedIn, setLoggedIn } = useContext(LoggedInContext)
    
    const AddToInventoryFunction = async () => {
        const itemId = props.item._id
        // console.log(itemId);
        // const newInventoryItem = { inventorySmall: itemId }
        // const { data } = await axios.put(`/api/users/64c817d1d0bf6c87e3caff61`, newInventoryItem)
    }

    return ( 
        <article className="ItemArticle">
        <img className="ItemImg" src={props.item.image.url} alt={props.item.title} />
        <div className="ItemDiv">
            <h3 className="ItemTitle">{props.item.title}</h3>
            <h5 className="ItemRoom">{props.item.room}</h5>
            <h4 className="ItemContent">Beschreibung</h4>
            <p className="ItemText">{props.item.content}</p>
            <button onClick={AddToInventoryFunction} style={loggedIn ? {display: "block"} : {display: "none"}} >Add to Inventory</button>
            <div className="btnDiv">
                <Link className="EditBtn" to={`/smallstuff/${props.item._id}`}>Edit</Link>
            </div>
        </div>
    </article>
    );
}
 
export default SmallStuffItem;