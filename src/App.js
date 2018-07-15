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
      isSameSchool: false
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeSchool = this.handleChangeSchool.bind(this);
    this.handleChangeCompany = this.handleChangeCompany.bind(this);
  }

  handleChangeName(e) {
    this.setState({
      devName: e.target.value
    });
    console.log(e.target.value);
  }

  handleChangeSchool(e) {
    this.setState({
      devSchool: e.target.value
    });
    console.log(e.target.value);
  }

  handleChangeCompany(e) {
    this.setState({
      devCompany: e.target.value
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
    const { devCompany, devName, devSchool, isSameSchool } = this.state;

    return (
      <div style={styles}>
        <Form
          handleClick={this.handleClick}
          handleChangeName={this.handleChangeName}
          handleChangeSchool={this.handleChangeSchool}
          handleChangeCompany={this.handleChangeCompany}
        />
        <DevMessage devName={devName} devCompany={devCompany} />
        <hr />
        <RecruiterMessage devName={devName} devCompany={devCompany} />
      </div>
    );
  }
}
