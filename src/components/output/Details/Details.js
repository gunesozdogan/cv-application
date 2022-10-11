import React, { Component } from "react";
import "./Details.css";

export default class Details extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="details-container">
                <h2 className="personal-details-output-heading details-heading details-heading">
                    Personal Details
                </h2>
                <div className="address-output-container">
                    <h3 className="address-heading details-heading">Address</h3>
                    <p className="address">{this.props.address}</p>
                </div>
                <div className="phone-num-output-container">
                    <h3 className="phone-num-heading details-heading">
                        Phone Number
                    </h3>
                    <p className="phone-num">{this.props.phoneNum}</p>
                </div>
                <div className="email-output-container">
                    <h3 className="email-heading details-heading">Email</h3>
                    <p className="email">{this.props.email}</p>
                </div>
            </div>
        );
    }
}
