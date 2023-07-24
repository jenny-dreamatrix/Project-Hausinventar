import "./Home.css"
import Nav from "../components/Nav.jsx"
import { Link } from "react-router-dom"
import BigImg from "../src/assets/imgs/Couch2.webp"
import MidImg from "../src/assets/imgs/Hocker.webp"
import SmallImg from "../src/assets/imgs/Vasen.webp"

const Home = () => {
    return ( 
        <>
            <section className="hero">
                <h1>MY FUNITURE</h1>
            </section>
            <Nav/>
            <main>
                <Link to={"/bigstuff"} className="homeDiv">
                    <img className="homeImg" src={BigImg} alt="big stuff" />
                    <h2 className="homeH2">BIG STUFF</h2>
                </Link>
                <Link to={"/bigstuff"} className="homeDiv">
                    <h2 className="homeH2">NOT SO BIG STUFF</h2>
                    <img className="homeImg" src={MidImg} alt="not so big stuff" />
                </Link>
                <Link to={"/bigstuff"} className="homeDiv">
                    <img className="homeImg" src={SmallImg} alt="small stuff" />
                    <h2 className="homeH2">SMALL STUFF</h2>
                </Link>
            </main>
        </>
     );
}
 
export default Home;