//External Dependencies
import React from 'react';

//Component Definition
const DevMessage = props => (
  <div>
    <h2> Dev Message </h2>
    <p>Hi {props.devName},</p>
    <p>Thanks for accepting my request!</p>
    <p>
      I’m a web developer currently finishing up an internship with&nbsp;
      <a href="https://www.call-em-all.com/" target="_blank" rel="noopener noreferrer">Call-Em-All</a> (an automated calling and group texting company also
      known for creating&nbsp;<a href="https://material-ui.com/" target="_blank" rel="noopener noreferrer">Material-UI</a>), and I’m actively seeking a
      full-time software engineering position in the Dallas/Fort Worth
      area.
    </p>
    <p>
      How are you enjoying working for {props.devCompany}? Do you have any
      recommendations for someone looking to get into software
      engineering?
    </p>
    <p>
      Thanks,<br />
      Joe
    </p>
  </div>
)

export default DevMessage;