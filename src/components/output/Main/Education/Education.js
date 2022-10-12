import React, { Component } from "react";
import EducationItem from "./EducationItem";
import "./Education.css";

export default class Education extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="outer-education-container">
                {this.props.educations.map((education, index) => (
                    <EducationItem
                        name={education.name}
                        city={education.city}
                        degree={education.degree}
                        subject={education.subject}
                        from={education.from}
                        to={education.to}
                        key={index}
                    />
                ))}
            </div>
        );
    }
}
