import React, {Component} from "react";
import Nav from "./NavComponent";

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeLink: "about"
        }
    }

    render() {
        return (
            <div className="aboutBackground" id="about">
                <div className="aboutContent">
                    <h2>About Me</h2>
                    <div className="aboutContainer">
                        <div className="aboutImage" style={{backgroundImage: "url(IMG_2186.JPG)"}}/>
                        <div className="aboutText">
                        <h3>Hi, I'm Bailey</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus vitae congue mauris rhoncus aenean vel elit scelerisque mauris. Velit ut tortor pretium viverra. Sit amet facilisis magna etiam tempor orci. In egestas erat imperdiet sed euismod nisi porta.</p>

                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>

                            <h5><a target="_blank" href="">Resume</a></h5>
                    </div>
                    </div>
                </div>
                <Nav activeLink={this.state.activeLink}/>
            </div>

        )
    }
}

export default About