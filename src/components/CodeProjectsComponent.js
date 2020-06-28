import React, {Component} from "react";
import {CODEPROJECTS} from "../shared/codeprojects"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import ReactDOM from "react-dom"

const measureElement = element => {
    const DOMNode = ReactDOM.findDOMNode(element);
    return {
        width: DOMNode.offsetWidth,
        left: DOMNode.offsetLeft
    };
}

class CodeProjects extends Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
        this.state = {
            codeProjects: CODEPROJECTS,
            projectWidth: 0,
            projectsXCoordinate: 0,
            currentFirstProject: 1,
            leftArrow: "",
            rightArrow: "active"
        }

    }

    resize = () => {
        this.forceUpdate()
        this.setState( {projectWidth: measureElement(this.content).width,
            projectsXCoordinate: 0,
            currentFirstProject: 1,
            leftArrow: "",
            rightArrow: "active"
        })
    }

    componentDidMount() {
        this.content && this.setState({ projectWidth: measureElement(this.content).width });
        this.wrapper && this.setState({ projectsXCoordinate: measureElement(this.wrapper).left});
        window.addEventListener('resize', this.resize)
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.resize)
    }

    onClickRight() {
        if(this.state.currentFirstProject < this.state.codeProjects.length) {
            this.setState({
                projectsXCoordinate: this.state.projectsXCoordinate -= this.state.projectWidth,
                currentFirstProject: this.state.currentFirstProject += 1
            }
            )
            if(this.state.currentFirstProject === this.state.codeProjects.length) {
                this.setState( { rightArrow: ""})
            } else if(this.state.currentFirstProject > 1) {
                this.setState( { leftArrow: "active"})
            }
        }
    }

    onClickLeft() {
        if(this.state.currentFirstProject > 1) {
            this.setState( {
                projectsXCoordinate: this.state.projectsXCoordinate += this.state.projectWidth,
                currentFirstProject: this.state.currentFirstProject -= 1
            })
            if(this.state.currentFirstProject < this.state.codeProjects.length) {
                this.setState( { rightArrow: "active"})
            }
            if(this.state.currentFirstProject === 1) {
                this.setState( { leftArrow: ""})
            }
        }
    }

    render() {
        return (
            <div className="codeProjectsContainer">
                <div ref={r => this.wrapper = r} style={{left: this.state.projectsXCoordinate}}  className="codeProjectWrapper">
                {this.state.codeProjects.map(codeproject => {
                    return (
                        <>
                            <a ref={r => this.content = r} target="_blank" rel="noopener noreferrer" href={codeproject.link}>
                                <div className="codeProjectImg"
                                     style={{backgroundImage: "url(" + codeproject.image + ")"}}>
                                    <div className="codeProjectOverlay">
                                        <h3><span>{codeproject.name}</span></h3>
                                    </div>
                                </div>
                                <div className="codeProjectCTA">
                                    <h3><span>View {codeproject.type}</span></h3>
                                </div>
                            </a>
                        </>
                    )
                })}
                </div>

                <div className="codeProjectBtns">
                    <button className={this.state.leftArrow} onClick={() => this.onClickLeft()}><FontAwesomeIcon size="2x" icon={faArrowLeft}/> </button>
                    <button className={this.state.rightArrow} onClick={() => this.onClickRight()}><FontAwesomeIcon  size="2x" icon={faArrowRight}/> </button>
                </div>

            </div>
        )
    }


}

export default CodeProjects