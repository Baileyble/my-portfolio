import React, {Component} from "react";
import {Link} from "react-scroll";

class NavDrawer extends Component {
    constructor(props) {
    super(props);
    this.state = {
        activeLink: props.activeLink
    }
   }



    render() {
        if (this.props.navDrawerOpen) {
            return (
                <nav className="navDrawer">
                    <div onClick={this.props.click} className="navDrawerX">
                        <p>X</p>
                    </div>
                    <div className="navDrawerList">
                    <ul>
                        <li><Link onClick={this.props.click} duration={1} smooth={false} to="home"
                                  className={`${this.state.activeLink === "home" ? "active" : ""}`}>Home</Link></li>
                        <li><Link onClick={this.props.click} duration={1} smooth={false} to="code"
                                  className={`${this.state.activeLink === "code" ? "active" : ""}`}>Code</Link></li>
                        <li><Link onClick={this.props.click} duration={1} smooth={false} to="design"
                                  className={`${this.state.activeLink === "design" ? "active" : ""}`}>Design</Link></li>
                        <li><Link onClick={this.props.click} duration={1} smooth={false} to="about"
                                  className={`${this.state.activeLink === "about" ? "active" : ""}`}>About</Link></li>
                        <li><Link onClick={this.props.click} duration={1} smooth={false} to="contact"
                                  className={`${this.state.activeLink === "contact" ? "active" : ""}`}>Contact</Link>
                        </li>
                    </ul>
                    </div>
                </nav>
            )
        } return <div />
    }
}

export default NavDrawer