import axios from "axios"
import { useEffect, useState } from "react";
import { useContext } from "react";
import { RefreshContext } from "../context/Context";
import SmallStuffItem from "../components/SmallStuffItem";
import AddSmallItem from "../components/AddSmallItem";
import BackBtn from "../components/BackBtn";

const SmallStuff = () => {
    const [smallStuffData, setSmallStuffData] = useState([])
    const {refresh, setRefresh} = useContext(RefreshContext)

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await axios.get("/api/smallstuff")
            setSmallStuffData(data)
        }
        fetchData()
    },[refresh])

    return ( 
        <>
        <AddSmallItem/>

        {smallStuffData ? (
            smallStuffData.map((item, index) => {
                return <SmallStuffItem item={item} key={index} />
            })
         ) : (
            <p>pending..</p>
         )}

         <BackBtn/>
        </>
     );
}
 
export default SmallStuff;