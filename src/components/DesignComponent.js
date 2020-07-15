import React, {Component} from "react";
import Nav from "./NavComponent";
import DesignProjects from "./DesignProjectsComponent";
import NavDrawerButtonComponent from "./NavDrawerButtonComponent";
import NavDrawer from "./NavDrawerComponent";

class Design extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeLink: "design",
            navDrawerOpen: false
        }
    }

    navToggleClickHandler = () => {
        this.setState(
            (prevState) => {
                return {navDrawerOpen: !prevState.navDrawerOpen}
            })
    }

    render() {
        let navDrawerButtonComponent

        if(!this.state.navDrawerOpen) {
            navDrawerButtonComponent = <NavDrawerButtonComponent click={this.navToggleClickHandler} />
        }

        return (
            <>
            <NavDrawer activeLink={this.state.activeLink} click={this.navToggleClickHandler} navDrawerOpen={this.state.navDrawerOpen} />
        <div className="designBackground" id="design">
                <div className="designContent">
                    <div className="designHeader">
                    <h2>Design Projects</h2>
                    <div className="navWrapper">
                        {navDrawerButtonComponent}
                    </div>
                    </div>
                    <DesignProjects />
                </div>
                <Nav activeLink={this.state.activeLink}/>
            </div>
</>
        )
    }
}

export default Design