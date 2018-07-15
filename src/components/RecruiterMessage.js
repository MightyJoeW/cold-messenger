//External Dependencies
import React from 'react';

//Component Definition
const RecruiterMessage = props => (
  <div>
    <h2> Recruiter Message </h2>
    <p>Hi {props.devName},</p>
    <p>
      I’m a web developer currently finishing up an internship with <a href="https://www.call-em-all.com/" target="_blank" rel="noopener noreferrer">Call-Em-All</a> (an automated calling and group texting company also
      known for creating&nbsp;<a href="https://material-ui.com/" target="_blank" rel="noopener noreferrer">Material-UI</a>), and I’m actively seeking a full-time  software engineering position in the Dallas/Fort Worth area.
    </p>
    <p>
      I am proficient in web technologies   including HTML, CSS, JavaScript, React, and Redux.
    </p>
    <p>
      Here is the Github link to a side project I am proud of: <a href={props.projectLink} target="_blank" rel="noopener noreferrer">{props.projectName}</a>.
    </p>
    <p>
      {props.projectName} is a {props.projectDescription}.
    </p>
    <p>Attached please find my resume.</p>
    <p>
      Thanks,<br />
      Joe
    </p>
  </div>
)

export default RecruiterMessage;