import React, {Component} from "react";
import Nav from "./NavComponent";
import CodeProjects from "./CodeProjectsComponent";
import NavDrawerButtonComponent from "./NavDrawerButtonComponent";
import NavDrawer from "./NavDrawerComponent";

class Code extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeLink: "code",
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
                <div className="codeBackground" id="code">
                <div className="codeContent">
                    <div className="codeHeader">
                <h2>Code Projects</h2>
                        <div className="navWrapper">
                            {navDrawerButtonComponent}
                        </div>
                    </div>
                <CodeProjects />
                </div>
                <Nav activeLink={this.state.activeLink}/>
            </div>
</>
        )
    }
}

export default Code