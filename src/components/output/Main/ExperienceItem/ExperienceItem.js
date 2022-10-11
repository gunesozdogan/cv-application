import React, { Component } from "react";

export default class ExperienceItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="experience-item">
                <span className="date-from-to">
                    {this.props.dateFrom} {this.props.dateTo}
                </span>
                <div className="experience-right">
                    <span className="position">{this.props.position}</span>
                    <span className="company-city">
                        {this.props.company}
                        {this.props.city}
                    </span>
                </div>
                <div></div>
            </div>
        );
    }
}
