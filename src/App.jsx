import About from "./components/about/About";
import Topbar from "./components/topbar/Topbar";
import Work from "./components/work/Work";
import Contact from "./components/contact/Contact";
import Experience from "./components/experience/Experience";
import "./app.scss"



function App(){
    return (
        <div className="app">
            <Topbar/>
            <div className="sections">
                <About/>
                <Experience/>
                <Work/>
                <Contact/>

            </div>
        </div>
    );
}

    export default App;