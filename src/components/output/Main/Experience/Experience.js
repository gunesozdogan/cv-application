import React, { Component } from "react";
import ExperienceItem from "./ExperienceItem";
import "./Experience.css";

export default class Experience extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="outer-experience-container">
                {this.props.experiences.map((experience, index) => (
                    <ExperienceItem
                        from={experience.from}
                        to={experience.to}
                        position={experience.position}
                        company={experience.company}
                        city={experience.city}
                        key={index}
                    />
                ))}
            </div>
        );
    }
}
