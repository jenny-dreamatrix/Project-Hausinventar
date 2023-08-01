import { useContext, useState } from "react";
import { RefreshContext } from "../context/Context";
import axios from "axios";
import "./AddItem.css"
import upload from "../src/assets/imgs/upload.png"

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
        <button className="AddBtn" onClick={() => setAdding(prev => !prev)}>Add Item</button>

        <form onSubmit={AddItem} style={adding ? {display: "block"} : {display: "none"}} className="addItemForm">
            <input type="text" placeholder="Title" name="title"/>
            <input type="text" placeholder="Room" name="room"/>
            <input type="file" name="image" id="file" className="inputfile"/>
            <label htmlFor="file"><img src={upload} alt="upload" className="upload" /> Image</label>
            <input type="textarea" placeholder="Beschreibung" name="content"/>
            <button className="PublishBtn" type="submit">Publish</button>
        </form>
        </>
     );
}
 
export default AddSmallItem;