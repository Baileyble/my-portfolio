import React, {Component} from "react";
import Nav from "./NavComponent";

class Code extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeLink: "code"
        }
    }

    render() {
        return (
            <div className="codeBackground">
                <div className="codeContent">
                <h2>Code Projects</h2>
                {/*<Projects />*/}
                </div>
                <Nav activeLink={this.state.activeLink}/>
            </div>

        )
    }
}

export default Code