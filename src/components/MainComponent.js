import React, {Component} from "react";
import Home from "./HomeComponent";
import Code from "./CodeComponent";
import Design from "./DesignComponent";
import About from "./AboutComponent";
import Contact from "./ContactComponent";
import NavDrawer from "./NavDrawerComponent";


class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navDrawerOpen: false,
            activeLink: ""
        }
    }




    render() {



        return (
            <>
                {navDrawer}
                <Home />
                <Code navToggleClickHandler={this.navToggleClickHandler} />
                <Design navToggleClickHandler={this.navToggleClickHandler} />
                <About navToggleClickHandler={this.navToggleClickHandler} />
                <Contact navToggleClickHandler={this.navToggleClickHandler} />
            </>
        )

    }

}

export default Main