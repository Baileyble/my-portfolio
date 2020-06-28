import React, {Component} from "react";
import { Link } from "react-scroll";

class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeLink: props.activeLink
        }
    }

        render() {
            return (
                <>
                    <ul className="navLinks">
                        <li><Link duration={1000} smooth={true} to="home" className={`${this.state.activeLink === "home" ? "active" : ""}`}>Home</Link></li>
                        <li><Link duration={1000} smooth={true} to="code" className={`${this.state.activeLink === "code" ? "active" : ""}`}>Code</Link></li>
                        <li><Link duration={1000} smooth={true} to="design" className={`${this.state.activeLink === "design" ? "active" : ""}`}>Design</Link></li>
                        <li><Link duration={1000} smooth={true} to="about" className={`${this.state.activeLink === "about" ? "active" : ""}`}>About</Link></li>
                        <li><Link duration={1000} smooth={true} to="contact" className={`${this.state.activeLink === "contact" ? "active" : ""}`}>Contact</Link></li>
                    </ul>
                </>
            )
        }


}



export default Nav