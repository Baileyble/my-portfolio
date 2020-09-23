import React, {Component} from "react";
import Nav from "./NavComponent";
import NavDrawerButtonComponent from "./NavDrawerButtonComponent";
import NavDrawer from "./NavDrawerComponent";

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeLink: "about",
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

        <div className="aboutBackground" id="about">
                <div className="aboutContent">
                    <div className="aboutHeader">
                        <h2>About Me</h2>
                        <div className="navWrapper">
                            {navDrawerButtonComponent}
                        </div>
                    </div>


                    <div className="aboutContainer">
                        <div className="aboutImage" style={{backgroundImage: "url(https://live.staticflickr.com/65535/50375888552_552b6c398c_h.jpg)"}}/>
                        <div className="aboutText">
                        <h3>Hi, I'm Bailey</h3>
                        <p>I’m a Frontend Developer & Designer based out of NC. Originally starting as a UX Designer after attending Devmountain’s UX Design bootcamp, I have decided to transition into a Frontend Developer role becoming a jack of all trades when it comes to digital product development. Combining my experience with UX/UI skills such as user research, ideation and designing with my knowledge of HTML, CSS, JS & React to be able to create amazing digital experiences.</p>

                        <p className="secondParagraph" >Currently, I am working as a UX/UI Designer for Quintevents in Charlotte, NC. I am now searching for new opportunities as a Front-End Developer. </p>

                            <h5><a target="_blank" href="https://pdfhost.io/v/mygH.afyE_BaileyLeResumeFinalpdf.pdf">Resume</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a target="_blank" href="https://github.com/Baileyble">Github</a></h5>
                    </div>
                    </div>
                </div>
                <Nav activeLink={this.state.activeLink}/>
            </div>
</>
        )
    }
}

export default About