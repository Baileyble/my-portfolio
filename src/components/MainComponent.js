import React, {Component} from "react";
import Home from "./HomeComponent";
import Code from "./CodeComponent";


class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <>
                <Home/>
                <Code/>
                {/*<Design />*/}
                {/*<About />*/}
                {/*<Contact />*/}
            </>
        )

    }

}

export default Main