import React from 'react';

const RecruiterMessage = (props) => (
  <div>
    <h2> Recruiter Message </h2>
    <p>Hi {props.devName},</p>
    <p>I’m a web developer currently finishing up an internship with Call-Em-All (an automated calling and group texting company also known for creating Material-UI), and I’m actively seeking a full-time software engineering position in the Dallas/Fort Worth area. I am proficient in web technologies including HTML, CSS, JavaScript, React, and Redux.</p>
    <p>
      Here is the Github link to a side project I am proud of: <a href={props.projectLink} target="_blank" rel="noopener noreferrer">{props.projectName}</a>.
    </p>
    <p>
      {props.projectName} is a {props.projectDescription}. I had a great time building it with 3 of my colleagues and learned a lot in the process. Etc.
    </p>
    <p>Attached please find my resume.</p>
    <p>
      Thanks,<br />
      Joe
    </p>
  </div>
)

export default RecruiterMessage;