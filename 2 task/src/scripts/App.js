import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";

function App() {
    return (
        <>
            <div className="circle-purple-light"></div>
            <div className="circle-purple-ball"></div>
            <div className="circle-red-ball"></div>
            <div className="circle-little_red-ball"></div>
            <div className="circle-red-light"></div>
            <div className="circle-yellow-light"></div>
            <Header/>
            <Main/>
            <Footer/>
        </>
    );
}

export default App;
