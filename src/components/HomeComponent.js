import React, {Component} from "react";
import Nav from "./NavComponent";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeLink: "home"
        }
    }

    render() {
        return (
            <div className="homeBackgroundImage">
                <div className="homeBackgroundOverlay">
                    <div className="homeTextWrapper">
                        <h1>Hi, I'm Bailey</h1>
                        <h3>Front-End Developer, Designer & Unicorn</h3>
                        <h5>Arcu non sodales neque sodales ut etiam sit amet nisl purus in mollis nunc sed.</h5>
                    </div>
                    <Nav activeLink={this.state.activeLink}/>
                </div>
            </div>
        )
    }
}


export default Home;