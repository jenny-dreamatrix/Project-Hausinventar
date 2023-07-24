import { useContext, useState } from "react";
import { RefreshContext } from "../context/Context";
import axios from "axios";
import "./AddItem.css"

const AddBigItem = () => {
    const {refresh, setRefresh} = useContext(RefreshContext)
    const [adding, setAdding] = useState(false)

    const AddItem = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const {data} = await axios.post("/api/bigstuff", formData)
        setRefresh(prev => !prev)
        setAdding(false)
        e.target.reset()
    }

    return ( 
        <>
        <button className="AddBtn" onClick={() => setAdding(prev => !prev)}>Add New Item</button>

        <form onSubmit={AddItem} style={adding ? {display: "block"} : {display: "none"}} className="addItemForm">
            <input type="text" placeholder="Title" name="title"/>
            <input type="text" placeholder="Room" name="room"/>
            <input type="file" placeholder="Image" name="image"/>
            <input type="textarea" placeholder="Beschreibung" name="content"/>
            <button className="PublishBtn" type="submit">Publish</button>
        </form>
        </>
    );
}
 
export default AddBigItem;