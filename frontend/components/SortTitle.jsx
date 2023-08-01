import { useState, useContext } from "react";
import { RefreshContext, SortInputContext } from "../context/Context";

const SortTitle = () => {
    const {refresh, setRefresh} = useContext(RefreshContext)
    const {sortInput, setSortInput} = useContext(SortInputContext)
    const [sorting, setSorting] = useState(false)

    const sortFunction = (e) => {
        e.preventDefault()
        setRefresh((prev) => !prev)
    }

    const resetSortFunction = (e) => {
        e.preventDefault()
        setSortInput()
        setRefresh((prev) => !prev)
        setSorting(false)
        let ele = document.querySelectorAll("input[name=sortBy]");
        for(let i = 0; i < ele.length; i++ ){
        ele[i].checked = false;
        }
    }

    return ( 
        <>
        <button className="sortiere-btn" onClick={() => setSorting(prev => !prev)}>Sortiere</button>
        <form onSubmit={sortFunction} onChange={(e) => setSortInput(e.target.value)} style={sorting ? {display: "block"} : {display: "none"}} >
            <input type="radio" id="AZ" value="AZ" name="sortBy"/>
            <label htmlFor="AZ">A-Z</label>
            <input type="radio" id="ZA" value="ZA" name="sortBy"/>
            <label htmlFor="ZA">Z-A</label>
            <button type="submit">Sortiere</button>
            <button onClick={resetSortFunction} >Reset</button>
        </form>
        </>
     );
}
 
export default SortTitle;