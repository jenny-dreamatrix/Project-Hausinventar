import axios from "axios";
import { useParams } from "react-router";
import { useEffect, useState, useRef } from "react";
import { useContext } from "react";
import { RefreshContext } from "../context/Context";
import BackBtn from "../components/BackBtn";
import Nav from "../components/Nav";

const DetailSmallStuff = () => {
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
            const { data } = await axios.get(`/api/smallstuff/${params.id}`)
            setDetailData(data)
        }
        fetchData()
    },[refresh])

    // editing functions
    const EditTitle = async (e) => {
        e.preventDefault()
        const newTitle = { title: titleRef.current.value }
        const {data} = await axios.put(`/api/smallstuff/${params.id}`, newTitle)
        setRefresh(prev => !prev)
        setEditingTitle(false)
        e.target.reset()
    }
    const EditRoom = async (e) => {
        e.preventDefault()
        const newRoom = { room: roomRef.current.value }
        const {data} = await axios.put(`/api/smallstuff/${params.id}`, newRoom)
        setRefresh(prev => !prev)
        setEditingRoom(false)
        e.target.reset()
    }
    const EditContent = async (e) => {
        e.preventDefault()
        const newContent = { content: contentRef.current.value }
        const {data} = await axios.put(`/api/smallstuff/${params.id}`, newContent)
        setRefresh(prev => !prev)
        setEditingContent(false)
        e.target.reset()
    }

    return ( 
        <>
        <Nav/>
        <main className="main-wrapper">
        {detailData ? (
            <section>
                <article className="DetailArticle">
                
                {/* image */}
                <img className="DetailImg" src={detailData.image?.url} alt={detailData.title} />

                <div className="ItemDiv">

                {/* edit title */}
                <div className="DetailEditWrapper">
                <h3 className="DetailTitle">{detailData.title}</h3>
                <button className="EditBtn" onClick={() => setEditingTitle(prev => !prev)}>Edit</button>
                <form onSubmit={EditTitle} style={editingTitle ? {display: "block"} : {display: "none"}} className="edit-pop-up">
                    <input type="text" name="title" placeholder="Title" ref={titleRef}/>
                    <button className="PublishBtn" type="submit">Publish</button>
                </form>
                </div>

                {/* edit room */}
                <div className="DetailEditWrapper">
                <h5 className="DetailRoom">{detailData.room}</h5>
                <button className="EditBtn" onClick={() => setEditingRoom(prev => !prev)}>Edit</button>
                <form onSubmit={EditRoom} style={editingRoom ? {display: "block"} : {display: "none"}} className="edit-pop-up">
                    <input type="text" name="room" placeholder="Room" ref={roomRef}/>
                    <button className="PublishBtn" type="submit">Publish</button>
                </form>
                </div>

                {/* edit content */}
                <div className="DetailEditWrapper">
                <h4>Beschreibung</h4>
                <button className="EditBtn" onClick={() => setEditingContent(prev => !prev)}>Edit</button>
                <form onSubmit={EditContent} style={editingContent ? {display: "block"} : {display: "none"}} className="edit-pop-up">
                    <input type="text" name="content" placeholder="Beschreibung" ref={contentRef}/>
                    <button className="PublishBtn" type="submit">Publish</button>
                </form>
                </div>

                <p className="DetailContent">{detailData.content}</p>

                </div>
                </article>
            </section>
        ) : (
            <p>pending..</p>
        )}

        <BackBtn/>
        </main>
        </>
     );
}
 
export default DetailSmallStuff;