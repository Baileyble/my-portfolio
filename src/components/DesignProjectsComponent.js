import React, {Component} from "react";
import { DESIGNPROJECTS } from "../shared/designprojects"

class DesignProjects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            designProjects: DESIGNPROJECTS,
            selectedProject: 0
        }

    }

    onClickProject(projectId) {
        this.setState( {
            selectedProject: projectId
        })
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
                </div>
            </div>
        )
    }

}

export default DesignProjects