import axios from "axios"
import { useEffect, useState } from "react";
import { useContext } from "react";
import { RefreshContext } from "../context/Context";
import MidStuffItem from "../components/MidStuffItem";
import AddMidItem from "../components/AddMidItem";
import Nav from "../components/Nav";
import "./Stuff.css"
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
        <Nav/>
        <AddMidItem/>
        <h1>Not So Big Stuff</h1>
        <div className="gridStuff">
        {midStuffData ? (
            midStuffData.map((item, index) => {
                return <MidStuffItem item={item} key={index} />
            })
         ) : (
            <p>pending..</p>
         )}
        </div>

        <BackBtn/>
        </>
    );
}
 
export default MidStuff;