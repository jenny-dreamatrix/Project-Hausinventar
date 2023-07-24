import { useContext, useState } from "react";
import { RefreshContext } from "../context/Context";
import axios from "axios";

const AddMidItem = () => {
    const {refresh, setRefresh} = useContext(RefreshContext)
    const [adding, setAdding] = useState(false)

    const AddItem = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const {data} = await axios.post("/api/notsobigstuff", formData)
        setRefresh(prev => !prev)
        setAdding(false)
        e.target.reset()
    }

    return ( 
        <>
        <button onClick={() => setAdding(prev => !prev)}>Add Something</button>

        <form onSubmit={AddItem} style={adding ? {display: "block"} : {display: "none"}} className={adding ? "add-pop-up" : ""}>
            <input type="text" placeholder="title" name="title"/>
            <input type="text" placeholder="room" name="room"/>
            <input type="file" placeholder="image" name="image"/>
            <input type="textarea" placeholder="content" name="content"/>
            <button type="submit">Publish</button>
        </form>
        </>
     );
}
 
export default AddMidItem;