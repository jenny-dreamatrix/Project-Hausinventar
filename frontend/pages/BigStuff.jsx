import axios from "axios"
import { useEffect, useState } from "react";
import { useContext } from "react";
import { RefreshContext } from "../context/Context";
import BigStuffItem from "../components/BigStuffItem";
import AddBigItem from "../components/AddBigItem";
import BackBtn from "../components/BackBtn";

const BigStuff = () => {
    const [bigStuffData, setBigStuffData] = useState([])
    const {refresh, setRefresh} = useContext(RefreshContext)

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await axios.get("/api/bigstuff")
            setBigStuffData(data)
        }
        fetchData()
    },[refresh])

    return ( 
        <>
        <AddBigItem/>
        
         {bigStuffData ? (
            bigStuffData.map((item, index) => {
                return <BigStuffItem item={item} key={index} />
            })
         ) : (
            <p>pending..</p>
         )}

         <BackBtn/>
        </>
     );
}
 
export default BigStuff;