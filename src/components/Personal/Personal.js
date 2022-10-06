import React, { Component } from "react";
import "./Personal.css";

export default class Personal extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="personal-information-container">
                <h2 className="personal-information-heading">
                    Personal Information
                </h2>
                <input
                    type="text"
                    placeholder="First Name"
                    className="first-name-input personal-input"
                />
                <input
                    type="text"
                    placeholder="Last Name"
                    className="last-name-input personal-input"
                />
                <input
                    type="text"
                    placeholder="Title"
                    className="title-input personal-input"
                />
                <input
                    type="img"
                    placeholder="Photo"
                    className="photo-input personal-input"
                />
                <input
                    type="text"
                    placeholder="Address"
                    className="address-input personal-input"
                />
                <input
                    type="text"
                    placeholder="Phone number"
                    className="phone-number-input personal-input"
                />
                <input
                    type="email"
                    placeholder="Email"
                    className="email-input personal-input"
                />
                <input
                    type="text"
                    placeholder="Description"
                    className="description-input personal-input"
                />
            </div>
        );
    }
}
