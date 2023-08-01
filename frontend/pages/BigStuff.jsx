import axios from "axios"
import { useEffect, useState, useContext } from "react";
import { RefreshContext, FilterInputContext, SortInputContext } from "../context/Context";
import BigStuffItem from "../components/BigStuffItem";
import AddBigItem from "../components/AddBigItem";
import Nav from "../components/Nav";
import BackBtn from "../components/BackBtn";
import FilterRoom from "../components/FilterRoom";
import SortTitle from "../components/SortTitle";
import "./Stuff.css"

const BigStuff = () => {
    const [bigStuffData, setBigStuffData] = useState([])
    const {refresh, setRefresh} = useContext(RefreshContext)
    const {sortInput, setSortInput} = useContext(SortInputContext)
    const {filterInput, setFilterInput} = useContext(FilterInputContext)

    useEffect(() => {
        const fetchData = async () => {
            const { data } = await axios.get("/api/bigstuff", { params: { room: filterInput, sortBy: sortInput }})
            setBigStuffData(data)
        }
        fetchData()
    },[refresh])

    return ( 
        <>
        <Nav/>
        <main className="main-wrapper">
        <AddBigItem/>
        <FilterRoom/>
        <SortTitle/>
       
        <h1>BIG STUFF</h1>
        <div className="gridStuff">
            {bigStuffData ? (
                bigStuffData.map((item, index) => {
                    return <BigStuffItem item={item} key={index} />
                })
            ) : (
                <p>pending..</p>
            )}
        </div>

         <BackBtn/>
         </main>
        </>
    );
}
 
export default BigStuff;