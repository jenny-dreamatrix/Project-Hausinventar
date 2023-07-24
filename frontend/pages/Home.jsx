import Nav from "../components/Nav.jsx";
import BigImg from "../src/assets/imgs/Couch2.webp"
import MidImg from "../src/assets/imgs/Hocker.webp"
import SmallImg from "../src/assets/imgs/Vasen.webp"

const Home = () => {
    return ( 
        <>
            <header>
                <Nav/>
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