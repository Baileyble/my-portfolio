import React, {Component} from "react";
import { DESIGNPROJECTS } from "../shared/designprojects"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft, faArrowRight} from "@fortawesome/free-solid-svg-icons";

class DesignProjects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            designProjects: DESIGNPROJECTS,
            selectedProject: 0,
            currentFirstProject: 1,
            leftArrow: "",
            rightArrow: "active"
        }

    }

    onClickProject(projectId) {
        this.setState( {
            selectedProject: projectId
        })
    }


    onClickRight() {
        if(this.state.selectedProject < this.state.designProjects.length - 1) {
            this.setState( {
                selectedProject: this.state.selectedProject += 1,
                currentFirstProject: this.state.currentFirstProject += 1
                }
            )
            if(this.state.currentFirstProject === this.state.designProjects.length) {
                this.setState( { rightArrow: ""})
            } else if(this.state.currentFirstProject > 1) {
                this.setState( { leftArrow: "active"})
            }
        }
    }

    onClickLeft() {
        if(this.state.selectedProject > 0) {
            this.setState( {
                selectedProject: this.state.selectedProject -= 1,
                currentFirstProject: this.state.currentFirstProject -= 1
            })
            if(this.state.currentFirstProject < this.state.designProjects.length) {
                this.setState( { rightArrow: "active"})
            }
            if(this.state.currentFirstProject === 1) {
                this.setState( { leftArrow: ""})
            }
        }
    }




    render() {
        return(
            <div className="designProjectsContainer">
                <div className="designProjectList">
                <ul>
                {this.state.designProjects.map(designProjectName => {
                    if(this.state.selectedProject === designProjectName.id) {
                        return (
                            <li><a className="active" onClick={() => this.onClickProject(designProjectName.id)}>{designProjectName.name}</a></li>
                        )
                    } else {
                        return (
                            <li><a onClick={() => this.onClickProject(designProjectName.id)}>{designProjectName.name}</a></li>
                        )
                    }
                })}
                </ul>
            </div>
                <div className="designProjectContent">
                    {this.state.designProjects.map(designProject => {
                        if(this.state.selectedProject === designProject.id && designProject.link != null) {
                            return (
                                <>
                                <div className="designProjectImg" style={{backgroundImage: "url(" + designProject.image + ")"}}/>
                                    <h3 className="mobileName">{designProject.name}</h3>
                                    <p>{designProject.description}</p>
                                    <h4><a target="_blank" rel="noopener noreferrer" href={designProject.link}>{designProject.linkText}</a></h4>
                                </>
                            )
                        } else if(this.state.selectedProject === designProject.id) {
                            return (
                                <>
                                    <div className="designProjectImg" style={{backgroundImage: "url(" + designProject.image + ")"}}/>
                                    <p>{designProject.description}</p>
                                </>
                            )
                        }
                    })}
                    <div className="designProjectBtns">
                        <button className={this.state.leftArrow} onClick={() => this.onClickLeft()}><FontAwesomeIcon size="2x" icon={faArrowLeft}/> </button>
                        <button className={this.state.rightArrow} onClick={() => this.onClickRight()}><FontAwesomeIcon  size="2x" icon={faArrowRight}/> </button>
                    </div>
                </div>
            </div>
        )
    }

}

export default DesignProjects