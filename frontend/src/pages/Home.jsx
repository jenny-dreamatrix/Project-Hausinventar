import NavBar from "../components/NavBar.jsx";

const Home = () => {
    return ( 
        <>
            <header>
                <NavBar/>
                <h1>MY FUNITURE</h1>
            </header>
            <section>
                <div>
                    <img src="" alt="big stuff" />
                    <h2>BIG STUFF</h2>
                </div>
                <div>
                    <img src="" alt="not so big stuff" />
                    <h2>NOT SO BIG STUFF</h2>
                </div>
                <div>
                    <img src="" alt="small stuff" />
                    <h2>SMALL STUFF</h2>
                </div>
            </section>
        </>
     );
}
 
export default Home;