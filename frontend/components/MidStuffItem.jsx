import "./StuffItem.css"

const MidStuffItem = (props) => {
    return ( 
        <article className="ItemArticle">
        <img className="ItemImg" src={props.item.image.url} alt={props.item.title} />
        <div className="ItemDiv">
            <h3 className="ItemTitle">{props.item.title}</h3>
            <h5 className="ItemRoom">{props.item.room}</h5>
            <h4 className="ItemContent">Beschreibung</h4>
            <p className="ItemText">{props.item.content}</p>
            <div className="btnDiv">
                <button className="EditBtn">Edit</button>
            </div>
        </div>
    </article>
     );
}
 
export default MidStuffItem;