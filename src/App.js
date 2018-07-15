//External Dependencies
import React, { Component } from "react";

//Internal Dependencies
import DevMessage from "./components/DevMessage";
import Footer from './components/Footer';
import Form from "./components/Form";
import RecruiterMessage from "./components/RecruiterMessage";

// Material-UI Dependencies
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Paper from '@material-ui/core/Paper';

// Local Variables
const appStyles = {
  color: '#3d3c3c',
  fontFamily: 'sans-serif',
  margin: '0 auto',
  overflowY: 'hidden',
  width: '90%',
};

const contentContainer = {
  display: 'flex',
}

const messageStyles = {
  padding: 15,
}

const paperStyles = {
  maxHeight: 600,
  overflowY: 'scroll',
}

const titleStyles = {
  textAlign: 'center',
}

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
      projectDescription: "Fitness tracker web app that provides visualization for Fitbit data. Fittr.us also includes social features and a badging system along with a timer & stopwatch for workouts",
      projectLink: "https://github.com/FitTracker/Fitness-Goal-Tracker",
      projectName: "Fittr.us",
      siteTitle: "LinkedIn Cold Message Creator",
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
  }

  handleChangeName(e) {
    this.setState({
      devName: e.target.value
    });
  }

  handleChangeProjectName(e) {
    this.setState({
      projectName: e.target.value
    });
  }

  handleChangeProjectDescription(e) {
    this.setState({
      projectDescription: e.target.value
    });
  }

  handleChangeProjectLink(e) {
    this.setState({
      projectLink: e.target.value
    });
  }

  handleChangeSchool(e) {
    this.setState({
      devSchool: e.target.value
    });
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
      isSameSchool,
      projectDescription,
      projectLink,
      projectName,
      siteTitle,
    } = this.state;

    const messagesArr = [
      <DevMessage
        devName={devName}
        devCompany={devCompany}
        id={0}
      />,
      <RecruiterMessage
        devName={devName}
        devCompany={devCompany}
        id={1}
        projectDescription={projectDescription}
        projectLink={projectLink}
        projectName={projectName}
      />
    ]

    const messages = messagesArr.map(message => {
      return (
        <List style={messageStyles}>
          <ListItem
            key={message.id}
          >
            {message}
          </ListItem>
          <Divider />
          <br />
        </List>
      );
    })

    return (
      <div style={appStyles}>
        <CssBaseline />
        <div style={titleStyles}>
          <h1>{siteTitle}</h1>
          <h3>Faster Networking. Less Typing.</h3>
        </div>

        <div style={contentContainer}>
          <Form
            handleClick={this.handleClick}
            handleChangeCompany={this.handleChangeCompany}
            handleChangeName={this.handleChangeName}
            handleChangeSchool={this.handleChangeSchool}
            handleChangeProjectDescription={this.handleChangeProjectDescription}
            handleChangeProjectLink={this.handleChangeProjectLink}
            handleChangeProjectName={this.handleChangeProjectName}
          />
          <Paper style={paperStyles}>
            {messages}
          </Paper>
        </div>
        <Footer />
      </div>
    );
  }
}
