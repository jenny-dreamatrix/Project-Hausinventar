import { useContext, useState } from "react";
import { RefreshContext } from "../context/Context";
import axios from "axios";
import "./AddItem.css"

const AddSmallItem = () => {
    const {refresh, setRefresh} = useContext(RefreshContext)
    const [adding, setAdding] = useState(false)

    const AddItem = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const {data} = await axios.post("/api/smallstuff", formData)
        setRefresh(prev => !prev)
        setAdding(false)
        e.target.reset()
    }

    return ( 
        <>
        <button className="AddBtn" onClick={() => setAdding(prev => !prev)}>Add New Item</button>

        <form onSubmit={AddItem} style={adding ? {display: "block"} : {display: "none"}} className="addItemForm">
            <input type="text" placeholder="title" name="title"/>
            <input type="text" placeholder="room" name="room"/>
            <input type="file" placeholder="image" name="image"/>
            <input type="textarea" placeholder="content" name="content"/>
            <button className="PublishBtn" type="submit">Publish</button>
        </form>
        </>
     );
}
 
export default AddSmallItem;