import React, {Component} from "react";

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
                    <li><a className={`${this.state.activeLink == "home" ? "active" : ""}`}>Home</a></li>
                    <li><a className={`${this.state.activeLink == "code" ? "active" : ""}`}>Code</a></li>
                    <li><a className={`${this.state.activeLink == "design" ? "active" : ""}`}>Design</a></li>
                    <li><a className={`${this.state.activeLink == "about" ? "active" : ""}`}>About</a></li>
                    <li><a className={`${this.state.activeLink == "contact" ? "active" : ""}`}>Contact</a></li>
                </ul>
            </>
        )
    }
}

export default Nav