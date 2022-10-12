import React, { Component } from "react";
import Experience from "./Experience/Experience";
import Education from "./Education/Education";
import "./Main.css";

export default class Main extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="main-container">
                <div className="description-output-container">
                    <h3 className="description-output-heading main-output-heading">
                        Description
                    </h3>
                    <p className="description">{this.props.description}</p>
                </div>
                <div className="experience-output-container">
                    <h3 className="experience-output-heading main-output-heading">
                        Experience
                    </h3>
                    <Experience experiences={this.props.experiences} />
                </div>
                <div className="education-output-container">
                    <h3 className="education-output-heading main-output-heading">
                        Education
                    </h3>
                    <Education educations={this.props.educations} />
                </div>
            </div>
        );
    }
}
