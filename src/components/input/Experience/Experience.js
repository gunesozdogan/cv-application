import React, { Component } from "react";
import "./Experience.css";

export default class Experience extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="experience-container">
                <h2 className="experience-heading">Experience</h2>
                <input
                    type="text"
                    placeholder="Position"
                    className="position-input experience-input"
                />
                <input
                    type="text"
                    placeholder="Company"
                    className="Company-input experience-input"
                />
                <input
                    type="text"
                    placeholder="City"
                    className="city-input experience-input"
                />
                <input
                    type="text"
                    placeholder="From"
                    className="date-from-input experience-input"
                />
                <input
                    type="text"
                    placeholder="To"
                    className="date-to-input experience-input"
                />
                <div className="experience-btn-container">
                    <button className="experience-add-btn add-btn">Add</button>
                    <button className="experience-delete-btn delete-btn">
                        Delete
                    </button>
                </div>
            </div>
        );
    }
}
