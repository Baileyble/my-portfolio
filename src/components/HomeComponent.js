import React, {Component} from "react";
import Nav from "./NavComponent";
import NavDrawerButtonComponent from "./NavDrawerButtonComponent";
import NavDrawer from "./NavDrawerComponent";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeLink: "home",
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
            <div className="homeBackgroundImage" id="home">
                <div className="homeBackgroundOverlay">
                    <div className="homeHeader">
                        <div className="navWrapper">
                            {navDrawerButtonComponent}
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
                </>
        )
    }
}


export default Home;