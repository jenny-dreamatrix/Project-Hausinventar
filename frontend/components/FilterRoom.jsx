import { useState, useContext } from "react";
import { RefreshContext, FilterInputContext } from "../context/Context";

const FilterRoom = () => {
    const {refresh, setRefresh} = useContext(RefreshContext)
    const {filterInput, setFilterInput} = useContext(FilterInputContext)
    const [filtering, setFiltering] = useState(false)

    const filterFunction = (e) => {
        e.preventDefault()
        setRefresh((prev) => !prev)
    }

    const resetFilterFunction = (e) => {
        e.preventDefault()
        setFilterInput()
        setRefresh((prev) => !prev)
        setFiltering(false)
        let ele = document.querySelectorAll("input[name=room]");
        for(let i = 0; i < ele.length; i++ ){
        ele[i].checked = false;
        }
    }

    return ( 
        <>
        <button className="filter-btn" onClick={() => setFiltering(prev => !prev)}>Filter</button>
        <form onSubmit={filterFunction} onChange={(e) => setFilterInput(e.target.value)} style={filtering ? {display: "block"} : {display: "none"}} >
            <input type="radio" id="wohnzimmer" value="wohnzimmer" name="room"/>
            <label htmlFor="wohnzimmer">Wohnzimmer</label>
            <input type="radio" id="flur" value="flur" name="room"/>
            <label htmlFor="flur">Flur</label>
            <input type="radio" id="schlafzimmer" value="schlafzimmer" name="room"/>
            <label htmlFor="schlafzimmer">Schlafzimmer</label>
            <input type="radio" id="kueche" value="küche" name="room"/>
            <label htmlFor="kueche">Küche</label>
            <input type="radio" id="bad" value="bad" name="room"/>
            <label htmlFor="bad">Bad</label>
            <button type="submit">Filter</button>
            <button onClick={resetFilterFunction} >Reset</button>
        </form>
        </>
     );
}
 
export default FilterRoom;