import React, { Component } from "react";

export default class ExperienceInputItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div
                className="experience-item-container"
                data-key={this.props.index}
            >
                <input
                    type="text"
                    placeholder="Position"
                    className="position-input experience-input"
                    onChange={this.props.positionChangeHandler}
                    value={this.props.position}
                />
                <input
                    type="text"
                    placeholder="Company"
                    className="Company-input experience-input"
                    onChange={this.props.companyChangeHandler}
                    value={this.props.company}
                />
                <input
                    type="text"
                    placeholder="City"
                    className="city-input experience-input"
                    onChange={this.props.cityChangeHandler}
                    value={this.props.city}
                />
                <input
                    type="text"
                    placeholder="From"
                    className="date-from-input experience-input"
                    onChange={this.props.fromChangeHandler}
                    value={this.props.from}
                />
                <input
                    type="text"
                    placeholder="To"
                    className="date-to-input experience-input"
                    onChange={this.props.toChangeHandler}
                    value={this.props.to}
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
