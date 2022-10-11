import React, { Component } from "react";
import ExperienceInputItem from "./ExperienceInputItem/ExperienceInputItem";

import "./Experience.css";

export default class Experience extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="experience-container">
                <h2 className="experience-heading">Experience</h2>
                {this.props.experiences.map((item, index) => (
                    <ExperienceInputItem
                        key={index}
                        index={index}
                        removeExperienceHandler={
                            this.props.removeExperienceHandler
                        }
                    />
                ))}
                <div className="experience-btn-container">
                    <button
                        onClick={this.props.addExperienceHandler}
                        className="experience-add-btn add-btn"
                    >
                        Add
                    </button>
                </div>
            </div>
        );
    }
}
