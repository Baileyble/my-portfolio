import React, {Component} from "react";
import Nav from "./NavComponent";

class Design extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeLink: "design"
        }
    }

    render() {
        return (
            <div className="designBackground">
                <div className="designContent">
                    <h2>Design Projects</h2>
                    {/*<Projects />*/}
                </div>
                <Nav activeLink={this.state.activeLink}/>
            </div>

        )
    }
}

export default Design