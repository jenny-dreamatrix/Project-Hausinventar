import { useNavigate } from "react-router";
import "./BackBtn.css"

const BackBtn = () => {
    const navigate = useNavigate()

    const goBack = () => {
        navigate(-1);
    }

    return ( 
        <button className="BackBtn" onClick={goBack}>Back</button>
     );
}
 
export default BackBtn;