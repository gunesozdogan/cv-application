import React, { Component } from "react";
import "./Title.css";

export default class Title extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="title-container">
                <h2 className="full-name">
                    {this.props.firstName} {this.props.lastName}
                </h2>
                <h3 className="title">{this.props.title}</h3>
            </div>
        );
    }
}
