import React, { Component } from "react";
import ExperienceInputItem from "./ExperienceInputItem";

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
                        position={item.position}
                        company={item.company}
                        city={item.city}
                        from={item.from}
                        to={item.to}
                        removeExperienceHandler={
                            this.props.removeExperienceHandler
                        }
                        positionChangeHandler={this.props.positionChangeHandler}
                        companyChangeHandler={this.props.companyChangeHandler}
                        cityChangeHandler={this.props.cityChangeHandler}
                        fromChangeHandler={this.props.fromChangeHandler}
                        toChangeHandler={this.props.toChangeHandler}
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
