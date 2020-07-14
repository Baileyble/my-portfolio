import React, {Component} from "react";
import Nav from "./NavComponent";
import DesignProjects from "./DesignProjectsComponent";
import NavDrawerButtonComponent from "./NavDrawerButtonComponent";

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
                    <div className="designHeader">
                    <h2>Design Projects</h2>
                    <div className="navWrapper">
                        <NavDrawerButtonComponent click={this.props.navToggleClickHandler} />
                    </div>
                    </div>
                    <DesignProjects />
                </div>
                <Nav activeLink={this.state.activeLink}/>
            </div>

        )
    }
}

export default Design