import React, {Component} from "react";
import Nav from "./NavComponent";
import DesignProjects from "./DesignProjectsComponent";

class Design extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeLink: "design"
        }
    }

    render() {
        return (
            <div className="designBackground" id="design">
                <div className="designContent">
                    <h2>Design Projects</h2>
                    <DesignProjects />
                </div>
                <Nav activeLink={this.state.activeLink}/>
            </div>

        )
    }
}

export default Design