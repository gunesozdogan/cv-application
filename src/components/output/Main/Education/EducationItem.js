import React, { Component } from "react";
import "./Education.css";

export default class EducationItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="education-item">
                <span className="date-from-to">
                    {this.props.from
                        ? this.props.from + " - " + this.props.to
                        : ""}
                </span>
                <div className="education-right">
                    <span className="name-city">
                        {this.props.name
                            ? this.props.name + ", " + this.props.city
                            : ""}{" "}
                    </span>
                    <span className="degree">
                        {this.props.degree
                            ? "Degree: " + this.props.degree
                            : ""}
                    </span>
                    <span className="subject">
                        {this.props.subject
                            ? "Subject: " + this.props.subject
                            : ""}
                    </span>
                </div>
            </div>
        );
    }
}
