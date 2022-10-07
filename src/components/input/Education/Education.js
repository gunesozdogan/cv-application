import React, { Component } from "react";
import "./Education.css";

export default class Education extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="education-container">
                <h2 className="education-heading">Education</h2>
                <input
                    type="text"
                    placeholder="University Name"
                    className="university-name-input education-input"
                />
                <input
                    type="text"
                    placeholder="City"
                    className="city-input education-input"
                />
                <input
                    type="text"
                    placeholder="Degree"
                    className="degree-input education-input"
                />
                <input
                    type="text"
                    placeholder="Subject"
                    className="subject-input education-input"
                />
                <input
                    type="text"
                    placeholder="From"
                    className="date-from-input education-input"
                />
                <input
                    type="text"
                    placeholder="To"
                    className="date-to-input education-input"
                />
                <div className="education-btn-container">
                    <button className="education-add-btn add-btn">Add</button>
                    <button className="education-delete-btn delete-btn">
                        Delete
                    </button>
                </div>
            </div>
        );
    }
}
