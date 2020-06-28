import React, {Component} from "react";
import Nav from "./NavComponent";

class Contact extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeLink: "contact"
        }
    }

    render() {
        return (
            <div className="contactBackground" id="contact">
                <div className="contactContent">
                    <h2>Contact Me</h2>
                    <div className="contactContainer">
                        <h3>Like what you see?</h3>

                        <p className="mb2">Reach out to me! You can email me or find me on any of the following platforms!</p>
                            <div className="contactColLeft">
                        <ul>
                            <li>
                                <p>Email:</p>
                                <h4><a href="mailto:baileyble@gmail.com">baileyble@gmail.com</a></h4>
                            </li>
                            <li>
                                <p>Linkedin:</p>
                                <h4><a href="https://linkedin.com/in/baileyble" target="_blank">linkedin.com/in/baileyble</a></h4>
                            </li>
                            <li>
                                <p>Github:</p>
                                <h4><a href="https://github.com/Baileyble" target="_blank">github.com/Baileyble</a></h4>
                            </li>
                        </ul>
                            </div>
                            <div className="contactColRight">
                        <ul>
                            <li>
                                <p>Medium:</p>
                                <h4><a href="https://medium.com/@baileyble" target="_blank">medium.com/@baileyble</a></h4>
                            </li>
                            <li>
                                <p>Dribbble:</p>
                                <h4><a href="https://dribbble.com/baileyble" target="_blank">dribbble.com/baileyble</a></h4>
                            </li>
                        </ul>
                            </div>
                    </div>
                </div>
                <Nav activeLink={this.state.activeLink}/>
            </div>

        )
    }
}

export default Contact