import React, { Component } from "react";
import "./Experience.css";

export default class ExperienceItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="experience-item">
                <span className="date-from-to">
                    {this.props.from
                        ? this.props.from + " - " + this.props.to
                        : ""}
                </span>
                <div className="experience-right">
                    <span className="position">{this.props.position}</span>
                    <span className="company-city">
                        {this.props.company
                            ? this.props.company + ", " + this.props.city
                            : ""}
                    </span>
                </div>
            </div>
        );
    }
}
