import React, { Component } from "react";
import "./Education.css";
import EducationInputItem from "./EducationInputItem";

export default class Education extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="education-container">
                <h2 className="education-heading">Education</h2>
                {this.props.educations.map((item, index) => (
                    <EducationInputItem
                        key={index}
                        index={index}
                        name={item.name}
                        degree={item.degree}
                        subject={item.subject}
                        city={item.city}
                        from={item.from}
                        to={item.to}
                        removeExperienceHandler={
                            this.props.removeExperienceHandler
                        }
                    />
                ))}
                <button
                    onClick={this.props.addEducationHandler}
                    className="education-add-btn add-btn"
                >
                    Add
                </button>
            </div>
        );
    }
}
