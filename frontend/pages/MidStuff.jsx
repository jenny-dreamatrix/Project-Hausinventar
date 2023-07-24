import axios from "axios"
import { useEffect, useState } from "react";
import { useContext } from "react";
import { RefreshContext } from "../context/Context";
import MidStuffItem from "../components/MidStuffItem";
import AddMidItem from "../components/AddMidItem";
import BackBtn from "../components/BackBtn";

const MidStuff = () => {
    const [midStuffData, setMidStuffData] = useState([])
    const {refresh, setRefresh} = useContext(RefreshContext)

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await axios.get("/api/notsobigstuff")
            setMidStuffData(data)
        }
        fetchData()
    },[refresh])

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

         <BackBtn/>
        </>
     );
}
 
export default MidStuff;