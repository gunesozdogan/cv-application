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

            educations: [
                {
                    name: "",
                    city: "",
                    degree: "",
                    subject: "",
                    from: "",
                    to: "",
                },
            ],
        };

        // Personal information
        this.firstNameChangeHandler = this.firstNameChangeHandler.bind(this);
        this.lastNameChangeHandler = this.lastNameChangeHandler.bind(this);
        this.titleChangeHandler = this.titleChangeHandler.bind(this);
        this.addressChangeHandler = this.addressChangeHandler.bind(this);
        this.phoneNumChangeHandler = this.phoneNumChangeHandler.bind(this);
        this.emailChangeHandler = this.emailChangeHandler.bind(this);
        this.descriptionChangeHandler =
            this.descriptionChangeHandler.bind(this);

        // Experience section
        this.addExperienceHandler = this.addExperienceHandler.bind(this);
        this.removeExperienceHandler = this.removeExperienceHandler.bind(this);
        this.positionChangeHandler = this.positionChangeHandler.bind(this);
        this.companyChangeHandler = this.companyChangeHandler.bind(this);
        this.cityChangeHandler = this.cityChangeHandler.bind(this);
        this.fromChangeHandler = this.fromChangeHandler.bind(this);
        this.toChangeHandler = this.toChangeHandler.bind(this);

        // Education section
        this.addEducationHandler = this.addEducationHandler.bind(this);
        this.removeEducationHandler = this.removeEducationHandler.bind(this);
        this.universityNameChangeHandler =
            this.universityNameChangeHandler.bind(this);
        this.educationCityChangeHandler =
            this.educationCityChangeHandler.bind(this);
        this.degreeChangeHandler = this.degreeChangeHandler.bind(this);
        this.subjectChangeHandler = this.subjectChangeHandler.bind(this);
        this.educationFromChangeHandler =
            this.educationFromChangeHandler.bind(this);
        this.educationToChangeHandler =
            this.educationToChangeHandler.bind(this);
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

    // EXPERIENCES
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

    // EDUCATIONS
    addEducationHandler() {
        this.setState(prev => ({
            educations: prev.educations.concat([
                {
                    name: "",
                    city: "",
                    degree: "",
                    subject: "",
                    from: "",
                    to: "",
                },
            ]),
        }));
    }

    removeEducationHandler(e) {
        const clickedElIndex = e.target.getAttribute("data-key");
        this.setState(prev => ({
            educations: prev.educations.filter((item, index) => {
                return Number(index) !== Number(clickedElIndex);
            }),
        }));
    }

    // Helper function for updating experiences state copy
    updateEducationCopy(e, state, key) {
        const educationCopy = state.educations.slice();
        const index = e.target.parentNode.getAttribute("data-key");
        educationCopy[index][key] = e.target.value;

        return educationCopy;
    }

    universityNameChangeHandler(e) {
        const updatedEducationsCopy = this.updateEducationCopy(
            e,
            this.state,
            "name"
        );
        console.log(this.state.educations);
        this.setState({
            educations: updatedEducationsCopy,
        });
    }

    educationCityChangeHandler(e) {
        const updatedEducationsCopy = this.updateEducationCopy(
            e,
            this.state,
            "city"
        );
        this.setState({
            educations: updatedEducationsCopy,
        });
    }

    degreeChangeHandler(e) {
        const updatedEducationsCopy = this.updateEducationCopy(
            e,
            this.state,
            "degree"
        );
        this.setState({
            educations: updatedEducationsCopy,
        });
    }

    subjectChangeHandler(e) {
        const updatedEducationsCopy = this.updateEducationCopy(
            e,
            this.state,
            "subject"
        );
        this.setState({
            educations: updatedEducationsCopy,
        });
    }

    educationFromChangeHandler(e) {
        const updatedEducationsCopy = this.updateEducationCopy(
            e,
            this.state,
            "from"
        );

        this.setState({
            educations: updatedEducationsCopy,
        });
    }

    educationToChangeHandler(e) {
        const updatedEducationsCopy = this.updateEducationCopy(
            e,
            this.state,
            "to"
        );
        console.log(this.state.educations);
        this.setState({
            educations: updatedEducationsCopy,
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
                        <Education
                            educations={this.state.educations}
                            addEducationHandler={this.addEducationHandler}
                            removeEducationHandler={this.removeEducationHandler}
                            nameChangeHandler={this.universityNameChangeHandler}
                            cityChangeHandler={this.educationCityChangeHandler}
                            subjectChangeHandler={this.subjectChangeHandler}
                            degreeChangeHandler={this.degreeChangeHandler}
                            fromChangeHandler={this.educationFromChangeHandler}
                            toChangeHandler={this.educationToChangeHandler}
                        />
                    </div>
                    <div className="cv-output-section">
                        <Title
                            firstName={this.state.firstName}
                            lastName={this.state.lastName}
                            title={this.state.title}
                        />
                        <div className="output-main-container">
                            <Main
                                description={this.state.description}
                                experiences={this.state.experiences}
                                educations={this.state.educations}
                            />
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
