import { useContext, useState } from "react";
import { RefreshContext } from "../context/Context";
import "./AddItem.css"

const AddBigItem = () => {
    const {refresh, setRefresh} = useContext(RefreshContext)
    const [adding, setAdding] = useState(false)

    const AddBigItem = () => {
        console.log("hello");
    }


    return ( 
        <>
        <button onClick={() => setAdding(prev => !prev)}>Add New Item</button>

        <form className="addItemForm" onSubmit={AddBigItem}>
            <input type="text" placeholder="Title" />
            <input type="text" placeholder="Room" />
            <input type="file" placeholder="Image" />
            <input type="textarea" placeholder="Beschreibung" />
            <button className="PublishBtn" type="submit">Publish</button>
        </form>
        </>
     );
}
 
export default AddBigItem;