import axios from "axios";
import { useParams } from "react-router";
import { useEffect, useState, useRef } from "react";
import { useContext } from "react";
import { RefreshContext } from "../context/Context";
import BackBtn from "../components/BackBtn";

const DetailBigStuff = () => {
    const params = useParams()
    const [detailData, setDetailData] = useState({})
    const [editingTitle, setEditingTitle] = useState(false)
    const [editingRoom, setEditingRoom] = useState(false)
    const [editingContent, setEditingContent] = useState(false)
    const [editingImage, setEditingImage] = useState(false)
    const {refresh, setRefresh} = useContext(RefreshContext)
    const titleRef = useRef()
    const roomRef = useRef()
    const contentRef = useRef()

    // getting data
    useEffect(() => {
        const fetchData = async () => {
            const { data } = await axios.get(`/api/bigstuff/${params.id}`)
            setDetailData(data)
        }
        fetchData()
    },[refresh])

    // editing functions
    const EditTitle = async (e) => {
        e.preventDefault()
        const newTitle = { title: titleRef.current.value }
        const {data} = await axios.put(`/api/bigstuff/${params.id}`, newTitle)
        setRefresh(prev => !prev)
        setEditingTitle(false)
        e.target.reset()
    }
    const EditRoom = async (e) => {
        e.preventDefault()
        const newRoom = { room: roomRef.current.value }
        const {data} = await axios.put(`/api/bigstuff/${params.id}`, newRoom)
        setRefresh(prev => !prev)
        setEditingRoom(false)
        e.target.reset()
    }
    const EditContent = async (e) => {
        e.preventDefault()
        const newContent = { content: contentRef.current.value }
        const {data} = await axios.put(`/api/bigstuff/${params.id}`, newContent)
        setRefresh(prev => !prev)
        setEditingContent(false)
        e.target.reset()
    }
    // const EditImage = async (e) => {
    //     e.preventDefault()
    //     const formData = new FormData(e.target)
    //     const newImage = { image: {url: formData}}
    //     const {data} = await axios.put(`/api/bigstuff/${params.id}`, formData)
    //     setRefresh(prev => !prev)
    //     setEditingImage(false)
    //     e.target.reset()
    // }

    return ( 
        <>
        {detailData ? (
            <section>
                <article>
                
                {/* edit image */}
                <div>
                <img src={detailData.image?.url} alt={detailData.title} />
                {/* <button onClick={() => setEditingImage(prev => !prev)}>Edit</button>
                <form onSubmit={EditImage} style={editingImage ? {display: "block"} : {display: "none"}} className={editingImage ? "edit-pop-up" : ""}>
                    <input type="file" name="image" placeholder="image" />
                    <button type="submit">Publish</button>
                </form> */}
                </div>

                {/* edit title */}
                <div>
                <h3>{detailData.title}</h3>
                <button onClick={() => setEditingTitle(prev => !prev)}>Edit</button>
                <form onSubmit={EditTitle} style={editingTitle ? {display: "block"} : {display: "none"}} className={editingTitle ? "edit-pop-up" : ""}>
                    <input type="text" name="title" placeholder="title" ref={titleRef}/>
                    <button type="submit">Publish</button>
                </form>
                </div>

                {/* edit room */}
                <div>
                <h5>{detailData.room}</h5>
                <button onClick={() => setEditingRoom(prev => !prev)}>Edit</button>
                <form onSubmit={EditRoom} style={editingRoom ? {display: "block"} : {display: "none"}} className={editingRoom ? "edit-pop-up" : ""}>
                    <input type="text" name="room" placeholder="room" ref={roomRef}/>
                    <button type="submit">Publish</button>
                </form>
                </div>

                <h4>Beschreibung</h4>

                {/* edit content */}
                <div>
                <p>{detailData.content}</p>
                <button onClick={() => setEditingContent(prev => !prev)}>Edit</button>
                <form onSubmit={EditContent} style={editingContent ? {display: "block"} : {display: "none"}} className={editingContent ? "edit-pop-up" : ""}>
                    <input type="text" name="content" placeholder="content" ref={contentRef}/>
                    <button type="submit">Publish</button>
                </form>
                </div>

                </article>
            </section>
        ) : (
            <p>pending..</p>
        )}

        <BackBtn/>
        </>
     );
}
 
export default DetailBigStuff;