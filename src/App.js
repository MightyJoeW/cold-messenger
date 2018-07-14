//External Dependencies
import React, { Component } from "react";

//Local Dependencies
import Form from "./components/Form";

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
        <div>
          <p>Hi {devName},</p>
          <p>Thanks for accepting my request!</p>
          <p>
            I’m a web developer currently finishing up an internship with&nbsp;
            <a href="https://www.call-em-all.com/" target="_blank">Call-Em-All</a> (an automated calling and group texting company also
            known for creating&nbsp;<a href="https://material-ui.com/" target="_blank">Material-UI</a>), and I’m actively seeking a
            full-time software engineering position in the Dallas/Fort Worth
            area.
          </p>
          <p>
            How are you enjoying working for {devCompany}? Do you have any
            recommendations for someone looking to get into software
            engineering?
          </p>
          <p>
            Thanks,<br />
            Joe
          </p>
        </div>
        <Form
          handleClick={this.handleClick}
          handleChangeName={this.handleChangeName}
          handleChangeSchool={this.handleChangeSchool}
          handleChangeCompany={this.handleChangeCompany}
        />
      </div>
    );
  }
}
