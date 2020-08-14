//External Dependencies
import React, { useState } from "react";

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
  display: 'flex'
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

const defaultProjectDescription = "Fitness tracker web app that provides visualization for Fitbit data. Fittr.us also includes social features and a badging system along with a timer & stopwatch for workouts"

//Component Definition
const App = () => {
  const [devCompany, setDevCompany] = useState('N/A')
  const [devName, setDevName] = useState('N/A')
  const [devSchool, setDevSchool] = useState('N/A')
  const [isSameSchool, setIsSameSchool] = useState(false)
  const [projectDescription, setProjectDescription] = useState(defaultProjectDescription)
  const [projectLink, setProjectLink] = useState('https://github.com/FitTracker/Fitness-Goal-Tracker')
  const [projectName, setProjectName] = useState('Fittr.us')
  const [siteTitle, setSiteTitle] = useState('LinkedIn Cold Message Creator')

  const handleChangeCompany = e => setDevCompany(e.target.value)
  const handleChangeName = e => setDevCompany(e.target.value)
  const handleChangeProjectName = e => setProjectName(e.target.value)
  const handleChangeProjectDescription = e => setProjectDescription(e.target.value)
  const handleChangeProjectLink = e => setProjectLink(e.target.value)
  const handleChangeSchool = e => setDevSchool(e.target.value)

  const handleSubmit = e => {
    e.preventDefault();
    setDevName(devName)
    setDevSchool(devSchool)
    setDevCompany(devCompany)
    console.log('Updated Name, School, and Company.')
  }

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
      <List key={message.id} style={messageStyles}>
        <ListItem>
          {message}
        </ListItem>
        <Divider />
      </List>
    );
  })

  return (
    <div style={appStyles}>
      <CssBaseline />
      <header style={titleStyles}>
        <h1>{siteTitle}</h1>
        <h3>Faster Networking. Less Typing.</h3>
      </header>

      <div style={contentContainer}>
        <Form
          handleSubmit={handleSubmit}
          handleChangeCompany={handleChangeCompany}
          handleChangeName={handleChangeName}
          handleChangeSchool={handleChangeSchool}
          handleChangeProjectDescription={handleChangeProjectDescription}
          handleChangeProjectLink={handleChangeProjectLink}
          handleChangeProjectName={handleChangeProjectName}
        />
        <Paper style={paperStyles}>
          {messages}
        </Paper>
      </div>
      <Footer />
    </div>
  );
}

export default App;