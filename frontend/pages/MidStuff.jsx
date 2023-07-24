import axios from "axios"
import { useEffect, useState } from "react";
import { useContext } from "react";
import { RefreshContext } from "../context/Context";
import MidStuffItem from "../components/MidStuffItem";
import AddMidItem from "../components/AddMidItem";

const MidStuff = () => {
    const [midStuffData, setMidStuffData] = useState([])
    const {refresh, setRefresh} = useContext(RefreshContext)

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await axios.get("/api/notsobigstuff")
            setMidStuffData(data)
        }
        fetchData()
    },[])

    return ( 
        <>
        <AddMidItem/>
        <h1>Test</h1>

        {midStuffData ? (
            midStuffData.map((item, index) => {
                return <MidStuffItem item={item} key={index} />
            })
         ) : (
            <p>pending..</p>
         )}
        </>
     );
}
 
export default MidStuff;