import NavBar from "../components/NavBar.jsx";
import BigImg from "../assets/imgs/Couch2.webp"
import MidImg from "../assets/imgs/Hocker.webp"
import SmallImg from "../assets/imgs/Vasen.webp"
import "./Home.css"

const Home = () => {
    return ( 
        <>
            <header>
                <NavBar/>
                <h1>MY FUNITURE</h1>
            </header>
            <section>
                <div>
                    <img src={BigImg} alt="big stuff" />
                    <h2>BIG STUFF</h2>
                </div>
                <div>
                    <img src={MidImg} alt="not so big stuff" />
                    <h2>NOT SO BIG STUFF</h2>
                </div>
                <div>
                    <img src={SmallImg} alt="small stuff" />
                    <h2>SMALL STUFF</h2>
                </div>
            </section>
        </>
     );
}
 
export default Home;