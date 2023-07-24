const BigStuffItem = (props) => {
    return ( 
        <article>
            <img src={props.item.image.url} alt={props.item.title} />
            <h3>{props.item.title}</h3>
            <h5>{props.item.room}</h5>
            <h4>Beschreibung</h4>
            <p>{props.item.content}</p>
            <button>Edit</button>
        </article>
     );
}
 
export default BigStuffItem;