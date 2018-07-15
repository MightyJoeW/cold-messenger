//External Dependencies
import React, { Component } from "react";

//Local Dependencies
import Form from "./components/Form";
import DevMessage from "./components/DevMessage";
import RecruiterMessage from "./components/RecruiterMessage";

// Local Variables
const styles = {
  margin: '0 auto',
  fontFamily: "sans-serif",
  width: '80%',
};

// const school = sameSchool ? sameSchool : 'software engineering';

//Component Definition
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      devCompany: null,
      devName: null,
      devSchool: null,
      isSameSchool: false,
      projectDescription: "Fitness tracker web app that provides visualization for Fitbit data. Fittr.us also includes social features and a badging system along with a timer & stopwatch for workouts.",
      projectLink: "https://github.com/FitTracker/Fitness-Goal-Tracker",
      projectName: "Fittr.us",
    };
    this.handleChangeCompany = this.handleChangeCompany.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeProjectDescription = this.handleChangeProjectDescription.bind(this);
    this.handleChangeProjectLink = this.handleChangeProjectLink.bind(this);
    this.handleChangeProjectName = this.handleChangeProjectName.bind(this);
    this.handleChangeSchool = this.handleChangeSchool.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChangeCompany(e) {
    this.setState({
      devCompany: e.target.value
    });
    console.log(e.target.value);
  }

  handleChangeName(e) {
    this.setState({
      devName: e.target.value
    });
    console.log(e.target.value);
  }

  handleChangeProjectName(e) {
    this.setState({
      projectName: e.target.value
    });
    console.log(e.target.value);
  }

  handleChangeProjectDescription(e) {
    this.setState({
      projectDescription: e.target.value
    });
    console.log(e.target.value);
  }

  handleChangeProjectLink(e) {
    this.setState({
      projectLink: e.target.value
    });
    console.log(e.target.value);
  }

  handleChangeSchool(e) {
    this.setState({
      devSchool: e.target.value
    });
    console.log(e.target.value);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState({
      devName: this.state.devName,
      devSchool: this.state.devSchool,
      devCompany: this.state.devCompany
    });
  }

  render() {
    const {
      devCompany,
      devName,
      devSchool,
      projectName,
      projectDescription,
      projectLink,
      isSameSchool
    } = this.state;

    return (
      <div style={styles}>
        <Form
          handleClick={this.handleClick}
          handleChangeCompany={this.handleChangeCompany}
          handleChangeName={this.handleChangeName}
          handleChangeSchool={this.handleChangeSchool}
          handleChangeProjectDescription={this.handleChangeProjectDescription}
          handleChangeProjectLink={this.handleChangeProjectLink}
          handleChangeProjectName={this.handleChangeProjectName}
        />
        <DevMessage devName={devName} devCompany={devCompany} />
        <hr />
        <RecruiterMessage
          devName={devName}
          devCompany={devCompany}
          projectDescription={projectDescription}
          projectLink={projectLink}
          projectName={projectName}
        />
      </div>
    );
  }
}
