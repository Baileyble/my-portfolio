import React, {Component} from "react";
import Nav from "./NavComponent";
import NavDrawerButtonComponent from "./NavDrawerButtonComponent";
import NavDrawer from "./NavDrawerComponent";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeLink: "home"
        }
    }

    navToggleClickHandler = () => {
        this.setState(
            (prevState) => {
                return {navDrawerOpen: !prevState.navDrawerOpen}
            })

    }

    render() {

        let navDrawer

        if (this.state.navDrawerOpen) {
            navDrawer = <NavDrawer activeLink={this.state.activeLink} />
        }

        return (
            <div className="homeBackgroundImage" id="home">
                <div className="homeBackgroundOverlay">
                    <div className="homeHeader">
                        <div className="navWrapper">
                            <NavDrawerButtonComponent click={this.props.navToggleClickHandler} />
                        </div>
                    </div>
                    <div className="homeTextWrapper">
                        <h1>Hi, I'm Bailey</h1>
                        <h3>Front-End Developer & Designer</h3>
                        <h5>A UX Designer turned Front-End Developer specializing in React Development.</h5>
                    </div>
                    <Nav activeLink={this.state.activeLink}/>
                </div>
            </div>
        )
    }
}


export default Home;