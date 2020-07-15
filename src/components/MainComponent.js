import React, {Component} from "react";
import Home from "./HomeComponent";
import Code from "./CodeComponent";
import Design from "./DesignComponent";
import About from "./AboutComponent";
import Contact from "./ContactComponent";
import NavDrawer from "./NavDrawerComponent";


class Main extends Component {
    render() {
        return (
            <>
                <Home />
                <Code />
                <Design />
                <About />
                <Contact />
            </>
        )

    }

}

export default Main