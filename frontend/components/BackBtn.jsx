import { useNavigate } from "react-router";

const BackBtn = () => {
    const navigate = useNavigate()

    const goBack = () => {
        navigate(-1);
    }

    return ( 
        <button onClick={goBack}>Back</button>
     );
}
 
export default BackBtn;