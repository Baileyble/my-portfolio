import React, {Component} from "react";
import Nav from "./NavComponent";

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeLink: "contact"
        }
    }

    render() {
        return (
            <div className="contactBackground">
                <div className="contactContent">
                    <h2>Contact Me</h2>
                    {/*<Projects />*/}
                </div>
                <Nav activeLink={this.state.activeLink}/>
            </div>

        )
    }
}

export default Contact