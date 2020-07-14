import React, {Component} from "react";
import Nav from "./NavComponent";
import CodeProjects from "./CodeProjectsComponent";
import NavDrawerButtonComponent from "./NavDrawerButtonComponent";

class Code extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeLink: "code"
        }
    }

    render() {
        return (
            <div className="codeBackground" id="code">
                <div className="codeContent">
                    <div className="codeHeader">
                <h2>Code Projects</h2>
                        <div className="navWrapper">
                            <NavDrawerButtonComponent click={this.props.navToggleClickHandler}/>
                        </div>
                    </div>
                <CodeProjects />
                </div>
                <Nav activeLink={this.state.activeLink}/>
            </div>

        )
    }
}

export default Code