import React, {Component} from "react";
import Nav from "./NavComponent";

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeLink: "about"
        }
    }

    render() {
        return (
            <div className="aboutBackground">
                <div className="aboutContent">
                    <h2>About Me</h2>
                    {/*<Projects />*/}
                </div>
                <Nav activeLink={this.state.activeLink}/>
            </div>

        )
    }
}

export default About