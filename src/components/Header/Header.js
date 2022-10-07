import React, { Component } from "react";
import "./Header.css";

export default class Header extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="header-container">
                <h1>Resume Creator</h1>
            </div>
        );
    }
}
