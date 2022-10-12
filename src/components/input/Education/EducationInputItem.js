import React, { Component } from "react";
import "./Education.css";

export default class EducationInputItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div
                className="education-item-container"
                data-key={this.props.index}
            >
                <input
                    type="text"
                    placeholder="University Name"
                    className="university-name-input education-input"
                    value={this.props.name}
                    onChange={this.props.nameChangeHandler}
                />
                <input
                    type="text"
                    placeholder="City"
                    className="city-input education-input"
                    value={this.props.city}
                    onChange={this.props.cityChangeHandler}
                />
                <input
                    type="text"
                    placeholder="Degree"
                    className="degree-input education-input"
                    value={this.props.degree}
                    onChange={this.props.degreeChangeHandler}
                />
                <input
                    type="text"
                    placeholder="Subject"
                    className="subject-input education-input"
                    value={this.props.subject}
                    onChange={this.props.subjectChangeHandler}
                />
                <input
                    type="text"
                    placeholder="From"
                    className="date-from-input education-input"
                    value={this.props.from}
                    onChange={this.props.fromChangeHandler}
                />
                <input
                    type="text"
                    placeholder="To"
                    className="date-to-input education-input"
                    value={this.props.to}
                    onChange={this.props.toChangeHandler}
                />

                <button
                    onClick={this.props.removeEducationHandler}
                    className="education-delete-btn delete-btn"
                >
                    Delete
                </button>
            </div>
        );
    }
}
