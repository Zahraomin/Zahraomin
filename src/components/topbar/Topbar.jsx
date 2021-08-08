import "./topbar.scss";
import {Person, Mail} from "@material-ui/icons";

export default function Topbar() {
    return (
        <div className="topbar">
            <div className="wrapper">
                <div className="left">
                    <a href="#about" className="logo">Z</a>
                    <div className="itemContainer">
                    <Person className="icon"/>
                    <span>+974 334 299 64</span>
                    </div>

                    <div className="itemContainer">
                    <Mail className="icon"/>
                    <span>zahraomin@gmail.com</span>
                    </div>
                </div>

                <div className="right">
                <a href="#about">About</a>
                <a href="#experience">Experience</a>
                <a href="#work">Work</a>
                <a href="#contact">Contact</a>
                </div>
            </div>
        </div>
    )
}
