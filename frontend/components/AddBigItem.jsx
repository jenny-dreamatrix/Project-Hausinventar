import { useContext, useState } from "react";
import { RefreshContext } from "../context/Context";

const AddBigItem = () => {
    const {refresh, setRefresh} = useContext(RefreshContext)
    const [adding, setAdding] = useState(false)

    const AddBigItem = () => {
        console.log("hello");
    }


    return ( 
        <>
        <button onClick={() => setAdding(prev => !prev)}>Add Something</button>

        <form onSubmit={AddBigItem}>
            <input type="text" placeholder="title" />
            <input type="text" placeholder="room" />
            <input type="file" placeholder="image" />
            <input type="textarea" placeholder="text" />
            <button type="submit">Publish</button>
        </form>
        </>
     );
}
 
export default AddBigItem;