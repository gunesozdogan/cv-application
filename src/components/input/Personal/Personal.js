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
                    onChange={this.props.firstNameChangeHandler}
                />
                <input
                    type="text"
                    placeholder="Last Name"
                    className="last-name-input personal-input"
                    onChange={this.props.lastNameChangeHandler}
                />
                <input
                    type="text"
                    placeholder="Title"
                    className="title-input personal-input"
                    onChange={this.props.titleChangeHandler}
                />

                <input
                    type="text"
                    placeholder="Address"
                    className="address-input personal-input"
                    onChange={this.props.addressChangeHandler}
                />
                <input
                    type="text"
                    placeholder="Phone number"
                    className="phone-number-input personal-input"
                    onChange={this.props.phoneNumChangeHandler}
                />
                <input
                    type="email"
                    placeholder="Email"
                    className="email-input personal-input"
                    onChange={this.props.emailChangeHandler}
                />
                <input
                    type="text"
                    placeholder="Description"
                    className="description-input personal-input"
                    onChange={this.props.descriptionChangeHandler}
                />
            </div>
        );
    }
}
