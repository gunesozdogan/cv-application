import React, { Component } from "react";

export default class ExperienceInputItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="experience-item-container">
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
                <button
                    onClick={this.props.removeExperienceHandler}
                    className="experience-delete-btn delete-btn"
                    data-key={this.props.index}
                >
                    Delete
                </button>
            </div>
        );
    }
}
