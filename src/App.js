import React, { Component } from "react";
import Header from "./components/Header/Header";
import Personal from "./components/input/Personal/Personal";
import Experience from "./components/input/Experience/Experience";
import Education from "./components/input/Education/Education";
import Title from "./components/output/Title/Title";
import Main from "./components/output/Main/Main";
import Details from "./components/output/Details/Details";
import "./App.css";

export default class App extends Component {
    constructor() {
        super();

        this.state = {
            firstName: "",
            lastName: "",
            title: "",
            address: "",
            phoneNum: "",
            email: "",
            description: "",
            experiences: [
                { position: "", company: "", city: "", from: "", to: "" },
            ],
        };

        this.firstNameChangeHandler = this.firstNameChangeHandler.bind(this);
        this.lastNameChangeHandler = this.lastNameChangeHandler.bind(this);
        this.titleChangeHandler = this.titleChangeHandler.bind(this);
        this.addressChangeHandler = this.addressChangeHandler.bind(this);
        this.phoneNumChangeHandler = this.phoneNumChangeHandler.bind(this);
        this.emailChangeHandler = this.emailChangeHandler.bind(this);
        this.descriptionChangeHandler =
            this.descriptionChangeHandler.bind(this);
        this.addExperienceHandler = this.addExperienceHandler.bind(this);
        this.removeExperienceHandler = this.removeExperienceHandler.bind(this);
        this.positionChangeHandler = this.positionChangeHandler.bind(this);
        this.companyChangeHandler = this.companyChangeHandler.bind(this);
        this.cityChangeHandler = this.cityChangeHandler.bind(this);
        this.fromChangeHandler = this.fromChangeHandler.bind(this);
        this.toChangeHandler = this.toChangeHandler.bind(this);
    }

    firstNameChangeHandler(e) {
        this.setState({
            firstName: e.target.value,
        });
    }

    lastNameChangeHandler(e) {
        this.setState({
            lastName: e.target.value,
        });
    }

    titleChangeHandler(e) {
        this.setState({
            title: e.target.value,
        });
    }

    addressChangeHandler(e) {
        this.setState({
            address: e.target.value,
        });
    }

    phoneNumChangeHandler(e) {
        this.setState({
            phoneNum: e.target.value,
        });
    }

    emailChangeHandler(e) {
        this.setState({
            email: e.target.value,
        });
    }

    descriptionChangeHandler(e) {
        this.setState({
            description: e.target.value,
        });
    }

    addExperienceHandler() {
        this.setState(prev => ({
            experiences: prev.experiences.concat([
                { position: "", company: "", city: "", from: "", to: "" },
            ]),
        }));
    }

    removeExperienceHandler(e) {
        const clickedElIndex = e.target.getAttribute("data-key");
        this.setState(prev => ({
            experiences: prev.experiences.filter((item, index) => {
                console.log(index);
                return Number(index) !== Number(clickedElIndex);
            }),
        }));
    }

    // Helper function for updating experiences state copy
    updateExperiencesCopy(e, state, key) {
        const experiencesCopy = state.experiences.slice();
        const index = e.target.parentNode.getAttribute("data-key");
        experiencesCopy[index][key] = e.target.value;

        return experiencesCopy;
    }

    positionChangeHandler(e) {
        const updatedExperiencesCopy = this.updateExperiencesCopy(
            e,
            this.state,
            "position"
        );
        this.setState({
            experiences: updatedExperiencesCopy,
        });
    }

    companyChangeHandler(e) {
        const updatedExperiencesCopy = this.updateExperiencesCopy(
            e,
            this.state,
            "company"
        );
        this.setState({
            experiences: updatedExperiencesCopy,
        });
    }

    cityChangeHandler(e) {
        const updatedExperiencesCopy = this.updateExperiencesCopy(
            e,
            this.state,
            "city"
        );
        this.setState({
            experiences: updatedExperiencesCopy,
        });
    }

    fromChangeHandler(e) {
        const updatedExperiencesCopy = this.updateExperiencesCopy(
            e,
            this.state,
            "from"
        );
        this.setState({
            experiences: updatedExperiencesCopy,
        });
    }

    toChangeHandler(e) {
        const updatedExperiencesCopy = this.updateExperiencesCopy(
            e,
            this.state,
            "to"
        );
        console.log(this.state.experiences);
        this.setState({
            experiences: updatedExperiencesCopy,
        });
    }

    render() {
        return (
            <div className="App">
                <Header />
                <main>
                    <div className="cv-input-section">
                        <Personal
                            firstNameChangeHandler={this.firstNameChangeHandler}
                            lastNameChangeHandler={this.lastNameChangeHandler}
                            titleChangeHandler={this.titleChangeHandler}
                            addressChangeHandler={this.addressChangeHandler}
                            phoneNumChangeHandler={this.phoneNumChangeHandler}
                            emailChangeHandler={this.emailChangeHandler}
                            descriptionChangeHandler={
                                this.descriptionChangeHandler
                            }
                        />
                        <Experience
                            experiences={this.state.experiences}
                            addExperienceHandler={this.addExperienceHandler}
                            removeExperienceHandler={
                                this.removeExperienceHandler
                            }
                            positionChangeHandler={this.positionChangeHandler}
                            companyChangeHandler={this.companyChangeHandler}
                            cityChangeHandler={this.cityChangeHandler}
                            fromChangeHandler={this.fromChangeHandler}
                            toChangeHandler={this.toChangeHandler}
                        />
                        <Education />
                    </div>
                    <div className="cv-output-section">
                        <Title
                            firstName={this.state.firstName}
                            lastName={this.state.lastName}
                            title={this.state.title}
                        />
                        <div className="output-main-container">
                            <Main description={this.state.description} />
                            <Details
                                address={this.state.address}
                                phoneNum={this.state.phoneNum}
                                email={this.state.email}
                            />
                        </div>
                    </div>
                </main>
            </div>
        );
    }
}
