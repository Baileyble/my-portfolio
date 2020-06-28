import React, {Component} from "react";
import Nav from "./NavComponent";
import CodeProjects from "./CodeProjectsComponent";

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
                <h2>Code Projects</h2>
                <CodeProjects />
                </div>
                <Nav activeLink={this.state.activeLink}/>
            </div>

        )
    }
}

export default Code